
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AgentAvatar from "@/components/AgentAvatar";
import ChatBubble from "@/components/ChatBubble";
import MoodWheel from "@/components/MoodWheel";

const Agent = () => {
  const [chatStep, setChatStep] = useState(0);
  const [selectedMood, setSelectedMood] = useState("");
  const [selectedPreference, setSelectedPreference] = useState("");
  const navigate = useNavigate();

  const chatFlow = [
    {
      text: "Hey there! I'm Vibe, your spontaneous adventure companion. How are you feeling today?",
      showMoodWheel: true,
    },
    {
      text: `${selectedMood ? `${selectedMood} vibes, nice!` : "Great!"} What's calling to you right now?`,
      showPreferences: true,
    },
    {
      text: "Perfect! I'm scanning for people nearby who match your energy... Found 3 potential connections! Want me to set something up?",
      showAction: true,
    },
  ];

  const currentChat = chatFlow[chatStep];

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setTimeout(() => setChatStep(1), 1000);
  };

  const handlePreferenceSelect = (preference: string) => {
    setSelectedPreference(preference);
    setTimeout(() => setChatStep(2), 1000);
  };

  const handleContinue = () => {
    navigate("/suggestion");
  };

  return (
    <div className="min-h-screen retro-bg retro-grain flex flex-col items-center justify-center p-6">
      <div className="max-w-md mx-auto w-full">
        {/* Agent Avatar */}
        <div className="text-center mb-8">
          <AgentAvatar />
          <h2 className="text-xl font-bold retro-text mt-4 font-mono">Vibe Agent</h2>
          <div className="flex justify-center mt-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-1"></div>
            <span className="text-sm retro-text opacity-70 font-mono">Online</span>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="space-y-6">
          <ChatBubble text={currentChat.text} />

          {/* Mood Wheel */}
          {currentChat.showMoodWheel && (
            <MoodWheel onSelect={handleMoodSelect} />
          )}

          {/* Preference Options */}
          {currentChat.showPreferences && (
            <div className="grid grid-cols-2 gap-3">
              {["Chill", "Social", "Indoors", "Outdoors"].map((pref) => (
                <Button
                  key={pref}
                  onClick={() => handlePreferenceSelect(pref)}
                  variant="outline"
                  className="retro-border bg-white/10 backdrop-blur-sm retro-text font-mono hover:bg-white/20 transition-all duration-300"
                >
                  {pref}
                </Button>
              ))}
            </div>
          )}

          {/* Action Button */}
          {currentChat.showAction && (
            <div className="space-y-3">
              <Button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-mono py-4 rounded-xl retro-glow"
              >
                Yes, link me up! 🚀
              </Button>
              <Button
                variant="outline"
                className="w-full retro-border bg-white/10 backdrop-blur-sm retro-text font-mono hover:bg-white/20"
              >
                Let me think about it
              </Button>
            </div>
          )}
        </div>

        {/* Chat History Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {chatFlow.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= chatStep ? "bg-purple-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agent;
