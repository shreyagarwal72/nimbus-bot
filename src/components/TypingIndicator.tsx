import { Sparkles } from "lucide-react";

export const TypingIndicator = () => {
  return (
    <div className="w-full py-6 px-4 bg-muted/10 animate-fade-in">
      <div className="max-w-3xl mx-auto flex gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-md bg-accent text-accent-foreground flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="flex-1 pt-1">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-pulse-gentle" style={{ animationDelay: "0s" }} />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-pulse-gentle" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-pulse-gentle" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
