import React from 'react';

interface Feature {
  title: string;
  description: string;
  isHighlighted?: boolean;
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  features: Feature[];
  className?: string;
  hasGradientBackground?: boolean;
  isFirst?: boolean;
  id?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  features,
  className = "",
  hasGradientBackground = false,
  isFirst = false,
  id
}) => {
  const paddingClass = isFirst ? "py-16" : "py-12";
  
  return (
    <section id={id} className={`${paddingClass} px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-[#FDF6E3] mb-6 lg:text-5xl">
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#FDF6E3] lg:text-2xl">
            {subtitle}
          </p>
        </div>
        
        <div className={`mb-16 ${hasGradientBackground ? 'relative' : ''}`}>
          {hasGradientBackground && <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: 'url(/lovable-uploads/f26035e7-19b5-4c8c-92e3-4131fbe4c016.png)',
          top: '-120px',
          bottom: '-120px',
          left: '0',
          right: '0'
        }} />}
          <img src={imageSrc} alt={`${title} illustration`} className="w-full rounded-2xl relative z-10" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="p-8 rounded-2xl">
              <h3 className="text-2xl font-medium text-[#FDF6E3] mb-4 md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-lg font-light text-[#FDF6E3] leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>
  );
};
