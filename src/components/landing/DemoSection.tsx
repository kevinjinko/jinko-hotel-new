import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface DemoSectionProps {
  onContactSales?: () => void;
}
export const DemoSection: React.FC<DemoSectionProps> = ({
  onContactSales
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/demo');
    if (onContactSales) {
      onContactSales();
    }
  };
  return <section className="py-20 px-8 font-inter">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-[#FDF6E3] mb-8 lg:text-5xl">Do not let OTA capture (again) your travelers. Book a demo now.</h2>
        
        <button onClick={handleContactClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`bg-[#FDF6E3] text-black px-8 py-4 rounded-2xl text-xl font-medium transition-transform duration-200 ${isHovered ? 'scale-105' : ''}`}>
          Contact our Sales team
        </button>
      </div>
    </section>;
};