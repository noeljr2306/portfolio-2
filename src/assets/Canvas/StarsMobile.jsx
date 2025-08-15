import { useState } from "react";

// Lightweight 2D stars for mobile devices
const StarsMobile = () => {
  const [stars] = useState(() => {
    const starArray = [];
    const starCount = 50; // Reduced from 1000 for mobile
    
    for (let i = 0; i < starCount; i++) {
      starArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        size: Math.random() * 2 + 1,
      });
    }
    return starArray;
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.animationDelay,
            animationDuration: '3s',
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
};

export default StarsMobile;
