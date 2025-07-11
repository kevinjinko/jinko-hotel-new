import React, { useState } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { MetricsSection } from './MetricsSection';
import { ProductSection } from './ProductSection';
import { BookingSection } from './BookingSection';
import { DemoSection } from './DemoSection';
import { TeamSection } from './TeamSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';

export const Landing: React.FC = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleDemoRequest = () => {
    setShowDemoForm(true);
    console.log('Demo requested');
  };

  const handleContactSales = () => {
    console.log('Contact sales clicked');
  };

  const product1Features = [
    {
      title: "Measure Visibility",
      description: "Monitor your visibility at both the hotel and brand level across key customer segments"
    },
    {
      title: "Understand Intents", 
      description: "Gain insights into the type of search intents driving your hotel's visibility"
    },
    {
      title: "Track Competition",
      description: "Identify which hotels are being quoted when yours is not included in the response"
    }
  ];

  const product2Features = [
    {
      title: "Track AI Bots",
      description: "Understand which pages are the most visited by AI bots"
    },
    {
      title: "Create Subdomain",
      description: "Use subdomain to expose content in AI-friendly way so AI can better understand it"
    },
    {
      title: "Dynamic Content", 
      description: "Include price and availability in your content so AI have more information accessible"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#FDF6E3] font-inter">
      <Header onDemoClick={handleDemoRequest} />
      
      <main className="flex flex-col pt-20">
        <Hero onRequestDemo={handleDemoRequest} />

        <MetricsSection />

        <ProductSection
          id="products"
          title="Measure your Hotel visibility on AI"
          subtitle="Discover how many times your hotel gets mentioned in AI search results"
          imageSrc="/lovable-uploads/3080db7f-23fb-44bc-b1f8-5d2ffcc4e570.png"
          features={product1Features}
          hasGradientBackground={true}
          isFirst={true}
        />

        <ProductSection
          title="Take actions to optimize your visibility"
          subtitle="Expose your content in AI Friendly way to gain traffic"
          imageSrc="/lovable-uploads/5bb1ae34-8660-4c31-b41d-1dcc1a21a6df.png"
          features={product2Features}
        />

        <BookingSection />

        <DemoSection onContactSales={handleContactSales} />

        <TeamSection />

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
