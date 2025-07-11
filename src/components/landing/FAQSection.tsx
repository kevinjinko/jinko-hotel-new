
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How does AI hotel booking work?",
      answer: "AI agents like ChatGPT can navigate your website to find availability, pricing, and make bookings on behalf of customers. We help make your website AI-friendly so these agents can easily understand and interact with your content."
    },
    {
      question: "What AI platforms do you support?",
      answer: "We currently support ChatGPT, Perplexity, Gemini, and other major AI platforms. Our system is designed to work with any AI agent that can browse websites and process information."
    },
    {
      question: "How do I measure my hotel's visibility on AI?",
      answer: "Our platform tracks how often your hotel appears in AI search results, monitors which queries trigger recommendations for your property, and provides insights into your competition's performance."
    },
    {
      question: "Can AI agents actually make bookings?",
      answer: "Yes, AI agents can complete the entire booking process including checking availability, comparing prices, and processing payments when your website is properly configured for AI interaction."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most hotels see improved AI visibility within 2-4 weeks of implementing our recommendations. Booking volume typically increases gradually as AI platforms learn about your optimized content."
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-[#FDF6E3] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl font-light text-[#FDF6E3]">
            Everything you need to know about selling on AI channels
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-[#FDF6E3] rounded-lg bg-gray-900/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-[#FDF6E3] text-lg font-medium px-4 py-2 rounded-lg w-full text-left">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-[#FDF6E3] font-light leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
