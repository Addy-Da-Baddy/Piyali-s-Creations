
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Piyalis Creation
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium">Home</a>
              <a href="#gallery" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium">Gallery</a>
              <a href="#contact" className="text-gray-800 hover:text-orange-600 transition-colors duration-300 font-medium">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-orange-600 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-orange-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-800 hover:text-orange-600 transition-colors duration-300">Home</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-800 hover:text-orange-600 transition-colors duration-300">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 hover:text-orange-600 transition-colors duration-300">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
