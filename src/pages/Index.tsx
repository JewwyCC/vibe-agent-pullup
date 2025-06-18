
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoLive = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/activation");
    }, 2000);
  };

  return (
    <div className="min-h-screen retro-bg retro-grain flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Header Quote */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold retro-text mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            PullUp
          </h1>
          <p className="text-xl md:text-2xl retro-text opacity-80 font-mono">
            Ready to PullUp?
          </p>
        </div>

        {/* Floating Elements */}
        <div className="relative mb-16">
          <div className="absolute -top-8 -left-8 w-6 h-6 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full animate-float pixel-art"></div>
          <div className="absolute -top-4 right-8 w-4 h-4 bg-gradient-to-br from-blue-300 to-green-300 rounded-full animate-float pixel-art" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-8 -right-4 w-5 h-5 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full animate-float pixel-art" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Action Button */}
        <div className="relative">
          {!isLoading ? (
            <Button
              onClick={handleGoLive}
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-6 px-12 text-xl rounded-xl retro-glow transition-all duration-300 transform hover:scale-105 font-mono"
            >
              Go Live
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="text-lg retro-text font-mono">Connecting...</div>
              <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse w-full origin-left"></div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm retro-text opacity-60 font-mono">
          <p>Join spontaneous moments with real people</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
