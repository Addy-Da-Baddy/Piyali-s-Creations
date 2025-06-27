
import { useState } from "react";
import Hero from "../components/Hero";
import FeaturedGallery from "../components/FeaturedGallery";
import FullGallery from "../components/FullGallery";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Index = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Navbar />
      
      {!showFullGallery ? (
        <>
          <Hero />
          <FeaturedGallery onSeeAll={() => setShowFullGallery(true)} />
          <Contact />
        </>
      ) : (
        <FullGallery onBackToHome={() => setShowFullGallery(false)} />
      )}
    </div>
  );
};

export default Index;
