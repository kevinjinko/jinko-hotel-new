
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onDemoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onDemoClick
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleNavClick = (item: string) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
    
    if (item === 'Demo') {
      navigate('/demo');
      if (onDemoClick) {
        onDemoClick();
      }
    } else if (item === 'Product') {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'Team') {
      const element = document.getElementById('team');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute z-20 top-0 left-0 right-0 py-6 font-inter">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            alt="JINKO Logo" 
            className={`${isMobile ? 'h-8' : 'h-12'} w-auto cursor-pointer`}
            src="/lovable-uploads/9acacd8a-e63a-40c7-a183-360dc270fdb5.png"
            onClick={() => navigate('/')}
            width={isMobile ? "32" : "48"}
            height={isMobile ? "32" : "48"}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('Product')} 
              className="text-[#FDF6E3] text-lg hover:opacity-80 transition-opacity"
            >
              Product
            </button>
            
            <button 
              onClick={() => handleNavClick('Team')} 
              className="text-[#FDF6E3] text-lg hover:opacity-80 transition-opacity"
            >
              Team
            </button>
            
            <button 
              onClick={() => handleNavClick('Demo')} 
              className="bg-[#FDF6E3] text-black px-6 py-2 rounded-lg text-lg font-medium hover:scale-105 transition-transform"
            >
              Demo
            </button>
          </nav>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <>
            <button
              onClick={toggleMobileMenu}
              className="text-[#FDF6E3] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 bg-black/95 z-30 flex flex-col items-center justify-center">
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-6 right-8 text-[#FDF6E3] p-2"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
                
                <nav className="flex flex-col items-center gap-8">
                  <button 
                    onClick={() => handleNavClick('Product')} 
                    className="text-[#FDF6E3] text-xl hover:opacity-80 transition-opacity"
                  >
                    Product
                  </button>
                  
                  <button 
                    onClick={() => handleNavClick('Team')} 
                    className="text-[#FDF6E3] text-xl hover:opacity-80 transition-opacity"
                  >
                    Team
                  </button>
                  
                  <button 
                    onClick={() => handleNavClick('Demo')} 
                    className="bg-[#FDF6E3] text-black px-8 py-3 rounded-lg text-xl font-medium hover:scale-105 transition-transform"
                  >
                    Demo
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};
