
import { useState } from "react";
import { Button } from "@/components/ui/button";

const VoiceChat = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  const handlePushToTalk = () => {
    setIsRecording(!isRecording);
    
    // Simulate audio level animation
    if (!isRecording) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 100);
      }, 100);
      
      setTimeout(() => {
        clearInterval(interval);
        setIsRecording(false);
        setAudioLevel(0);
      }, 3000);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 retro-glow mb-6">
      <div className="text-center">
        <h3 className="text-lg font-bold retro-text font-mono mb-4">
          Voice Connection
        </h3>

        {/* Waveform Visualization */}
        <div className="flex justify-center items-end space-x-1 h-16 mb-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className={`w-2 bg-gradient-to-t from-green-400 to-blue-400 rounded-full transition-all duration-150 ${
                isRecording ? 'animate-pulse' : ''
              }`}
              style={{
                height: isRecording 
                  ? `${Math.random() * 60 + 10}px` 
                  : '4px'
              }}
            />
          ))}
        </div>

        {/* Push to Talk Button */}
        <Button
          onMouseDown={handlePushToTalk}
          onMouseUp={() => isRecording && setIsRecording(false)}
          onTouchStart={handlePushToTalk}
          onTouchEnd={() => isRecording && setIsRecording(false)}
          className={`w-20 h-20 rounded-full transition-all duration-200 font-mono ${
            isRecording
              ? "bg-red-500 hover:bg-red-600 scale-110 retro-glow"
              : "bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
          }`}
        >
          {isRecording ? "🔴" : "🎤"}
        </Button>

        <p className="text-sm retro-text opacity-70 font-mono mt-3">
          {isRecording ? "Speaking..." : "Hold to talk"}
        </p>
      </div>
    </div>
  );
};

export default VoiceChat;
