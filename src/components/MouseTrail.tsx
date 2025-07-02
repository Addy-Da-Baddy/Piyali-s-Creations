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
      {/* Main cursor: Golden Mandala SVG */}
      <div
        className="absolute pointer-events-none z-50"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          width: 48,
          height: 48,
          transform: `translate3d(0, 0, 0) scale(${isClicking ? 1.2 : 1})`,
          transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mandala-cursor animate-spin-slow"
          style={{ filter: isClicking ? 'drop-shadow(0 0 16px gold)' : 'drop-shadow(0 0 8px gold)' }}
        >
          <circle cx="24" cy="24" r="20" stroke="#FFD700" strokeWidth="2.5" fill="#FFF8E1" fillOpacity="0.7" />
          <circle cx="24" cy="24" r="14" stroke="#FFC107" strokeWidth="1.5" fill="none" />
          <g opacity="0.7">
            {[...Array(12)].map((_, i) => (
              <ellipse
                key={i}
                cx="24"
                cy="10"
                rx="2.5"
                ry="6"
                fill="#FFD700"
                stroke="#FFC107"
                strokeWidth="0.5"
                transform={`rotate(${i * 30} 24 24)`}
              />
            ))}
          </g>
          <circle cx="24" cy="24" r="4" fill="#FFD700" fillOpacity="0.9" />
        </svg>
      </div>
      
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
