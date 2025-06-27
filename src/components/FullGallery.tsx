
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

// Enhanced sparkling animation component with ethereal effects
const SparkleEffect = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full ${
            i % 3 === 0 ? 'animate-ping' : i % 3 === 1 ? 'ethereal-float' : 'aureole-effect'
          } opacity-70`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay + i * 0.15}s`,
            animationDuration: `${1.2 + Math.random() * 2.5}s`,
            filter: 'drop-shadow(0 0 3px rgba(251, 191, 36, 0.6))'
          }}
        />
      ))}
      {/* Additional larger ethereal particles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full particle-swirl opacity-40"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 15}%`,
            animationDelay: `${delay + i * 0.8}s`,
            animationDuration: `${3 + i * 0.5}s`,
            filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))'
          }}
        />
      ))}
    </div>
  );
};

// Generate artwork array from all available images in the folder
const generateAllArtworks = () => {
  const artworkTitles = [
    "Vibrant Expression", "Abstract Harmony", "Color Symphony", "Artistic Flow",
    "Creative Vision", "Expressive Art", "Bold Strokes", "Emotional Depth",
    "Artistic Journey", "Creative Soul", "Vibrant Life", "Passionate Expression",
    "Dreamy Landscapes", "Modern Abstract", "Fluid Motion", "Textured Beauty",
    "Color Explosion", "Serene Moments", "Dynamic Energy", "Artistic Wonder",
    "Visual Poetry", "Creative Essence", "Masterful Strokes", "Inspiring Vision",
    "Ethereal Beauty", "Passionate Strokes", "Colorful Dreams", "Artistic Bliss",
    "Creative Harmony", "Expressive Soul", "Vibrant Energy", "Artistic Grace"
  ];

  const artworks = [];
  
  // List of all available images in the public/images folder
  const availableImages = [
    "163970018_4431840563496151_3919901511393632786_n.jpg",
    "175787972_4519332808080259_793618456769931089_n.jpg", 
    "201058982_4694817143865157_3318166626773977098_n.jpg",
    "468090446_9598435720169917_6250102050083314043_n.jpg",
    "469341745_9671020142911474_1821811272235479331_n.jpg",
    "484545746_24024515150468734_7311022176390943927_n.jpg",
    "484966636_24029672666619649_6865044300477811034_n.jpg",
    "486255159_24069034582683457_3468419065398137354_n.jpg",
    "490377476_24178685128385068_1349997040621527070_n.jpg",
    "491956946_24269715275948719_3096647878414095563_n.jpg",
    "498245493_24470084579245120_559468941596477162_n.jpg",
    "500999260_24556585483928362_8220796933563504565_n.jpg",
    "501032790_24559687286951515_4137393865004936331_n.jpg",
    "501784901_24555194697400774_3544489118148789509_n.jpg",
    "502176902_24590556007197976_4260234658470355176_n.jpg",
    "502717334_24591072893812954_6437379462411325505_n.jpg",
    "503166363_24592645923655651_1145973445963784183_n.jpg",
    "503398419_24626565086930401_7657806764866841245_n.jpg",
    "504473261_24636565289263714_1593590113650776952_n.jpg",
    "87387474_3318756078137944_9208753638921469952_n.jpg",
    "93255779_3416659978347553_3705905710945533952_n.jpg",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg"
  ];
  
  // Create artwork objects for all available images
  availableImages.forEach((imageName, index) => {
    artworks.push({
      id: index + 1,
      image: `/images/${imageName}`,
      title: artworkTitles[index % artworkTitles.length] || `Artwork ${index + 1}`
    });
  });
  
  return artworks;
};

const allArtworks = generateAllArtworks();

interface FullGalleryProps {
  onBackToHome: () => void;
}

const FullGallery = ({ onBackToHome }: FullGalleryProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden cursor-none" style={{ userSelect: isDragging ? 'none' : 'auto' }}>
      {/* Custom mouse cursor - Golden Indian theme */}
      <div 
        className={`fixed w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full pointer-events-none z-50 transition-all duration-200 ${isDragging ? 'scale-150' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `translate3d(0, 0, 0) scale(${isDragging ? 1.5 : 1})`,
          opacity: 0.8,
          boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)'
        }}
      />
      <div 
        className="fixed w-3 h-3 bg-amber-100 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transform: 'translate3d(0, 0, 0)'
        }}
      />
      
      {/* Golden Indian floating background elements with ethereal animations */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full ethereal-float opacity-30 divine-glow" 
          style={{ 
            animationDelay: '0s', 
            animationDuration: '4s',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))'
          }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-4 h-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full particle-swirl opacity-40" 
          style={{ 
            animationDelay: '1s', 
            animationDuration: '3s',
            transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * 0.005}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/3 w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full aureole-effect opacity-30" 
          style={{ 
            animationDelay: '2s', 
            animationDuration: '2s',
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * -0.008}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full ethereal-float opacity-35" 
          style={{ 
            animationDelay: '0.5s', 
            animationDuration: '3.5s',
            transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * 0.012}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-4 h-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full divine-glow opacity-25" 
          style={{ 
            animationDelay: '1.5s', 
            animationDuration: '4s',
            transform: `translate(${mousePosition.x * 0.006}px, ${mousePosition.y * -0.006}px)`
          }}
        ></div>
        
        {/* Floating sacred icons */}
        <div className="absolute top-1/4 left-1/6 text-2xl text-amber-400 om-pulse opacity-20">
          <i className="fas fa-om"></i>
        </div>
        <div className="absolute bottom-1/3 right-1/5 text-xl text-orange-400 ethereal-float opacity-25">
          <i className="fas fa-fire"></i>
        </div>
        <div className="absolute top-3/4 left-1/2 text-lg text-yellow-500 particle-swirl opacity-15">
          <i className="far fa-star"></i>
        </div>
        <div className="absolute top-1/3 right-1/3 text-base text-amber-300 aureole-effect opacity-20">
          <i className="fas fa-sparkles"></i>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`flex items-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <button
            onClick={onBackToHome}
            className="flex items-center text-amber-700 hover:text-orange-600 transition-colors duration-300 group relative bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-2 rounded-full shadow-lg hover:shadow-xl divine-glow"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={20} />
            <span className="text-lg font-medium">Back to Piyali's Gallery</span>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-60"></div>
          </button>
        </div>

        <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SparkleEffect delay={0.5} />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent relative">
            Piyali's Complete Collection
            <div className="absolute -top-3 -right-3 text-amber-400 animate-spin text-2xl">
              <i className="fas fa-om"></i>
            </div>
          </h1>
          <p className="text-xl text-amber-800 max-w-2xl mx-auto">
            Explore the divine artistry and spiritual expressions inspired by Indian heritage and traditions
          </p>
        </div>

        <div className="masonry-grid">
          {allArtworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`masonry-item group transform transition-all duration-700 hover:scale-105 hover:-rotate-1 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${isDragging ? 'pointer-events-none' : 'cursor-pointer'}`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: hoveredIndex === index ? 
                  `translate(${(mousePosition.x - dragStart.x) * 0.02}px, ${(mousePosition.y - dragStart.y) * 0.02}px) scale(1.05) rotate(-1deg)` : 
                  'translate(0, 0) scale(1) rotate(0deg)'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Sparkling effect on hover */}
                {hoveredIndex === index && <SparkleEffect delay={0} />}
                
                {/* Golden Indian border effect */}
                <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 animate-pulse blur-sm"
                    style={{
                      background: hoveredIndex === index ? 
                        `linear-gradient(${mousePosition.x * 0.5}deg, #fbbf24, #f59e0b, #ea580c)` : 
                        'linear-gradient(45deg, #fbbf24, #f59e0b, #ea580c)',
                      filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))'
                    }}
                  ></div>
                </div>
                
                <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-amber-200 group-hover:border-amber-400 transition-colors duration-500">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    style={{
                      filter: hoveredIndex === index ? 
                        `sepia(0.3) saturate(1.3) hue-rotate(${mousePosition.x * 0.1}deg) contrast(1.1)` : 
                        'sepia(0.1) saturate(1.1)'
                    }}
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Indian spiritual elements */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {['fas fa-om', 'fas fa-fire', 'fas fa-star', 'fas fa-sparkles'].map((iconClass, idx) => (
                          <div
                            key={idx}
                            className={`absolute text-2xl animate-bounce text-amber-300`}
                            style={{
                              left: `${15 + idx * 25 + (hoveredIndex === index ? Math.sin(mousePosition.x * 0.01 + idx) * 5 : 0)}%`,
                              top: `${20 + idx * 15 + (hoveredIndex === index ? Math.cos(mousePosition.y * 0.01 + idx) * 5 : 0)}%`,
                              animationDelay: `${idx * 0.3}s`,
                              animationDuration: '1.5s',
                              filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.8))'
                            }}
                          >
                            <i className={iconClass}></i>
                          </div>
                        ))}
                      </div>
                  
                  {/* Golden gradient overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                  <div 
                    className="absolute top-4 right-4 text-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin text-lg"
                    style={{
                      transform: hoveredIndex === index ? 
                        `rotate(${mousePosition.x * 0.5}deg) scale(1.2)` : 
                        'rotate(0deg) scale(1)',
                      filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.8))'
                    }}
                  >
                    <i className="fas fa-om"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
