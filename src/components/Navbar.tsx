
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          
          if (sectionId === 'contact') {
            setTimeout(() => {
              const dialogTrigger = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
              if (dialogTrigger && !document.querySelector('[role="dialog"]')) {
                dialogTrigger.click();
              }
            }, 500);
          }
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        
        if (sectionId === 'contact') {
          const dialogTrigger = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
          if (dialogTrigger && !document.querySelector('[role="dialog"]')) {
            dialogTrigger.click();
          }
        }
      }
    }
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
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
            className="text-lg md:text-xl font-semibold text-accent hover:text-accent/80 
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
            <button
              onClick={() => scrollToSection("projects")}
              className="text-base md:text-lg text-accent/80 hover:text-accent 
              transition-all duration-300 ease-out
              relative after:content-[''] after:absolute after:w-full after:scale-x-0 
              after:h-0.5 after:bottom-0 after:left-0 after:bg-accent/60 
              after:origin-bottom-right after:transition-transform after:duration-300 
              hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("/work-with-me")}
              className="text-base md:text-lg text-accent/80 hover:text-accent 
              transition-all duration-300 ease-out
              relative after:content-[''] after:absolute after:w-full after:scale-x-0 
              after:h-0.5 after:bottom-0 after:left-0 after:bg-accent/60 
              after:origin-bottom-right after:transition-transform after:duration-300 
              hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Work With Me
            </button>
            <button
              onClick={() => handleNavigation("/personal-projects")}
              className="text-base md:text-lg text-accent/80 hover:text-accent 
              transition-all duration-300 ease-out
              relative after:content-[''] after:absolute after:w-full after:scale-x-0 
              after:h-0.5 after:bottom-0 after:left-0 after:bg-accent/60 
              after:origin-bottom-right after:transition-transform after:duration-300 
              hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Personal Projects
            </button>
            <button
              onClick={() => scrollToSection("my-why")}
              className="text-base md:text-lg text-accent/80 hover:text-accent 
              transition-all duration-300 ease-out
              relative after:content-[''] after:absolute after:w-full after:scale-x-0 
              after:h-0.5 after:bottom-0 after:left-0 after:bg-accent/60 
              after:origin-bottom-right after:transition-transform after:duration-300 
              hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              My Why
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base md:text-lg text-accent/80 hover:text-accent 
              transition-all duration-300 ease-out
              relative after:content-[''] after:absolute after:w-full after:scale-x-0 
              after:h-0.5 after:bottom-0 after:left-0 after:bg-accent/60 
              after:origin-bottom-right after:transition-transform after:duration-300 
              hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-accent hover:bg-transparent focus:bg-transparent active:bg-transparent p-0"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="hamburger-menu">
                <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mobile-nav ${isOpen ? 'open' : ''}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 text-accent/80 
              hover:text-accent hover:bg-accent/5 rounded-md 
              transition-all duration-300 ease-out"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("/work-with-me")}
              className="block w-full text-left px-3 py-2 text-accent/80 
              hover:text-accent hover:bg-accent/5 rounded-md 
              transition-all duration-300 ease-out"
            >
              Work With Me
            </button>
            <button
              onClick={() => handleNavigation("/personal-projects")}
              className="block w-full text-left px-3 py-2 text-accent/80 
              hover:text-accent hover:bg-accent/5 rounded-md 
              transition-all duration-300 ease-out"
            >
              Personal Projects
            </button>
            <button
              onClick={() => scrollToSection("my-why")}
              className="block w-full text-left px-3 py-2 text-accent/80 
              hover:text-accent hover:bg-accent/5 rounded-md 
              transition-all duration-300 ease-out"
            >
              My Why
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-accent/80 
              hover:text-accent hover:bg-accent/5 rounded-md 
              transition-all duration-300 ease-out"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .hamburger-menu {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        
        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: #1A1F2C;
          border-radius: 10px;
          transition: all 0.3s ease-in-out;
          position: absolute;
        }
        
        .hamburger-line:nth-child(1) {
          top: 6px;
        }
        
        .hamburger-line:nth-child(2) {
          top: 11px;
          transform-origin: center;
        }
        
        .hamburger-line:nth-child(3) {
          top: 16px;
        }
        
        .hamburger-line.open:nth-child(1) {
          transform: translateY(5px) rotate(45deg);
          background-color: #1A1F2C;
        }
        
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
          transform: scale(0.2);
        }
        
        .hamburger-line.open:nth-child(3) {
          transform: translateY(-5px) rotate(-45deg);
          background-color: #1A1F2C;
        }

        /* Mobile navigation fade animation */
        .mobile-nav {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 250ms ease-out;
          visibility: hidden;
        }
        
        .mobile-nav.open {
          max-height: 400px; /* Adjusted for additional menu item */
          opacity: 1;
          visibility: visible;
        }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
