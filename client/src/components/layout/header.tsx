import { useState, useEffect } from "react";
import { cn, scrollToSection } from "@/lib/utils";
import { Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [showContactBar, setShowContactBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;
      
      // Hide contact bar on scroll down, show on scroll up
      if (scrollPosition > lastScrollY && scrollPosition > 150) {
        setShowContactBar(false);
      } else if (scrollPosition < lastScrollY) {
        setShowContactBar(true);
      }
      setLastScrollY(scrollPosition);

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      {/* IIIT Sonepat Contact Info Bar */}
      <div 
        className={cn(
          "bg-neutral-800 text-white py-1 transition-all duration-300 overflow-hidden",
          showContactBar ? "max-h-20" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
            <div className="flex items-center mb-1 md:mb-0">
              <Phone className="h-3 w-3 mr-1" />
              <span>Phone: 01302-987910, 7496966902, 9729077477</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              <span>IIT Delhi Techno Park, Rajiv Gandhi Education City, Rai, Sonepat</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-3 md:mb-0">
          <h1 className="font-serif text-2xl font-bold text-primary">
            Dr. Md Arquam
          </h1>
          <span className="ml-2 text-sm text-neutral-500">Assistant Professor, CSE</span>
        </div>
        <nav id="main-nav" className="flex flex-wrap justify-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={cn(
                "px-4 py-2 text-neutral-800 hover:text-primary transition-colors",
                activeSection === item.id && "border-b-2 border-primary font-medium"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
