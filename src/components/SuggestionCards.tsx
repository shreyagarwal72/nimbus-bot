import { Sparkles, Code, Lightbulb, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SuggestionCardsProps {
  onSelectSuggestion: (text: string) => void;
}

const suggestions = [
  {
    icon: Sparkles,
    text: "Explain quantum computing in simple terms",
  },
  {
    icon: Code,
    text: "Help me write a Python function to sort data",
  },
  {
    icon: Lightbulb,
    text: "Give me creative ideas for a business",
  },
  {
    icon: MessageCircle,
    text: "What can you help me with?",
  },
];

export const SuggestionCards = ({ onSelectSuggestion }: SuggestionCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-2xl mx-auto mt-4 sm:mt-8 animate-fade-in w-full px-2">
      {suggestions.map((suggestion, index) => (
        <Card
          key={index}
          className="p-3 sm:p-4 cursor-pointer hover:bg-accent/50 transition-all hover:scale-105 border-border/50 active:scale-95 touch-manipulation"
          onClick={() => onSelectSuggestion(suggestion.text)}
        >
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
              <suggestion.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <p className="text-xs sm:text-sm text-foreground/80 flex-1 leading-relaxed">
              {suggestion.text}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};
