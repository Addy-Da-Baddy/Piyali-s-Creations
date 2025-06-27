
import { useState, useEffect } from "react";

// Sparkling animation component
const SparkleEffect = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay + i * 0.3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

const artworks = [
  {
    id: 1,
    image: "/images/img1.jpg",
    title: "Vibrant Expression"
  },
  {
    id: 2,
    image: "/images/img2.jpg",
    title: "Abstract Harmony"
  },
  {
    id: 3,
    image: "/images/img3.jpg",
    title: "Color Symphony"
  },
  {
    id: 4,
    image: "/images/img4.jpg",
    title: "Artistic Flow"
  },
  {
    id: 5,
    image: "/images/img5.jpg",
    title: "Creative Vision"
  },
  {
    id: 6,
    image: "/images/img6.jpg",
    title: "Expressive Art"
  }
];

interface FeaturedGalleryProps {
  onSeeAll: () => void;
}

const FeaturedGallery = ({ onSeeAll }: FeaturedGalleryProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Golden Indian floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0s', animationDuration: '3s', filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))' }}></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full animate-bounce opacity-35" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        {/* Indian motif elements */}
        <div className="absolute top-1/4 left-1/4 text-2xl text-amber-400 om-pulse opacity-20">
          <i className="fas fa-om"></i>
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-xl text-orange-400 ethereal-float opacity-25">
          <i className="fas fa-fire"></i>
        </div>
        <div className="absolute top-1/2 left-1/2 text-lg text-yellow-500 particle-swirl opacity-15">
          <i className="fas fa-star"></i>
        </div>
      </div>
      
      <div className={`text-center mb-16 transform transition-all duration-1000 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <SparkleEffect delay={0.5} />
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent relative">
          Piyali's Featured Artwork
          <div className="absolute -top-3 -right-3 text-amber-400 animate-spin text-2xl om-pulse">
            <i className="fas fa-om"></i>
          </div>
        </h2>
        <p className="text-xl text-amber-800 max-w-2xl mx-auto">
          Discover the divine beauty and spiritual essence captured in these sacred artistic expressions by Piyali
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {artworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-rotate-1 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:scale-105">
              {/* Sparkling effect on hover */}
              {hoveredIndex === index && <SparkleEffect delay={0} />}
              
              {/* Golden Indian border animation */}
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 animate-pulse blur-sm" style={{ filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))' }}></div>
              </div>
              
              <div className="aspect-[4/5] overflow-hidden relative z-10 rounded-2xl border-2 border-amber-200 group-hover:border-amber-400 transition-colors duration-500">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                  style={{
                    filter: hoveredIndex === index ? 
                      'sepia(0.3) saturate(1.3) contrast(1.1)' : 
                      'sepia(0.1) saturate(1.1)'
                  }}
                />
                
                {/* Indian spiritual elements animation */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {['fas fa-om', 'fas fa-fire', 'far fa-star', 'fas fa-sparkles'].map((iconClass, i) => (
                    <div
                      key={i}
                      className="absolute text-2xl animate-bounce text-amber-300"
                      style={{
                        left: `${15 + i * 25}%`,
                        top: `${20 + i * 15}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '1.5s',
                        filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.8))'
                      }}
                    >
                      <i className={iconClass}></i>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-amber-100 text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                    {artwork.title}
                    <span className="ml-2 inline-block animate-pulse">
                      <i className="fas fa-palette"></i>
                    </span>
                  </h3>
                </div>
              </div>
              
              {/* Corner decoration with Indian motif */}
              <div className="absolute top-4 right-4 text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 om-pulse text-lg" style={{ filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.8))' }}>
                <i className="fas fa-om"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center relative">
        <SparkleEffect delay={2} />
        <button
          onClick={onSeeAll}
          className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden divine-glow"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10">
            See All Artwork Collection
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            <span className="ml-1 inline-block group-hover:animate-bounce">
              <i className="fas fa-om"></i>
            </span>
          </span>
        </button>
        
        {/* Golden floating button decorations */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -top-1 -right-1 text-amber-300 ethereal-float text-sm">
          <i className="fas fa-fire"></i>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
