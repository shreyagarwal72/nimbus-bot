import { Bot } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="flex gap-3 mb-4 animate-fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
        <Bot className="w-5 h-5" />
      </div>
      <div className="bg-secondary text-secondary-foreground rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse-gentle" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse-gentle" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-pulse-gentle" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};
