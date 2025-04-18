import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "Teaching", href: "#teaching" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      
      const sections = document.querySelectorAll(".section-container");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;
        const sectionId = section.id;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="font-serif font-bold text-primary text-xl md:text-2xl">Dr. Md Arquam</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-neutral-medium hover:text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`nav-link text-neutral-medium hover:text-primary px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.substring(1) ? "border-b-2 border-accent" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="ml-2 bg-primary hover:bg-primary-dark">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              CV
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-2 border-t border-neutral`}>
          <div className="flex flex-col space-y-3 pt-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className={`nav-link text-neutral-medium hover:text-primary px-1 py-1 text-base font-medium transition-colors duration-200 ${
                  activeSection === link.href.substring(1) ? "border-b-2 border-accent" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-max bg-primary hover:bg-primary-dark">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
