
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const WrapUp = () => {
  const [selectedMoment, setSelectedMoment] = useState("");
  const [reflection, setReflection] = useState("");
  const [friendsToAdd, setFriendsToAdd] = useState<string[]>([]);
  const navigate = useNavigate();

  const moments = [
    "Alex's amazing graffiti technique",
    "Sam's story about traveling to Japan",
    "The spontaneous dance break",
    "Jordan's hilarious impressions",
    "Creating art together in the sunset",
  ];

  const people = [
    { name: "Alex", avatar: "🎨", connected: false },
    { name: "Sam", avatar: "✨", connected: false },
    { name: "Jordan", avatar: "🌈", connected: false },
  ];

  const toggleFriend = (name: string) => {
    setFriendsToAdd(prev => 
      prev.includes(name) 
        ? prev.filter(f => f !== name)
        : [...prev, name]
    );
  };

  const handleSaveAndExit = () => {
    console.log("Saving session data:", {
      selectedMoment,
      reflection,
      friendsToAdd,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen retro-bg retro-grain p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold retro-text font-mono mb-2">
            How'd That Go?
          </h1>
          <p className="retro-text opacity-70 font-mono">
            Let's capture the magic before it fades
          </p>
        </div>

        {/* Session Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 retro-glow mb-6">
          <h2 className="text-lg font-bold retro-text font-mono mb-4">
            Session Recap
          </h2>
          <div className="space-y-2 text-sm retro-text font-mono">
            <p>🎨 <strong>Activity:</strong> Sidewalk Sketch Jam</p>
            <p>📍 <strong>Location:</strong> Downtown Park</p>
            <p>⏱️ <strong>Duration:</strong> 1h 23m</p>
            <p>👥 <strong>People:</strong> 4 amazing humans</p>
            <p>⚡ <strong>Vibe:</strong> Creative & Connected</p>
          </div>
        </div>

        {/* Add Friends */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 retro-glow mb-6">
          <h2 className="text-lg font-bold retro-text font-mono mb-4">
            Stay Connected
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {people.map((person) => (
              <div
                key={person.name}
                className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  friendsToAdd.includes(person.name)
                    ? "border-green-400 bg-green-400/20"
                    : "border-gray-400 bg-white/5 hover:bg-white/10"
                }`}
                onClick={() => toggleFriend(person.name)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{person.avatar}</span>
                  <span className="retro-text font-mono">{person.name}</span>
                </div>
                <div className="text-sm retro-text opacity-70">
                  {friendsToAdd.includes(person.name) ? "✓ Added" : "Add friend"}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Moment */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 retro-glow mb-6">
          <h2 className="text-lg font-bold retro-text font-mono mb-4">
            What Stuck With You?
          </h2>
          <div className="space-y-3">
            {moments.map((moment) => (
              <button
                key={moment}
                className={`w-full text-left p-3 rounded-lg border-2 font-mono transition-all duration-300 ${
                  selectedMoment === moment
                    ? "border-purple-400 bg-purple-400/20 retro-text"
                    : "border-gray-400 bg-white/5 retro-text hover:bg-white/10"
                }`}
                onClick={() => setSelectedMoment(moment)}
              >
                {moment}
              </button>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 retro-glow mb-6">
          <h2 className="text-lg font-bold retro-text font-mono mb-4">
            Any Final Thoughts?
          </h2>
          <Textarea
            placeholder="How was this PullUp for you? What made it special?"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            className="bg-white/10 border-gray-400 retro-text font-mono placeholder:text-gray-500 resize-none"
            rows={4}
          />
        </div>

        {/* Save Button */}
        <Button
          onClick={handleSaveAndExit}
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-mono py-4 rounded-xl retro-glow text-lg"
        >
          Save Memory & Return Home 🏠
        </Button>

        {/* Agent Message */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 retro-glow">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full pixel-art animate-pixel-shimmer"></div>
            <div>
              <p className="text-sm retro-text font-mono">
                <strong>Vibe says:</strong> This session will help me find even better connections for you next time! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapUp;
