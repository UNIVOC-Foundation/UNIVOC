import React from "react";
import Courses from "./Courses";
import adani from "../../assets/adani.png";
import epin from "../../assets/e-pin.png";
import nilm from "../../assets/nilm.png";
import padget from "../../assets/padget.png";
import ak from "../../assets/ak.png";
import turners from "../../assets/turners.png";
import Dixon from "../../assets/Dixon.png";
import subros from "../../assets/subros.png";
import nsdc from "../../assets/nsdc.png";
import isid from "../../assets/isid.png";
import global from "../../assets/global.png";
import capro from "../../assets/capro.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#C6D5F6] via-[#EAF0FF] to-[#DEE8FF] min-h-screen py-10 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Upgrade your skills with our unique, expertly designed courses.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Explore a transformative approach to skill development on our online
              learning platform. Uncover a new realm of learning experiences and
              elevate your expertise in unique ways.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#1883D3] via-[#3F94E6] to-[#88ADFC] rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105">
                Enroll Now
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-blue-700 font-bold text-lg hover:underline cursor-pointer">
                  What's Univoc?
                </span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Students learning"
              className="relative z-10 rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>

        {/* Info Boxes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Online Courses Box */}
          <div className="bg-white rounded-xl p-6 flex items-center space-x-4 shadow-lg transform transition-all hover:scale-105">
            <div className="flex-shrink-0">
              <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="text-gray-600 text-lg">Online Courses</p>
            </div>
          </div>

          {/* Online Students Box */}
          <div className="bg-white rounded-xl p-6 flex items-center space-x-4 shadow-lg transform transition-all hover:scale-105">
            <div className="flex-shrink-0">
              <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">10k+</p>
              <p className="text-gray-600 text-lg">Online Students</p>
            </div>
          </div>

          {/* Advance Classes Box */}
          <div className="bg-white rounded-xl p-6 flex items-center space-x-4 shadow-lg transform transition-all hover:scale-105">
            <div className="flex-shrink-0">
              <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold text-blue-600">Advance Classes</p>
              <p className="text-gray-600">Started Early</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20 bg-gradient-to-r from-[#1399FD] via-[#71B2FC] to-[#2C60D0] py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 items-center justify-items-center">
            <img src={adani || "/placeholder.svg"} alt="Adani Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={epin || "/placeholder.svg"} alt="E-pin Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={Dixon || "/placeholder.svg"} alt="Dixon Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={subros || "/placeholder.svg"} alt="Subros Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={nsdc || "/placeholder.svg"} alt="NSDC Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={global || "/placeholder.svg"} alt="Global Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={isid || "/placeholder.svg"} alt="ISID Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={capro || "/placeholder.svg"} alt="Capro Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={turners || "/placeholder.svg"} alt="Turners Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={nilm || "/placeholder.svg"} alt="NILM Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={ak || "/placeholder.svg"} alt="AK Logo" className="h-16 w-16 rounded-full bg-white p-2" />
            <img src={padget || "/placeholder.svg"} alt="Padget Logo" className="h-16 w-16 rounded-full bg-white p-2" />
          </div>
        </div>
      </div>

      <Courses />
    </section>
  );
};

export default HeroSection;

