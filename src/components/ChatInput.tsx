import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center gap-1.5 sm:gap-2 border border-border rounded-lg sm:rounded-xl bg-background shadow-sm hover:shadow-md transition-shadow">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Nimbus AI..."
          disabled={disabled}
          className="flex-1 min-h-[48px] sm:min-h-[56px] max-h-32 resize-none border-0 bg-transparent px-3 sm:px-4 py-3 sm:py-4 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-[15px]"
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim() || disabled}
          className="mr-1.5 sm:mr-2 h-8 w-8 sm:h-9 sm:w-9 rounded-lg transition-all duration-200 flex-shrink-0 touch-manipulation active:scale-95"
        >
          <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </form>
  );
};
