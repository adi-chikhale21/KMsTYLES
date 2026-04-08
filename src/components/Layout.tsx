import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-brand-beige/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center group">
          <span className="font-script text-4xl md:text-5xl text-brand-charcoal group-hover:text-brand-gold transition-colors">Kmstyles</span>
          <span className="text-[0.6rem] uppercase tracking-[0.3em] font-sans text-brand-charcoal/70 mt-1">Hair Stylist</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-brand-gold",
                location.pathname === link.path ? "text-brand-gold" : "text-brand-charcoal"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4 border-l border-brand-charcoal/20 pl-8">
            <Link
              to="/book"
              className="px-6 py-2 border border-brand-charcoal text-brand-charcoal text-xs uppercase tracking-widest hover:bg-brand-charcoal hover:text-brand-beige transition-colors duration-300"
            >
              Book Now
            </Link>
            <Link
              to="/gift-card"
              className="px-6 py-2 bg-brand-charcoal text-brand-beige text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300"
            >
              Gift Card
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-charcoal focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-brand-beige border-t border-brand-charcoal/10 shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-lg uppercase tracking-widest transition-colors",
                    location.pathname === link.path ? "text-brand-gold" : "text-brand-charcoal"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-brand-charcoal/10 flex flex-col space-y-4">
                <Link
                  to="/book"
                  className="w-full text-center px-6 py-3 border border-brand-charcoal text-brand-charcoal text-sm uppercase tracking-widest"
                >
                  Book Now
                </Link>
                <Link
                  to="/gift-card"
                  className="w-full text-center px-6 py-3 bg-brand-charcoal text-brand-beige text-sm uppercase tracking-widest"
                >
                  Gift Card
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-beige py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex flex-col items-start mb-6">
              <span className="font-script text-5xl text-brand-beige">Kmstyles</span>
              <span className="text-xs uppercase tracking-[0.3em] font-sans text-brand-beige/70 mt-2">Fixing bad hair days</span>
            </Link>
            <p className="text-brand-beige/70 max-w-md font-light leading-relaxed">
              A hair stylist who loves helping people feel confident and beautiful. Whether you are after something simple and natural or bold and creative, I'll work with you to create a look that feels just right.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-brand-beige/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-brand-beige/70 font-light">
              <li>
                <a href="tel:+447746709233" className="flex items-center hover:text-brand-gold transition-colors">
                  <Phone size={16} className="mr-3" />
                  +44 7746 709233
                </a>
              </li>
              <li>
                <a href="mailto:Kmstyles24@gmail.com" className="flex items-center hover:text-brand-gold transition-colors">
                  <Mail size={16} className="mr-3" />
                  Kmstyles24@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kmstyles_xo/" target="_blank" rel="noreferrer" className="flex items-center hover:text-brand-gold transition-colors">
                  <Instagram size={16} className="mr-3" />
                  @kmstyles_xo
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-beige/20 flex flex-col md:flex-row justify-between items-center text-xs text-brand-beige/50 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Kmstyles. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-brand-beige transition-colors">Terms & Conditions</Link>
            <Link to="/aftercare" className="hover:text-brand-beige transition-colors">Aftercare</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={cn("flex-grow", !isHome && "pt-24 md:pt-32")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageTransition({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
