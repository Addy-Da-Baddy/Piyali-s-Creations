
import { useState } from "react";
import { Phone, Instagram, Mail, Send, Facebook } from "lucide-react";

// Sparkling animation component
const SparkleEffect = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay + i * 0.4}s`,
            animationDuration: `${2 + Math.random() * 1.5}s`
          }}
        />
      ))}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData object for FormSubmit
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    
    // Submit to FormSubmit
    fetch('https://formsubmit.co/das2010piyali@gmail.com', {
      method: 'POST',
      body: formDataObj
    }).then(() => {
      alert('Thank you for your message! Piyali will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      alert('There was an error sending your message. Please try again.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-bounce opacity-25" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <SparkleEffect delay={0.5} />
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent relative">
            Connect with Piyali
            <div className="absolute -top-2 -right-4 text-yellow-400 animate-spin text-2xl">✨</div>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with Piyali's Creations to discuss commissions, exhibitions, or simply to share your appreciation for art
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group">
              <a 
                href="tel:+918697176312"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-rotate-1 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 8697176312</p>
                </div>
                <div className="absolute top-2 right-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce text-sm">
                  📞
                </div>
              </a>
            </div>

            <div className="group">
              <a 
                href="https://www.instagram.com/dpiyali/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-800">Instagram</h3>
                  <p className="text-gray-600">@dpiyali</p>
                </div>
                <div className="absolute top-2 right-2 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce text-sm">
                  💕
                </div>
              </a>
            </div>

            <div className="group">
              <a 
                href="mailto:das2010piyali@gmail.com"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:-rotate-1 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">das2010piyali@gmail.com</p>
                </div>
                <div className="absolute top-2 right-2 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce text-sm">
                  ✉️
                </div>
              </a>
            </div>

            <div className="group">
              <a 
                href="https://www.facebook.com/profile.php?id=100089786501568"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-800">Facebook</h3>
                  <p className="text-gray-600">Piyali Das</p>
                </div>
                <div className="absolute top-2 right-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce text-sm">
                  👍
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden group">
            <SparkleEffect delay={1} />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 relative z-10">
              Send Piyali a message
              <span className="ml-2 inline-block animate-bounce">💌</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10" action="https://formsubmit.co/das2010piyali@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-focus-within:scale-105"
                  placeholder="Enter your name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 group-focus-within:scale-105"
                  placeholder="Enter your email"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none group-focus-within:scale-105"
                  placeholder="Tell Piyali about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Send Message to Piyali</span>
                <span className="ml-2 relative z-10 group-hover:animate-bounce">✨</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
