
const AgentAvatar = () => {
  return (
    <div className="relative">
      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center pixel-art animate-pixel-shimmer">
        <div className="text-4xl">🤖</div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-float"></div>
      <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-4 -right-4 w-2 h-2 bg-green-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AgentAvatar;
