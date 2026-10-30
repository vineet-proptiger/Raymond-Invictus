'use client'
import React from 'react'
import Image from 'next/image'
import { highlightImages } from '../../lib/raymond-oceanfront-monogram/images'

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#F9F8F3' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[14px] tracking-[2.5px] uppercase mb-2 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            What Makes Raymond Invictus By GS Stand Apart
          </h2>
        </div>

        {/* 4 Cards: 4 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {highlightImages.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 80).toString()}
              className="bg-white rounded-[20px] overflow-hidden border border-[#EAE6DF] shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={item.img}
                    alt={item.text}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[#111111] text-[13.5px] sm:text-[14.5px] font-semibold leading-snug m-0">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
