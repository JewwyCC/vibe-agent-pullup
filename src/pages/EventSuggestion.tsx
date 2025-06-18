
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";

const EventSuggestion = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);
  const navigate = useNavigate();

  const events = [
    {
      title: "Sidewalk Sketch Jam",
      location: "Downtown Park",
      attendees: ["Alex", "Sam", "Jordan"],
      vibe: "Creative & Chill",
      time: "Now",
      description: "Bring art supplies and let's create something together",
    },
    {
      title: "Basketball Vibes",
      location: "Triangle Park",
      attendees: ["Jess", "Chris", "Taylor"],
      vibe: "Active & Fun",
      time: "15 min",
      description: "Casual pickup game, all skill levels welcome",
    },
    {
      title: "Coffee & Deep Talks",
      location: "Retro Café",
      attendees: ["Morgan", "Casey"],
      vibe: "Thoughtful & Warm",
      time: "30 min",
      description: "Philosophy, life stories, and good coffee",
    },
  ];

  const handleJoinEvent = () => {
    navigate("/live");
  };

  return (
    <div className="min-h-screen retro-bg retro-grain p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold retro-text font-mono mb-2">
            Perfect Matches Found
          </h1>
          <p className="retro-text opacity-70 font-mono">
            Vibe analyzed your energy and found these connections
          </p>
        </div>

        {/* Event Cards */}
        <div className="space-y-4 mb-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              isSelected={selectedEvent === index}
              onSelect={() => setSelectedEvent(index)}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleJoinEvent}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-mono py-4 rounded-xl retro-glow text-lg"
          >
            Join {events[selectedEvent].title} ✨
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="retro-border bg-white/10 backdrop-blur-sm retro-text font-mono hover:bg-white/20"
            >
              Swap Idea
            </Button>
            <Button
              variant="outline"
              className="retro-border bg-white/10 backdrop-blur-sm retro-text font-mono hover:bg-white/20"
            >
              Not Now
            </Button>
          </div>
        </div>

        {/* Agent Tip */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 retro-glow">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full pixel-art animate-pixel-shimmer"></div>
            <div>
              <p className="text-sm retro-text font-mono">
                <strong>Vibe says:</strong> These people share your creative energy and are all within 10 minutes of you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSuggestion;
