
interface MoodWheelProps {
  onSelect: (mood: string) => void;
}

const MoodWheel = ({ onSelect }: MoodWheelProps) => {
  const moods = [
    { emoji: "😊", label: "Happy", color: "from-yellow-400 to-orange-400" },
    { emoji: "😌", label: "Chill", color: "from-blue-400 to-purple-400" },
    { emoji: "🤔", label: "Curious", color: "from-green-400 to-teal-400" },
    { emoji: "💫", label: "Energetic", color: "from-pink-400 to-red-400" },
    { emoji: "🎨", label: "Creative", color: "from-purple-400 to-pink-400" },
    { emoji: "🌟", label: "Excited", color: "from-yellow-400 to-pink-400" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {moods.map((mood) => (
        <button
          key={mood.label}
          onClick={() => onSelect(mood.label)}
          className={`bg-gradient-to-br ${mood.color} p-4 rounded-xl text-center hover:scale-105 transition-transform duration-200 retro-glow`}
        >
          <div className="text-2xl mb-1">{mood.emoji}</div>
          <div className="text-xs font-mono text-white font-bold">
            {mood.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default MoodWheel;
