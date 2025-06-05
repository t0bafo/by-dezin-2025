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
      question: "What is the application process for ByDezin NYFW S/S 2026?",
      answer: "The application process involves submitting your brand information, portfolio, and specific collection details through our application form. Our curation team reviews submissions based on creativity, brand story, and alignment with our vision for emerging fashion talent."
    },
    {
      question: "When is the application deadline and event dates?",
      answer: "Applications are reviewed on a rolling basis with priority given to early submissions. The ByDezin showcase will take place during New York Fashion Week Spring/Summer 2026. Specific dates will be announced as we approach the event."
    },
    {
      question: "What are the requirements for participating brands?",
      answer: "We welcome emerging designers and brands with a unique aesthetic and story to tell. Participants should have a cohesive collection ready for presentation and align with our values of creativity, authenticity, and innovation in fashion."
    },
    {
      question: "What does participation include?",
      answer: "Selected brands receive showcase space, professional styling support, media coverage, networking opportunities with industry professionals, and access to our curated audience of buyers, press, and fashion influencers."
    },
    {
      question: "Are there any costs associated with participation?",
      answer: "ByDezin operates on a sponsored model to support emerging talent. While basic participation is supported, some premium services and extended showcase options may have associated costs. Details are provided upon selection."
    },
    {
      question: "How are brands selected for the showcase?",
      answer: "Our curation team evaluates submissions based on design quality, brand story, creative vision, and potential for growth. We seek diverse voices that represent the future of fashion and align with our mission to spotlight emerging talent."
    },
    {
      question: "Can international designers apply?",
      answer: "Yes, we welcome applications from designers worldwide. However, selected participants will need to arrange travel to New York for the showcase. We provide guidance on logistics and can connect you with other participating international designers."
    },
    {
      question: "What support is provided for first-time NYFW participants?",
      answer: "We offer comprehensive support including mentorship from industry professionals, guidance on NYFW protocols, media training, and networking facilitation. Our goal is to ensure every participant has a successful and impactful experience."
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

          {/* Notice */}
          <div className="max-w-[500px] mx-auto">
            <div className="bg-cream bg-opacity-30 border border-[#D4A5A5] border-opacity-40 rounded-lg px-4 py-3">
              <BodyS className="text-[#D4A5A5] italic text-center">
                Content to be updated - placeholder questions for marketing review
              </BodyS>
            </div>
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
