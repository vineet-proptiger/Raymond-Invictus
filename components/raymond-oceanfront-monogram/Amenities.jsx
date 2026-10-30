'use client'
import React from 'react'

const amenities = [
  {
    title: 'Clubhouse',
    subtitle: 'Exclusive grand clubhouse for social, leisure and community gatherings',
    icon: 'fa-solid fa-house-chimney',
  },
  {
    title: 'Gym',
    subtitle: 'Fully-equipped modern fitness center with advanced cardio & strength equipment',
    icon: 'fa-solid fa-dumbbell',
  },
  {
    title: 'Swimming Pool',
    subtitle: 'Resort-style luxury pool with expansive waterfront lounging deck',
    icon: 'fa-solid fa-person-swimming',
  },
  {
    title: 'Co-working pods',
    subtitle: 'Quiet, ergonomic workstations and private pods for productive remote working',
    icon: 'fa-solid fa-laptop',
  },
  {
    title: 'Yoga Room',
    subtitle: 'Peaceful, dedicated wellness zone designed for yoga, stretching and meditation',
    icon: 'fa-solid fa-spa',
  },
  {
    title: 'Badminton Court',
    subtitle: 'Indoor sports arena for competitive games and active fitness',
    icon: 'fa-solid fa-table-tennis-paddle-ball',
  },
]

const Amenities = () => {
  return (
    <section id="amenities" className="w-full py-12 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Lifestyle That Complements Your Vision of Luxury
          </h2>
        </div>

        {/* 6 Clean Cards Grid: 3 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {amenities.map((item, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={((index % 3) * 80).toString()}
                className="group relative bg-white rounded-[22px] p-7 border border-[#ececec] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#8B6A34]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
              >
                {/* Center Content */}
                <div className="flex flex-col items-center w-full">
                  {/* Round Icon Badge */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-[22px] mb-5 transition-all duration-300 group-hover:scale-108 bg-[#F4EFE6] text-[#8B6A34] group-hover:bg-[#111111] group-hover:text-white shadow-sm font-bold">
                    <i className={item.icon}></i>
                  </div>

                  {/* Amenity Title */}
                  <h3 className="font-bold text-[17px] sm:text-[18px] mb-2 leading-snug transition-colors duration-200 text-[#111111] group-hover:text-[#8B6A34]">
                    {item.title}
                  </h3>

                  {/* Amenity Subtitle */}
                  <p className="text-[#6c757d] text-[13px] sm:text-[13.5px] leading-relaxed m-0 font-medium max-w-[260px]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Amenities
