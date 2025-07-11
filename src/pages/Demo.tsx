
import React from 'react';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { DemoForm } from '@/components/demo/DemoForm';

const Demo = () => {
  return (
    <div className="min-h-screen bg-black text-[#FDF6E3] font-inter">
      <Header />
      
      <main className="pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-medium text-[#FDF6E3] leading-tight">
                Get ready to sell on AI channels
              </h1>
              <p className="text-lg md:text-xl font-light text-[#FDF6E3] leading-relaxed">
                Make bookings on AI channels and increase your hotel direct share. 
                Our team will reach out to schedule a personalized demo.
              </p>
              <ul className="space-y-3 text-[#FDF6E3]">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FDF6E3] rounded-full mr-3"></span>
                  Measure your hotel visibility on AI platforms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FDF6E3] rounded-full mr-3"></span>
                  Optimize your content for AI-friendly exposure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FDF6E3] rounded-full mr-3"></span>
                  Increase direct bookings from AI channels
                </li>
              </ul>
            </div>

            {/* Right Column - Form */}
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <DemoForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
