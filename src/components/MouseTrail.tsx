import { useEffect, useState } from 'react';

interface MouseTrailProps {
  enabled?: boolean;
}

const MouseTrail = ({ enabled = true }: MouseTrailProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Add to trail
      const newTrailPoint = { ...newPosition, id: trailId++ };
      setTrail(prev => [...prev.slice(-10), newTrailPoint]); // Keep last 10 points
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Clean up old trail points
    const cleanup = setInterval(() => {
      setTrail(prev => prev.slice(-8));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(cleanup);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className={`absolute w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-200 ${
          isClicking ? 'scale-150 opacity-80' : 'scale-100 opacity-60'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `translate3d(0, 0, 0) scale(${isClicking ? 1.5 : 1})`,
        }}
      />
      
      {/* Inner cursor */}
      <div
        className="absolute w-2 h-2 bg-white rounded-full mix-blend-difference"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-ping"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: (index + 1) / trail.length * 0.5,
            animationDelay: `${index * 50}ms`,
            animationDuration: '1s'
          }}
        />
      ))}

      {/* Ripple effect on click */}
      {isClicking && (
        <div
          className="absolute w-16 h-16 border-2 border-orange-400 rounded-full animate-ping"
          style={{
            left: mousePosition.x - 32,
            top: mousePosition.y - 32,
          }}
        />
      )}
    </div>
  );
};

export default MouseTrail;
