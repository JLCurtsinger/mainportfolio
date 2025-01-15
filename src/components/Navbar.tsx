import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="text-xl font-semibold text-accent hover:text-accent/80 
            transition-all duration-300 ease-out
            relative after:content-[''] after:absolute after:w-full after:scale-x-0 
            after:h-0.5 after:bottom-0 after:left-0 after:bg-accent/60 
            after:origin-bottom-right after:transition-transform after:duration-300 
            hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Justin Curtsinger
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["hero", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-accent/80 hover:text-accent 
                transition-all duration-300 ease-out
                relative after:content-[''] after:absolute after:w-full after:scale-x-0 
                after:h-0.5 after:bottom-0 after:left-0 after:bg-accent/60 
                after:origin-bottom-right after:transition-transform after:duration-300 
                hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent hover:text-accent/80 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {["hero", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 text-accent/80 
                  hover:text-accent hover:bg-accent/5 rounded-md 
                  transition-all duration-300 ease-out"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;