import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

interface StickyCTAProps {
  onQuizStart?: () => void;
}

const StickyCTA = ({ onQuizStart }: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-t border-border shadow-lg animate-fade-in">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            Find out if your hormones are holding you back
          </p>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Take the 30-second hormone quiz
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={onQuizStart}
            size="sm"
            className="whitespace-nowrap animate-scale-in"
          >
            Start Quiz
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;