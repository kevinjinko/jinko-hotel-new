import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

interface HeroProps {
  onRequestDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestDemo
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  
  const platforms = ['@ChatGPT', '@Perplexity', '@Gemini'];

  useEffect(() => {
    const currentPlatform = platforms[currentIndex];
    const typingSpeed = isDeleting ? 100 : 150;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNext = 500;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentPlatform) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && displayedText === '') {
        // Move to next platform
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % platforms.length);
      } else if (isDeleting) {
        // Delete character
        setDisplayedText(currentPlatform.substring(0, displayedText.length - 1));
      } else {
        // Type character
        setDisplayedText(currentPlatform.substring(0, displayedText.length + 1));
      }
    }, isDeleting && displayedText === '' ? pauseBeforeNext : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, currentIndex, isDeleting, platforms]);

  const handleDemoRequest = () => {
    navigate('/demo');
    if (onRequestDemo) {
      onRequestDemo();
    }
  };

  return (
    <section className="relative z-10 py-[120px] px-8 max-w-7xl mx-auto font-inter">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#FDF6E3] leading-tight">
          <span className="text-[#FDF6E3]">Get ready</span>
          <br />
          <span className="text-[#FDF6E3]">to sell on </span>
          <span className="text-[#FDF6E3] relative">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#FDF6E3] leading-relaxed">
          Make bookings on AI channels and increase your hotel direct share
        </p>
        
        <button 
          onClick={handleDemoRequest} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          className={`bg-[#FDF6E3] text-black px-5 py-2.5 rounded-lg text-base font-medium transition-transform duration-200 ${isHovered ? 'scale-105' : ''}`}
        >
          Request Demo
        </button>
        
        <div className="pt-8">
          <Separator className="bg-[#FDF6E3] opacity-30" />
        </div>
      </div>
    </section>
  );
};
