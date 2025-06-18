
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Activation = () => {
  const [location, setLocation] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [mic, setMic] = useState(false);
  const navigate = useNavigate();

  const allEnabled = location && visibility && mic;

  const handleContinue = () => {
    if (allEnabled) {
      navigate("/agent");
    }
  };

  return (
    <div className="min-h-screen retro-bg retro-grain flex flex-col items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        {/* Radar Animation */}
        <div className="relative mb-12">
          <div className="w-48 h-48 mx-auto relative">
            {/* Radar circles */}
            <div className="absolute inset-0 border-2 border-green-400 rounded-full opacity-30"></div>
            <div className="absolute inset-4 border-2 border-green-400 rounded-full opacity-50"></div>
            <div className="absolute inset-8 border-2 border-green-400 rounded-full opacity-70"></div>
            <div className="absolute inset-16 border-2 border-green-400 rounded-full opacity-90"></div>
            
            {/* Sweeping line */}
            <div className="absolute inset-0">
              <div className="w-full h-full relative">
                <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-green-400 to-transparent origin-left animate-radar"></div>
              </div>
            </div>

            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
          </div>
        </div>

        {/* Permission Prompts */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 retro-glow mb-8">
          <h2 className="text-2xl font-bold retro-text mb-6 font-mono">Getting Ready...</h2>
          
          <div className="space-y-6 text-left">
            <div className="flex items-center justify-between">
              <Label htmlFor="location" className="retro-text font-mono flex-1">
                📍 Share location to find nearby vibes
              </Label>
              <Switch
                id="location"
                checked={location}
                onCheckedChange={setLocation}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="visibility" className="retro-text font-mono flex-1">
                👁️ Make yourself visible to others
              </Label>
              <Switch
                id="visibility"
                checked={visibility}
                onCheckedChange={setVisibility}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="mic" className="retro-text font-mono flex-1">
                🎤 Enable voice for instant connection
              </Label>
              <Switch
                id="mic"
                checked={mic}
                onCheckedChange={setMic}
              />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          disabled={!allEnabled}
          className={`w-full py-4 text-lg font-mono rounded-xl transition-all duration-300 ${
            allEnabled
              ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white retro-glow"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
          }`}
        >
          {allEnabled ? "Enter the Vibe ✨" : "Enable all permissions to continue"}
        </Button>

        <p className="mt-4 text-sm retro-text opacity-60 font-mono">
          Your privacy is protected. You control when you're visible.
        </p>
      </div>
    </div>
  );
};

export default Activation;
