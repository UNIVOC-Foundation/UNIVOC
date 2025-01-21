import React from "react";
import { motion } from "framer-motion";
import image4 from "../../assets/girlimg.png";
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
import image11 from "../../assets/image 11.png";
import man from "../../assets/man.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#C6D5F6] via-[#EAF0FF] to-[#DEE8FF] min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6"
            >
              Upgrade your skills with our unique, expertly designed courses.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8"
            >
              Explore a transformative approach to skill development on our
              online learning platform. Uncover a new realm of learning
              experiences and elevate your expertise in unique ways.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#1883D3] via-[#3F94E6] to-[#88ADFC] rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300">
                Enroll Now
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="19.5"
                      stroke="#1883D3"
                      strokeDasharray="6 5"
                    />
                    <circle
                      cx="19.5"
                      cy="19.5"
                      r="16.5"
                      fill="url(#paint0_linear_4_24)"
                    />
                    <path
                      d="M31.3769 19.5002L13.7782 29.8442L13.6194 9.43134L31.3769 19.5002Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4_24"
                        x1="8"
                        y1="10"
                        x2="26.5"
                        y2="33"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#6DC0FF" />
                        <stop offset="0.257545" stopColor="#055693" />
                        <stop offset="0.720001" stopColor="#4AA2E3" />
                        <stop offset="1" stopColor="#002F52" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-blue-700 font-bold text-lg underline cursor-pointer">
                  What's Univoc?
                </span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px]">
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-[250px] sm:w-[400px] h-[250px] sm:h-[400px]"
                viewBox="0 0 460 460"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="230"
                  cy="230"
                  r="228.5"
                  stroke="#0A71BE"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="18 20"
                />
                <circle
                  cx="230"
                  cy="230"
                  r="210"
                  fill="url(#paint0_linear_2_96)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_96"
                    x1="61.709"
                    y1="117.483"
                    x2="389.561"
                    y2="373.072"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#88ADFC" />
                    <stop offset="1" stopColor="#255DD4" />
                  </linearGradient>
                </defs>
              </svg>
            </div> */}
            <img
              src={image4}
              alt="Learning Illustration"
              className="absolute inset-0 w-[200px] sm:w-[300px] h-auto mx-auto"
            />
            {/* <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white rounded-xl p-3 shadow-lg">
              <p className="text-blue-600 text-lg font-bold">50+</p>
              <p className="text-gray-700 text-sm">Online Courses</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gradient-to-r from-[#1399FD] via-[#71B2FC] to-[#2C60D0] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              adani,
              epin,
              Dixon,
              subros,
              nsdc,
              global,
              isid,
              capro,
              turners,
              nilm,
              ak,
              padget,
            ].map((logo, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow-md flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-12 sm:w-16 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
