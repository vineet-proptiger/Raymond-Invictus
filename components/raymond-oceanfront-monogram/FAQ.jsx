'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Raymond Invictus By GS?',
    answer: (
      <>
        Raymond Invictus By GS offers exclusive and spacious <strong className="font-semibold text-[#111111]">3 &amp; 4 BHK luxury residences</strong> designed with modern architecture, expansive bay-facing decks, and top-notch amenities that offer modern, serene waterfront living.
      </>
    ),
  },
  {
    question: 'What is the starting price of Raymond Invictus By GS?',
    answer: (
      <>
        The starting price is <strong className="font-semibold text-[#111111]">₹ 7.8 Cr* Onwards</strong>. Exclusive pre-launch benefits of up to ₹36 Lakh and 100% refundable EOI options are available upon enquiry for priority registrations.
      </>
    ),
  },
  {
    question: 'Who is the developer of Raymond Invictus By GS?',
    answer:
      'Raymond Invictus By GS is developed by Raymond Realty, celebrated for its 100-year legacy of excellence, superior craftsmanship, and delivering towers years ahead of RERA deadlines.',
  },
  {
    question: 'Where exactly is Raymond Invictus By GS located?',
    answer: (
      <>
        The project is situated on <strong className="font-semibold text-[#111111]">S.L. Raheja Hospital Marg, facing the Cadell Road waterfront on Mahim–Bandra Bay, Mumbai</strong>, offering swift access to Bandra, Shivaji Park, Dadar, and just 10 mins from BKC.
      </>
    ),
  },
  {
    question: 'What amenities are provided at Raymond Invictus By GS?',
    answer:
      'The project offers world-class lifestyle amenities including an expansive swimming pool, modern gymnasium, sky lounge, landscaped gardens, kids play area, indoor recreation zones, and multi-tier 24/7 security.',
  },
  {
    question: 'What is the current status and RERA registration of the project?',
    answer:
      'The project is currently in the Pre-Launch phase. The RERA registration number is Coming Soon.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#F4EFE6] text-[#111111] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="py-4 px-5 sm:py-5 sm:px-7 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#495057] bg-white border-t border-[#f1f3f5]">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
