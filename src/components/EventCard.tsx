
interface EventCardProps {
  event: {
    title: string;
    location: string;
    attendees: string[];
    vibe: string;
    time: string;
    description: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const EventCard = ({ event, isSelected, onSelect }: EventCardProps) => {
  return (
    <div
      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-gradient-to-br from-purple-400/30 to-pink-400/30 border-2 border-purple-400 retro-glow"
          : "bg-white/10 backdrop-blur-sm border-2 border-transparent hover:bg-white/20"
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold retro-text font-mono">{event.title}</h3>
        <span className="text-sm retro-text opacity-70 font-mono">{event.time}</span>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm retro-text font-mono">
          <span>📍</span>
          <span>{event.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm retro-text font-mono">
          <span>✨</span>
          <span>{event.vibe}</span>
        </div>
      </div>

      <p className="text-sm retro-text opacity-80 font-mono mb-4">
        {event.description}
      </p>

      <div className="flex items-center space-x-2">
        <span className="text-sm retro-text font-mono">👥</span>
        <div className="flex -space-x-1">
          {event.attendees.map((attendee, index) => (
            <div
              key={index}
              className="w-6 h-6 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white"
            >
              {attendee[0]}
            </div>
          ))}
          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white">
            +
          </div>
        </div>
        <span className="text-xs retro-text opacity-70 font-mono">
          {event.attendees.length} waiting
        </span>
      </div>
    </div>
  );
};

export default EventCard;
