import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const StarryBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  // Generate static stars once
  const staticStars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      animationDuration: Math.random() * 3 + 2,
    }));
  }, []);

  useEffect(() => {
    setStars(staticStars);
    
    // Periodically add shooting stars
    const interval = setInterval(() => {
      const newShootingStar = {
        id: Date.now(),
        top: Math.random() * 40, // Spawn in top 40%
        left: Math.random() * 100,
        width: Math.random() * 100 + 50,
      };
      
      setShootingStars((prev) => [...prev, newShootingStar]);
      
      // Remove it after animation completes
      setTimeout(() => {
        setShootingStars((prev) => prev.filter(s => s.id !== newShootingStar.id));
      }, 3000); // matching animation length
    }, 4000); // spawn every 4s

    return () => clearInterval(interval);
  }, [staticStars]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-cosmic-gradient">
      {/* Static Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <motion.div
          key={shootingStar.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_10px_2px_#b026ff]"
          style={{
            top: `${shootingStar.top}%`,
            left: `${shootingStar.left}%`,
            width: `${shootingStar.width}px`,
            transformOrigin: "left",
            rotate: "45deg", // Falling down right
          }}
          initial={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: 0,
            x: 600, // Distance to fall horizontally
            y: 600, // Distance to fall vertically
          }}
          transition={{
            duration: 1.5,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
