// Lightweight static Earth for mobile devices
const EarthMobile = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #3b82f6, #1e40af, #1e3a8a)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), inset -10px -10px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Simple continents representation */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute top-8 left-6 w-12 h-8 bg-green-600/60 rounded-full transform rotate-12"></div>
          <div className="absolute top-16 right-8 w-8 h-6 bg-green-600/60 rounded-full"></div>
          <div className="absolute bottom-12 left-12 w-10 h-6 bg-green-600/60 rounded-full transform -rotate-12"></div>
          <div className="absolute bottom-8 right-12 w-6 h-4 bg-green-600/60 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EarthMobile;
