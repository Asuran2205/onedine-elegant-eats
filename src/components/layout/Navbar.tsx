
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Navigation links
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "About", path: "/about" },
    { title: "Reservation", path: "/reservation" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white bg-opacity-95 shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b837b8eb-06ee-4d09-837e-2db1111284f7.png" 
            alt="OneDine Logo" 
            className="h-12 md:h-14" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "nav-link text-sm font-medium transition-colors",
                    isScrolled || location.pathname !== "/" ? "text-onedine-brown" : "text-white",
                    location.pathname === link.path && "active"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <Link 
            to="/reservation"
            className="btn-primary"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-onedine-brown"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[61px] bg-white z-50 animate-slide-from-right">
            <nav className="container mx-auto px-4 py-6">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "text-onedine-brown text-xl font-medium block py-2",
                        location.pathname === link.path && "text-onedine-burgundy"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/reservation"
                    className="btn-primary w-full block text-center mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Book a Table
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
