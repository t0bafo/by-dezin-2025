
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
      answer: "[Placeholder - Arnell to provide answer about ByDezin's mission, vision, and what makes it unique]"
    },
    {
      question: "Who can apply to ByDezin NYFW S/S 2026?",
      answer: "We welcome emerging fashion brands, independent designers, and creative entrepreneurs ready to showcase their unique aesthetic. Whether you're launching your first collection or seeking to elevate your brand presence, ByDezin is for those who value authentic storytelling, innovative design, and meaningful connections within the fashion community."
    },
    {
      question: "How does the application process work?",
      answer: "Simply complete our application form with your brand story, collection details, and portfolio samples. Our curation team reviews submissions based on creativity, brand vision, and alignment with our community values. We'll reach out within 2-3 weeks of submission with next steps."
    },
    {
      question: "What's the deadline?",
      answer: "Applications are accepted on a rolling basis, with priority given to early submissions. To ensure full consideration for NYFW S/S 2026, we recommend applying by [specific date to be confirmed]. Don't wait—spaces are limited and fill quickly."
    },
    {
      question: "What's included if I'm selected?",
      answer: "Selected brands receive showcase space in our curated showroom, professional styling support, media coverage and PR opportunities, networking access to buyers and industry professionals, content creation for social amplification, and mentorship from our community of fashion veterans."
    },
    {
      question: "Are there participation costs?",
      answer: "ByDezin operates on a sponsored model to support emerging talent. While core participation is covered, some premium add-on services may have associated costs. All fees are transparently communicated upon selection, with flexible payment options available."
    },
    {
      question: "Do I need to be in New York to participate?",
      answer: "Physical presence isn't required! We offer flexible participation options including product showcasing where you can send pieces for display while we handle the presentation. However, being present allows for direct networking and media opportunities that can significantly amplify your brand's impact."
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
