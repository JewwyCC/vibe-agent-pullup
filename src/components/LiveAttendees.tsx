
interface Attendee {
  name: string;
  mood: string;
  avatar: string;
}

interface LiveAttendeesProps {
  attendees: Attendee[];
}

const LiveAttendees = ({ attendees }: LiveAttendeesProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 retro-glow mb-6">
      <h3 className="text-lg font-bold retro-text font-mono mb-4">
        Live Vibes
      </h3>
      
      <div className="space-y-3">
        {attendees.map((attendee, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-lg animate-float pixel-art">
              {attendee.avatar}
            </div>
            <div className="flex-1">
              <div className="font-bold retro-text font-mono text-sm">
                {attendee.name}
              </div>
              <div className="text-xs retro-text opacity-70 font-mono">
                {attendee.mood}
              </div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Vibe Cloud */}
      <div className="mt-4 p-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg">
        <div className="text-xs retro-text opacity-70 font-mono mb-2 text-center">
          Group Energy
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {["✨ Creative", "🌟 Inspiring", "🎨 Artistic", "💫 Connected"].map((vibe) => (
            <span
              key={vibe}
              className="text-xs bg-white/20 px-2 py-1 rounded-full retro-text font-mono"
            >
              {vibe}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAttendees;
