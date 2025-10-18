import { Sparkles, User, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import "highlight.js/styles/github-dark.css";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group w-full py-6 px-4 animate-slide-in-up transition-colors hover:bg-muted/30 relative",
        isUser ? "bg-transparent" : "bg-muted/10"
      )}
    >
      <div className="max-w-3xl mx-auto flex gap-4">
        <div
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-semibold text-sm select-none",
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground"
          )}
        >
          {isUser ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
        </div>
        <div className="flex-1 min-w-0 pt-1 select-text">
          {isUser ? (
            <p className="text-[15px] leading-7 whitespace-pre-wrap break-words text-foreground">
              {content}
            </p>
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2 text-foreground">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-xl font-semibold mt-3 mb-2 text-foreground">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-lg font-semibold mt-2 mb-1 text-foreground">{children}</h3>,
                  p: ({ children }) => <p className="text-[15px] leading-7 mb-4 text-foreground">{children}</p>,
                  strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
                  em: ({ children }) => <em className="italic text-foreground">{children}</em>,
                  code: ({ inline, children }: any) =>
                    inline ? (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">{children}</code>
                    ) : (
                      <code className="block bg-muted p-3 rounded-lg text-sm font-mono overflow-x-auto">{children}</code>
                    ),
                  pre: ({ children }) => <pre className="bg-muted p-3 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-foreground space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-foreground space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="text-[15px] leading-7 text-foreground">{children}</li>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">{children}</blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 flex-shrink-0 select-none"
          title="Copy message"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};
