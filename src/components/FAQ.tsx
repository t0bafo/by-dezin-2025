

import React from 'react';
import { HeadingL, BodyM, BodyS } from '@/components/Typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "What is ByDezin?",
      answer: "Born from a deep love for individuality and community, The Bydezin Experience is more than a platform. It's a launchpad. We are committed to elevating emerging brands by offering visibility and connection within a growing ecosystem of innovators. We are where creative freedom and commercial success go hand in hand. Our mission is to support the next generation of fashion leaders by creating opportunities for growth without compromising identity or integrity."
    },
    {
      question: "Who can participate in ByDezin NYFW 2025?",
      answer: "We welcome emerging designers and brands with a unique story and a cohesive collection ready to show. If you're bringing fresh energy to fashion, you're in the right place."
    },
    {
      question: "What's the process to be considered?",
      answer: "Start by filling out a short form with your brand details. From there, we'll follow up to learn more, reviewing your portfolio or collection overview. Our curation team selects based on originality, storytelling, a strong point of view, and alignment with ByDezin's 2025 vision."
    },
    {
      question: "What's the latest I can express interest?",
      answer: (
        <>
          We review entries as they come in, so early is always better. Final reviews will wrap by <strong>August 10, 2025</strong>.
        </>
      )
    },
    {
      question: "What's included if I'm selected?",
      answer: "Selected brands receive showcase space, styling support, media coverage, and access to our network of buyers, stylists, editors, and creative collaborators."
    },
    {
      question: "Are there participation costs?",
      answer: "Our sponsor-backed model covers core participation for selected brands. Some premium services or expanded offerings may carry additional costs, we'll walk you through any details if needed."
    },
    {
      question: "Do I need to be in New York to participate?",
      answer: "Not necessarily. We welcome international brands and offer flexible options, including remote showcasing, where we present your collection on your behalf."
    }
  ];

  return (
    <section id="faq" className="bg-bone py-16 mobile:py-20 tablet:py-24 desktop:py-28">
      <div className="max-w-4xl mx-auto px-4 mobile:px-6">
        <div className="text-center mb-12">
          <HeadingL className="text-black mb-6">
            Frequently Asked Questions
          </HeadingL>
          
          <div className="max-w-[600px] mx-auto mb-6">
            <BodyM className="text-black leading-relaxed">
              Everything you need to know about showcasing at ByDezin NYFW S/S 2026
            </BodyM>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-black border-opacity-10 rounded-lg bg-cream bg-opacity-50 px-6 py-2 hover:bg-opacity-70 transition-all duration-200"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <BodyM className="text-black font-medium pr-4">
                  {item.question}
                </BodyM>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <BodyS className="text-black leading-relaxed opacity-80">
                  {item.answer}
                </BodyS>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
