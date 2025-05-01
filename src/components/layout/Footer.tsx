import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter , Utensils, MapIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1A1F2C] to-[#221F26] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/lovable-uploads/b837b8eb-06ee-4d09-837e-2db1111284f7.png"
                alt="OneDine Logo"
                className="h-16 bg-white p-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              OneDine offers a unique blend of cuisines, bringing together flavors from around the world in an elegant dining experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair mb-4 border-b border-onedine-gold/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { title: "Home", path: "/" },
                { title: "Menu", path: "/menu" },
                { title: "About Us", path: "/about" },
                { title: "Reservation", path: "/reservation" },
                { title: "Gallery", path: "/gallery" },
                { title: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-onedine-gold hover:translate-x-1 transition-all duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair mb-4 border-b border-onedine-gold/30 pb-2">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p className="flex items-center gap-2">
                <span className="text-onedine-gold">📍</span> 251/1 Eskay Residency
              </p>
              <p className="flex items-center gap-2">
                <span className="text-onedine-gold">🏙️</span> Paramathi Road
              </p>
              <p className="flex items-center gap-2">
                <span className="text-onedine-gold">🌐</span> Namakkal - 637003, Tamil Nadu
              </p>
              <p className="mt-4">
                <a 
                  href="tel:+917031643164" 
                  className="flex items-center gap-2 hover:text-onedine-gold transition-colors"
                >
                  <span className="text-onedine-gold">📞</span> +917031643164
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@onedine.com" 
                  className="flex items-center gap-2 hover:text-onedine-gold transition-colors"
                >
                  <span className="text-onedine-gold">✉️</span> info@onedine.com
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-playfair mb-4 border-b border-onedine-gold/30 pb-2">Opening Hours</h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                <span>Monday - Thursday</span>
                <span className="text-onedine-gold">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                <span>Friday - Saturday</span>
                <span className="text-onedine-gold">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between hover:bg-white/5 p-1 rounded transition-colors">
                <span>Sunday</span>
                <span className="text-onedine-gold">10:00 - 22:00</span>
              </li>
              <li className="mt-4">
                <Link 
                  to="/reservation" 
                  className="text-onedine-gold hover:underline flex items-center gap-2"
                >
                  <span>📅</span> Book a Table
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700/30 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="http://zoma.to/r/19699071" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-onedine-gold transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              aria-label="Facebook"
            >
              <Utensils size={20} />
            </a>
            <a 
              href="https://www.instagram.com/onedine_namakkal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-onedine-gold transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://maps.app.goo.gl/Up1UsF7d5vN7UE36A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-onedine-gold transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
              aria-label="Twitter"
            >
              <MapIcon size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} OneDine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
