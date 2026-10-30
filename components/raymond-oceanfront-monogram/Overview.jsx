'use client'
import React from 'react'
import Image from 'next/image'
import { overviewImage } from '../../lib/raymond-oceanfront-monogram/images'

const Overview = ({ setIsOpen }) => {
  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[390px] md:h-[430px] lg:h-[440px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="Raymond Invictus By GS Overview" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                LUXURY LIVING
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Project Overview
              </h2>

              <div className="mb-6">
                <p className="text-[#4A5568] text-[15px] leading-[1.8] text-left m-0">
                  Most new homes around BKC look onto other towers. These look onto the bay. Raymond&apos;s Oceanfront Monogram Residences sit on S.L. Raheja Hospital Marg, a quiet, leafy stretch of Mahim facing the Cadell Road waterfront. It is a neighbourhood of tree-lined avenues, Parsi and Anglo-Indian enclaves, Mahim Fort and St. Michael&apos;s Church, with the greens of Shivaji Park close by. For families with roots in Dadar and Shivaji Park, it is a way to move up without moving away. Speak to our advisory team for the view map, floor plans and floor-wise pricing.
                </p>
              </div>

              {/* ── Project Stats Grid ── */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE6DF]">
                <div>
                  <div className="text-[20px] sm:text-[24px] font-black text-[#111111] tracking-tight">Seafront</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">MAHIM–BANDRA BAY</div>
                </div>
                <div className="border-l border-[#EAE6DF] pl-4">
                  <div className="text-[20px] sm:text-[24px] font-black text-[#111111] tracking-tight">3 &amp; 4 BHK</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">CONFIGURATIONS</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
