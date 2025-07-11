import React, { useState } from 'react';
export const BookingSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleBookWithChatGPT = () => {
    console.log('Book with ChatGPT clicked');
  };
  return <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-[#FDF6E3] mb-6 lg:text-5xl">
            Make your hotel bookable on AI Channels
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#FDF6E3] lg:text-2xl">
            ChatGPT will book on your website. Make it AI friendly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 rounded-2xl" style={{
          backgroundImage: 'url(/lovable-uploads/7124ea0a-9d3f-4e52-86a6-91293ae19a9e.png)'
        }} />
          
          <div className="p-8 rounded-2xl bg-slate-950/80 backdrop-blur-sm relative z-10">
            <div className="mb-8">
              <img src="/lovable-uploads/d2f436f2-13f0-4538-8690-8e0caf31c603.png" alt="ChatGPT hotel booking interface" className="w-full rounded-xl" />
            </div>
            
          </div>
          
          <div className="space-y-6 relative z-10">
            <div className="p-6 rounded-2xl">
              <h3 className="text-2xl font-medium text-[#FDF6E3] mb-3">
                Build Website for AI
              </h3>
              <p className="text-lg font-light text-[#FDF6E3]">
                AI agents can navigate a dedicated website and get all informations they need
              </p>
            </div>
            
            <div className="p-6 rounded-2xl">
              <h3 className="text-2xl font-medium text-[#FDF6E3] mb-3">
                Expose pricing and availability
              </h3>
              <p className="text-lg font-light text-[#FDF6E3]">
                Give the AI agents the ability to get pricing and availability in real-time to answer customer request
              </p>
            </div>
            
            <div className="p-6 rounded-2xl">
              <h3 className="text-2xl font-medium text-[#FDF6E3] mb-3">
                Get bookings
              </h3>
              <p className="text-lg font-light text-[#FDF6E3]">
                Accept booking coming from AI agents and let them pay on behalf of their customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};