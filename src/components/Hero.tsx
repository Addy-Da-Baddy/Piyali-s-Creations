
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    let moveTimeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('home')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
        setIsMouseMoving(true);
        
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => setIsMouseMoving(false), 150);
      }
    };

    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(moveTimeout);
      };
    }
  }, []);

  return (
    <section 
      id="home" 
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden pt-16 cursor-none"
    >
      {/* Golden Indian mouse follower effect with enhanced animations */}
      <div 
        className={`absolute w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full pointer-events-none z-50 transition-all duration-300 ${
          isMouseMoving ? 'opacity-90 scale-125' : 'opacity-70 scale-100'
        }`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate3d(0, 0, 0)',
          filter: `blur(${isMouseMoving ? '0px' : '1px'}) drop-shadow(0 0 12px rgba(251, 191, 36, 0.6))`,
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.4)'
        }}
      />
      <div 
        className="absolute w-4 h-4 bg-amber-100 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate3d(0, 0, 0)'
        }}
      />
      
      {/* Dynamic golden ripple effects */}
      {isMouseMoving && (
        <>
          <div 
            className="absolute w-16 h-16 border-2 border-amber-400 rounded-full pointer-events-none z-40 animate-ping opacity-40"
            style={{
              left: mousePosition.x - 32,
              top: mousePosition.y - 32,
              filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.3))'
            }}
          />
          <div 
            className="absolute w-10 h-10 border border-yellow-500 rounded-full pointer-events-none z-40 animate-pulse opacity-50"
            style={{
              left: mousePosition.x - 20,
              top: mousePosition.y - 20,
            }}
          />
        </>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 opacity-60"></div>
      
      {/* Animated golden background particles with Indian motifs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + i * 12}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`,
              filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))'
            }}
          />
        ))}
        {/* Indian spiritual symbols */}
        <div className="absolute top-1/4 left-1/4 text-3xl text-amber-400 om-pulse opacity-20">
          <i className="fas fa-om"></i>
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-2xl text-orange-400 ethereal-float opacity-25">
          <i className="fas fa-fire"></i>
        </div>
        <div className="absolute top-1/2 right-1/3 text-xl text-yellow-500 particle-swirl opacity-20">
          <i className="far fa-star"></i>
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-lg text-amber-500 aureole-effect opacity-15">
          <i className="fas fa-sparkles"></i>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent leading-tight relative divine-glow">
            Piyali's Creations
            <div className="absolute -top-4 -right-4 text-amber-400 om-pulse text-3xl">
              <i className="fas fa-om"></i>
            </div>
          </h1>
          
          <p className={`text-xl md:text-2xl text-amber-800 mb-8 font-light transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Where colors dance and divine imagination takes flight
          </p>
          
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-amber-700 mb-12 italic">
              A collection of artistic expressions inspired by Indian heritage and spiritual traditions
            </p>
          </div>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a 
            href="#gallery" 
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.cursor = 'none';
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10">
              Explore Piyali's Artwork
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
        </div>
      </div>
      
      {/* Enhanced floating elements with mouse interaction */}
      <div 
        className="absolute w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse transition-transform duration-300"
        style={{
          bottom: -40,
          right: -40,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      ></div>
      <div 
        className="absolute w-32 h-32 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 animate-pulse delay-1000 transition-transform duration-300"
        style={{
          top: -40,
          left: -40,
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
        }}
      ></div>
      <div 
        className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-15 animate-bounce transition-transform duration-300"
        style={{
          top: '20%',
          right: '15%',
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
        }}
      ></div>
    </section>
  );
};

export default Hero;
