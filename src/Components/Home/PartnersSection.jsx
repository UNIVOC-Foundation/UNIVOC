// components/PartnersSection.jsx
import React from "react";

export default function PartnersSection({ logos, logosContainerRef }) {
  return (
    <section id="partners-services" className="bg-blue-700">
      <div className="max-w-full mx-auto relative w-full min-h-[600px] lg:min-h-screen overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-blue-200 bg-opacity-30 z-0"></div>

        <div className="relative z-10 pt- pb-6 px-4">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-blue-600 text-center mb-17 mt-16">
            Trusted Partners
          </h2>

          <div
            ref={logosContainerRef}
            className="flex items-center w-full mt-4 md:mt-10 lg:mt-15 py-7 cursor-pointer overflow-x-hidden"
          >
            <div className="flex w-[200%] space-x-8 md:space-x-12 lg:space-x-16">
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo || "/placeholder.svg"}
                  alt={`Partner Logo ${(index % logos.length) + 1}`}
                  className={`w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 
                  rounded-full border-2 border-sky-600 
                  hover:bg-white hover:shadow-lg
                  transition-all duration-300 transform hover:scale-105
                  object-contain bg-white/80 backdrop-blur-sm
                  ${index === 4 ? "special-class-for-5th-logo" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center py-2 md:py-1">
            <h1 className="text-3xl font-bold text-blue-600">Technology</h1>
            <div className="flex justify-center space-x-8 mt-8">
              <div className="flex flex-col items-center">
                <img
                  alt="Job Seva logo"
                  className="rounded-full object-cover"
                  src="/src/images/jobseva.png"
                />
                <p className="mt-2">JOB SEVA</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  alt="IT Seva logo"
                  className="rounded-full object-cover"
                  src="/src/images/itseva.png"
                />
                <p className="mt-2">IT SEVA</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  alt="Berozgar Seva logo"
                  className="rounded-full"
                  src="/src/images/berozgar.png"
                />
                <p className="mt-2">Berozgar Seva</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  alt="Next Gen LMS logo"
                  className="rounded-full"
                  src="/src/images/lms.png"
                />
                <p className="mt-2">Next Gen LMS</p>
              </div>
            </div>
          </div>
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold text-blue-600">JOB SEVA</h2>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
              Job Seva Is A Dedicated Platform Tailored For The Blue And Grey
              Collar Workforce. It Connects Candidates With Local Job
              Opportunities While Offering Upskilling Support To Enhance Their
              Career Prospects. By Focusing On Skill Development And Bridging
              The Employment Gap, Job Seva Empowers The Next Billion Individuals
              To Transform Their Careers, Achieve Financial Independence, And
              Improve Their Quality Of Life Through Meaningful And Sustainable
              Job Opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
