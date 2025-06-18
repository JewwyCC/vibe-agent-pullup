
import { useState, useEffect } from "react";

interface ChatBubbleProps {
  text: string;
}

const ChatBubble = ({ text }: ChatBubbleProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayText("");
    setIsTyping(true);
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="relative">
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 retro-glow relative">
        <p className="retro-text font-mono leading-relaxed">
          {displayText}
          {isTyping && <span className="animate-pulse">|</span>}
        </p>
        
        {/* Chat bubble tail */}
        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/20 rotate-45"></div>
      </div>
    </div>
  );
};

export default ChatBubble;
