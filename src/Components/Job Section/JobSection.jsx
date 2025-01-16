import React from "react";
import { MapPin, Briefcase, Star, Upload, LineChart, BarChart2, User } from 'lucide-react';
import JobCategories from "./JobCategories";
import EmployerSection from "./EmployeeSection";

export default function JobSection() {

  const companies = [
    { name: "Dixon", logo: '/logos/logo1.png' },
    { name: "Capro", logo: "/logos/logo2.png?height=80&width=80 cover" },
    { name: "MIcro-Terner", logo: "/logos/logo3.png?height=80&width=80" },
    { name: "Neelam University", logo: "/logos/logo4.png?height=80&width=80" },
    { name: "Elin", logo: "/logos/logo5.png?height=80&width=80" },
    { name: "Adani", logo: "/logos/logo6.png?height=80&width=80" },
    { name: "ISTIL", logo: "/logos/logo7.png?height=80&width=80" },
    { name: "NSDC", logo: "/logos/logo8.png?height=80&width=80" },
    { name: "AK", logo: "/logos/logo9.png?height=80&width=80" },
    { name: "Subros", logo: "/logos/logo10.png?" },
    // { name: "Police", logo: "/logos/logo12.png?height=80&width=80" }
  ];

  return (
    <>
      {/* Main Job Section */}
      <div className="min-h-screen bg-[linear-gradient(148.05deg,#C6D5F6_0%,#EAF0FF_48.94%,#DEE8FF_97.87%)] px-4 py-12 font-sans">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16 my-8">
            <h1 className="text-[2.5rem] md:text-[2.75rem] font-bold mb-6 leading-tight text-[#333333]">
              UNIVOC: CONNECTING TALENT WITH OPPORTUNITIES—
              <div className="text-[#0088FF]">
                YOUR GO-TO PLATFORM FOR FINDING THE PERFECT JOB!
              </div>
            </h1>
            <p className="text-[#666666] text-xl mb-10">
              Discover your next career move with confidence and ease
            </p>

            {/* Reviews Section */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Profile 1"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Profile 2"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="Profile 3"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Profile 4"
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[#0088FF]" />
                ))}
                <Star className="w-5 h-5 fill-current text-[#0088FF] opacity-50" />
              </div>
              <span className="text-[#666666] text-sm">Over 1000+ reviews</span>
            </div>
          </div>

          {/* Search Section */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-20">
            <div className="flex-1 relative">
              <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0088FF] w-6 h-6" />
              <input
                type="text"
                placeholder="Select Job"
                className="w-full pl-12 h-14 bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] focus:outline-none focus:ring-2 focus:ring-[#0088FF] text-[#333333]"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0088FF] w-6 h-6" />
              <input
                type="text"
                placeholder="Select City"
                className="w-full pl-12 h-14 bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] focus:outline-none focus:ring-2 focus:ring-[#0088FF] text-[#333333]"
              />
            </div>
            <button className="h-14 px-12 bg-[#0088FF] hover:bg-[#0077ee] text-white text-lg font-semibold rounded-xl shadow-[0_4px_10px_rgba(0,136,255,0.3)] transition-all">
              Search
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {[
              { number: "1,000", label: "RECENT JOB" },
              { number: "1,100", label: "TOP COMPANIES" },
              { number: "1,456", label: "CANDIDATES" },
              { number: "1,986", label: "NEW JOB" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#333333] mb-2">
                  {stat.number}
                  <span className="text-[#0088FF]">+</span>
                </div>
                <div className="text-[#666666] uppercase text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <LineChart className="w-full h-32 text-[#0088FF]" />
              <div className="text-center mt-4">
                <span className="text-[#666666]">Growth Chart</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center flex-col h-32">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-8 h-8 text-[#0088FF]" />
                  <span className="text-lg font-semibold">Job Hunt</span>
                </div>
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-[#0088FF]" />
                  ))}
                  <Star className="w-5 h-5 fill-current text-[#0088FF] opacity-50" />
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center flex-col h-32">
                <div className="text-center mb-4">
                  <span className="text-lg font-semibold text-[#0088FF]">RESUME</span>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-[#0088FF] text-white rounded-lg">
                  <Upload className="w-5 h-5" />
                  Upload
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <BarChart2 className="w-full h-32 text-[#0088FF]" />
              <div className="text-center mt-4">
                <span className="text-[#0088FF] font-semibold">985+ Visits</span>
              </div>
            </div>
          </div>

          {/* Portal Section */}
          <div
            className="text-center mb-16 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/lets.png')",
            }}>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                India's Largest <span className="text-[#0088FF]">Job Portal</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Connecting Millions Of Job Seekers With Top Employers Every Day
              </p>
            </div>

            {/* Hire/Get Job Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {/* Hire Now Section */}
              {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src="/placeholder.svg?height=80&width=80"
                    alt={`Profile ${i + 1}`}
                    className="w-20 h-20 rounded-full"
                  />
                ))}
              </div>
              <button className="w-full py-3 bg-[#0088FF] text-white rounded-xl font-semibold hover:bg-[#0077ee] transition-colors">
                Hire Now
              </button>
            </div> */}

              {/* Hire Now Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  {["/images/image1.png", "/images/image2.png", "/images/image3.png", "/images/image4.png"].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Profile ${i + 1}`}
                      className="w-24 h-40 rounded-full"
                    />
                  ))}
                </div>
                <button className="w-full py-3 bg-[#0088FF] text-white rounded-xl font-semibold hover:bg-[#0077ee] transition-colors">
                  Hire Me
                </button>
              </div>

              {/* Get a Job Section */}
              {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src="/placeholder.svg?height=80&width=80"
                    alt={`Profile ${i + 1}`}
                    className="w-20 h-20 rounded-full"
                  />
                ))}
              </div>
              <button className="w-full py-3 bg-[#0088FF] text-white rounded-xl font-semibold hover:bg-[#0077ee] transition-colors">
                Get a Job
              </button>
            </div> */}

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-wrap gap-4 justify-center mb-6 ">
                  {["/images/image1.png", "/images/image2.png", "/images/image3.png", "/images/image4.png"].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Profile ${i + 1}`}
                      className="w-24 h-40 rounded-full"
                    />
                  ))}
                </div>
                <button className="w-full py-3 bg-[#0088FF] text-white rounded-xl font-semibold hover:bg-[#0077ee] transition-colors">
                  Get a Job
                </button>
              </div>


            </div>
          </div>

          {/* Let's Start Section */}
          <div className="text-center mb-16  ">
            <h2 className="text-3xl font-bold mb-4">
              Lets <span className="text-[#0088FF]">Start</span>
            </h2>
            <div className="w-24 h-1 bg-[#0088FF] mx-auto mb-12"></div>
          </div>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center gap-5 items-center mb-20">
            {companies.map((company, index) => (
              <div
                key={index}
                className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center p-1"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Categories Section */}
      <section className="py-16">
        <JobCategories />
      </section>

      {/* Employer Section */}
      <section className="py-16">
        <EmployerSection />
      </section>
    </>
  );
}