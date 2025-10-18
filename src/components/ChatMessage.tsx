import { Sparkles, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "group w-full py-6 px-4 animate-slide-in-up transition-colors hover:bg-muted/30",
        isUser ? "bg-transparent" : "bg-muted/10"
      )}
    >
      <div className="max-w-3xl mx-auto flex gap-4">
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-semibold text-sm",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground"
          )}
        >
          {isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <p className="text-[15px] leading-7 whitespace-pre-wrap break-words text-foreground">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
