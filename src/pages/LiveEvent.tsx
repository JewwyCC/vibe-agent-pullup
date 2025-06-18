
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VoiceChat from "@/components/VoiceChat";
import LiveAttendees from "@/components/LiveAttendees";

const LiveEvent = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const navigate = useNavigate();

  const prompts = [
    "Share a random thought that's been on your mind",
    "What's one thing you love about today?",
    "If you could teleport anywhere right now, where would you go?",
    "What's your creative superpower?",
  ];

  const attendees = [
    { name: "Alex", mood: "Excited to create", avatar: "🎨" },
    { name: "Sam", mood: "Feeling inspired", avatar: "✨" },
    { name: "Jordan", mood: "Ready to vibe", avatar: "🌈" },
    { name: "You", mood: "Creative energy", avatar: "🚀" },
  ];

  const handleEndEvent = () => {
    navigate("/wrapup");
  };

  const nextPrompt = () => {
    setCurrentPrompt((prev) => (prev + 1) % prompts.length);
  };

  return (
    <div className="min-h-screen retro-bg retro-grain p-6">
      <div className="max-w-md mx-auto">
        {/* Event Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 retro-glow mb-6">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-xl font-bold retro-text font-mono">
              Sidewalk Sketch Jam
            </h1>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm retro-text font-mono">LIVE</span>
            </div>
          </div>
          <div className="flex justify-between text-sm retro-text opacity-70 font-mono">
            <span>📍 Downtown Park</span>
            <span>⏱️ 23 min</span>
          </div>
        </div>

        {/* Current Prompt */}
        <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm rounded-xl p-6 mb-6 retro-glow">
          <div className="text-center">
            <div className="text-sm retro-text opacity-70 font-mono mb-2">
              Current Vibe Check
            </div>
            <p className="text-lg retro-text font-mono font-bold">
              "{prompts[currentPrompt]}"
            </p>
            <Button
              onClick={nextPrompt}
              variant="ghost"
              className="mt-3 text-sm retro-text font-mono hover:bg-white/10"
            >
              Next prompt →
            </Button>
          </div>
        </div>

        {/* Voice Chat Interface */}
        <VoiceChat />

        {/* Live Attendees */}
        <LiveAttendees attendees={attendees} />

        {/* Event Controls */}
        <div className="space-y-3 mt-8">
          <Button
            onClick={handleEndEvent}
            className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-mono py-4 rounded-xl retro-glow"
          >
            Wrap Up Session 📝
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="retro-border bg-white/10 backdrop-blur-sm retro-text font-mono hover:bg-white/20"
            >
              Invite More
            </Button>
            <Button
              variant="outline"
              className="retro-border bg-white/10 backdrop-blur-sm retro-text font-mono hover:bg-white/20"
            >
              Change Location
            </Button>
          </div>
        </div>

        {/* Live Stats */}
        <div className="mt-6 text-center">
          <div className="flex justify-center space-x-6 text-sm retro-text opacity-70 font-mono">
            <span>👥 4 people</span>
            <span>💬 12 voice notes</span>
            <span>⚡ High energy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEvent;
