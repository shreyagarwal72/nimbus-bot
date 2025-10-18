import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { ChatSidebar } from "@/components/ChatSidebar";
import { SuggestionCards } from "@/components/SuggestionCards";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { LogOut, Menu, Info, Cloud } from "lucide-react";
import { toast } from "sonner";
import { streamChat } from "@/lib/chatService";
import { User, Session } from "@supabase/supabase-js";

type Message = { role: "user" | "assistant"; content: string };

const Chat = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (!session) {
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (user) {
      createNewConversation();
    }
  }, [user]);

  const createNewConversation = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("conversations")
        .insert({
          user_id: user.id,
          title: "New Chat",
        })
        .select()
        .single();

      if (error) throw error;
      setConversationId(data.id);
      setMessages([]);
      setShowMobileMenu(false);
    } catch (error) {
      console.error("Error creating conversation:", error);
      toast.error("Failed to create new conversation");
    }
  };

  const loadConversation = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", id)
        .order("created_at", { ascending: true });

      if (error) throw error;
      
      setConversationId(id);
      setMessages(data.map(msg => ({ role: msg.role as "user" | "assistant", content: msg.content })));
    } catch (error) {
      console.error("Error loading conversation:", error);
      toast.error("Failed to load conversation");
    }
  };

  const saveMessage = async (role: "user" | "assistant", content: string) => {
    if (!conversationId) return;

    try {
      await supabase.from("messages").insert({
        conversation_id: conversationId,
        role,
        content,
      });
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!conversationId) {
      toast.error("Please wait for conversation to initialize");
      return;
    }

    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    await saveMessage("user", content);
    setIsLoading(true);

    // Auto-generate conversation title from first message
    if (messages.length === 0) {
      const title = content.length > 50 ? content.substring(0, 50) + "..." : content;
      try {
        await supabase
          .from("conversations")
          .update({ title })
          .eq("id", conversationId);
      } catch (error) {
        console.error("Error updating conversation title:", error);
      }
    }

    let assistantContent = "";
    const upsertAssistant = (chunk: string) => {
      assistantContent += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantContent } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantContent }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMessage],
        onDelta: upsertAssistant,
        onDone: async () => {
          setIsLoading(false);
          await saveMessage("assistant", assistantContent);
        },
        onError: (error) => {
          setIsLoading(false);
          toast.error(error);
          setMessages((prev) => prev.slice(0, -1));
        },
      });
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to send message");
      setMessages((prev) => prev.slice(0, -1));
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      {user && (
        <ChatSidebar
          userId={user.id}
          currentConversationId={conversationId}
          onSelectConversation={loadConversation}
          onNewChat={createNewConversation}
          isOpen={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 h-screen">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                title="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Cloud className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  NimbusBot.ai
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link to="/about">
                <Button variant="ghost" size="icon" title="About">
                  <Info className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleSignOut}
                title="Sign out"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Messages */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-background">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center animate-fade-in h-full px-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-semibold mb-3 text-foreground">
                Nimbus AI
              </h1>
              <p className="text-muted-foreground max-w-md mb-8 text-[15px]">
                Your intelligent assistant created by Vanshu Agarwal. How can I help you today?
              </p>
              <SuggestionCards onSelectSuggestion={handleSendMessage} />
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <ChatMessage key={index} role={message.role} content={message.content} />
              ))}
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </>
          )}
        </main>

        {/* Input */}
        <footer className="border-t border-border bg-background">
          <div className="px-4 py-4 max-w-3xl mx-auto">
            <ChatInput onSend={handleSendMessage} disabled={isLoading} />
            <p className="text-xs text-muted-foreground text-center mt-3">
              Nimbus AI can make mistakes. Consider checking important information.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chat;
