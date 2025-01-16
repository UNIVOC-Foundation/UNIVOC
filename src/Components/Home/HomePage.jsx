"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll"; // Import Element from react-scroll
import { useRef } from "react";
import Student from "../Hero/Student.png";
import Carrer from "../Hero/Carrer.png";
import Learn from "../Hero/Learn.png";
import Post from "../Hero/Post.png";
import Work from "../Hero/Work.png";
import Trainee from "../Hero/Trainee.png";
import Recognized from "../Hero/Recognized.png";
import Life from "../Hero/Life.png";
import Testimonial from "../Hero/Testimonial.png";
import "../Hero/Applynow.css"; // Ensure the correct path
import Tech from "../TECH/Tech"; // Ensure the correct path
import TrustedPartners from "../Home/TrustedPartners"; // Corrected path
import Contact from "../Contact"; // Ensure the correct path
import Chef from "../Hero/Chef.png";
import Doctor from "../Hero/Doctor_with_microscope.png";
import Researcher from "../Hero/Joker.png";
import Civil from "../Hero/King.png";
import Electrical_engg from "../Hero/Queen.png";
import Student01 from "../Hero/Happy.png";
import Chem from "../Hero/Noob.png";

export default function HomePage() {
  // Corrected component name
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const logosContainerRef = useRef(null);
  // Array of image objects with profession labels
  const images = [
    {
      src: Chef,
      alt: "Chef in professional kitchen",
      profession: "Culinary Arts",
    },
    {
      src: Doctor,
      alt: "Doctor with microscope",
      profession: "Healthcare",
    },
    {
      src: Civil,
      alt: "Engineer at work",
      profession: "Engineering",
    },
    {
      src: Chem,
      alt: "chem_lab",
      profession: "chemistry",
    },
    {
      src: Student01,
      alt: "student01",
      profession: "student",
    },
    {
      src: Electrical_engg,
      alt: "electrical engg",
      profession: "Engineering",
    },
    {
      src: Researcher,
      alt: "Doctor with microscope",
      profession: "Healthcare",
    },
  ];
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo9.png",
    "/logos/logo10.png",
    "/logos/logo11.png",
    "/logos/logo12.png",
  ];

  useEffect(() => {
    // Set up the interval for automatic sliding
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);
  useEffect(() => {
    const logosContainer = logosContainerRef.current;
    let animationFrameId;

    const scrollLogos = () => {
      logosContainer.scrollLeft += 1;
      if (logosContainer.scrollLeft >= logosContainer.scrollWidth / 2) {
        logosContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scrollLogos);
    };

    animationFrameId = requestAnimationFrame(scrollLogos);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-[#1983D3] overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-contain mx-auto"
              style={{
                maxWidth: "100%", // Ensure the image fully covers the div
                maxHeight: "100%", // Ensure the image fully covers the div
              }}
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end text-white text-center px-4 mt-0">
        {" "}
        {/* Adjusted margin-top */}
        <h1 className="text-4xl md:text-8xl font-bold mb-2">
          <span className="text-blue-200">Earn,</span>{" "}
          <span className="text-white">Learn,</span>{" "}
          <span className="text-gray-200">Grow</span>
        </h1>
        <p className="max-w-4xl text-lg md:text-xl mb-12">
          We create industry-ready talent through advanced learning, skilling,
          and certification, leveraging Univoc&apos;s expertise, in partnership
          with universities, corporates, and governments.
        </p>
        <button className="bg-white text-[#1983D3] px-3 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95">
          EXPLORE MORE
        </button>
        {/* Slide Indicators */}
        <div className="flex space-x-4 mt-4 mb-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Courses & Jobs Section */}
      <Element name="courses-jobs-section">
        <section id="Job" className="bg-blue-100 justify-center py-12 px-2">
          <h1 className="text-3xl font-bold text-blue-600 mb-9 ml-30  pt-10 ml-20">
            Top Job Roles
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ml-20 mr-20 gap-4">
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center ">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/wfh.png"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Work From Home</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/Account.png"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Accountant</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/bpo.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">BPO / Customer Care</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center ">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/data.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Data Entry / Back Office</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className=" box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/sales.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">
                  Sales / Marketing Executive
                </span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/office.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">
                  Receptionist / Front Office
                </span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/hospitality.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Hospitality Executives</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/delivery.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Delivery</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl  bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/cook.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Cook/Chef</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl  bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/driver.png"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Driver</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>{" "}
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/spa.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Beauticians / Spa</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/mechanic.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Mechanic</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/it.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">IT-Software-Engineer</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/retail.jpg"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold">Retail / Store Executive</span>
                <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-gray-600">54 Active Jobs</p>
            </div>
            <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                alt="Work From Home Icon"
                className="mb-2"
                src="./src/images/view.png"
              />
              <div className="flex items-center mb-2">
                <span className="font-semibold font-underlined">View All</span>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
        <section id="course" className="bg-blue-50 py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-0">
                Our most Popular Courses
              </h1>
              <a
                href="#"
                className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors"
              >
                View All
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Course Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src="/src/images/image-big5.jpg"
                    alt="Two people working on a laptop in a cozy cafe setting"
                    className="w-full h-[300px] object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    <span className="text-blue-600">Hotel Management:</span>
                    <span className="text-gray-800 ml-2">
                      Distribution, Revenue and Demand Management Specialization
                    </span>
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-clock text-gray-500"></i>
                      <span className="text-gray-600 text-sm">
                        Early Started
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-calendar-alt text-gray-500"></i>
                      <span className="text-gray-600 text-sm">4 Years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-laptop text-gray-500"></i>
                      <span className="text-gray-600 text-sm">Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-user-graduate text-gray-500"></i>
                      <span className="text-gray-600 text-sm">Eligibility</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="inline-block bg-blue-50 text-blue-600 border border-blue-600 rounded-full px-6 py-2 font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src="/src/images/image-big3.jpg"
                    alt="Two people working on a laptop in a cozy cafe setting"
                    className="w-full h-[300px] object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    <span className="text-blue-600">Hotel Management:</span>
                    <span className="text-gray-800 ml-2">
                      Distribution, Revenue and Demand Management Specialization
                    </span>
                  </h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-clock text-gray-500"></i>
                      <span className="text-gray-600 text-sm">
                        Early Started
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-calendar-alt text-gray-500"></i>
                      <span className="text-gray-600 text-sm">4 Years</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-laptop text-gray-500"></i>
                      <span className="text-gray-600 text-sm">Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-user-graduate text-gray-500"></i>
                      <span className="text-gray-600 text-sm">Eligibility</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <a
                      href="#"
                      className="inline-block bg-blue-50 text-blue-600 border border-blue-600 rounded-full px-6 py-2 font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="About" className="bg-blue-100">
          <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                  About Univoc
                </h1>
                <p className="text-gray-700 mb-4">
                  UNIVOC is dedicated to equipping students with the skills,
                  knowledge, and practical experience necessary to succeed in
                  today's rapidly evolving job market. Recognizing the gap
                  between conventional education and industry requirements,
                  UNIVOC focuses on a hands-on, skill-driven approach to
                  learning. Our philosophy, "Skilling to Empower," is more than
                  a tagline; it’s our commitment to making education actionable
                  and career-focused.
                </p>
                <p className="text-gray-700 mb-4">
                  Through collaborations with industry experts, UNIVOC provides
                  a curriculum that blends theoretical concepts with real-world
                  applications, ensuring that students are industry-ready upon
                  graduation. Each program is designed to include internships,
                  on-the-job training, and practical assignments, helping
                  students build a portfolio of experiences and connections in
                  their chosen fields.
                </p>
                <p className="text-gray-700 mb-4">
                  In line with the latest educational standards, UNIVOC
                  integrates flexible learning models, allowing students to
                  customize their educational paths. From major and minor
                  electives to industry-certified skill programs, students can
                  shape their studies around their career goals. Our
                  youth-centric campus further supports this development with
                  vibrant clubs, student-led initiatives, and leadership
                  opportunities that foster a strong sense of community,
                  creativity, and growth.
                </p>
                <div className="flex items-center text-blue-600 mt-4">
                  <i className="fas fa-bars mr-2"></i>
                  <a className="font-semibold" href="#">
                    EXPLORE MORE ABOUT US
                  </a>
                </div>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
                <img
                  alt="Group of professional students standing confidently"
                  className="rounded-lg shadow-lg"
                  src="/src/images/image-big4.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="partners-services" className="bg-blue-700">
          <div className="max-w-full mx-auto relative w-full min-h-[600px] lg:min-h-screen overflow-hidden bg-gray-100">
            <div className="absolute inset-0 bg-blue-200 bg-opacity-30 z-0"></div>

            <div className="relative z-10 pt-16 pb-8 px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-16">
                Trusted Partners
              </h2>

              <div
                ref={logosContainerRef}
                className="flex items-center w-full mt-8 md:mt-16 lg:mt-24 py-12 cursor-pointer overflow-x-hidden"
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
                  Job Seva Is A Dedicated Platform Tailored For The Blue And
                  Grey Collar Workforce. It Connects Candidates With Local Job
                  Opportunities While Offering Upskilling Support To Enhance
                  Their Career Prospects. By Focusing On Skill Development And
                  Bridging The Employment Gap, Job Seva Empowers The Next
                  Billion Individuals To Transform Their Careers, Achieve
                  Financial Independence, And Improve Their Quality Of Life
                  Through Meaningful And Sustainable Job Opportunities.
                </p>
              </div>

              <div className="text-center py-10">
                <h2 className="text-4xl font-bold text-blue-600">
                  How Univoc?
                </h2>
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 mt-8">
                  <div className="card-how bg-white p-10 rounded-lg shadow-lg max-w-sm mx-auto rounded-xl">
                    <img
                      className="float-right"
                      src="./src/images/cost.jpg"
                      alt=""
                    />
                    <br />
                    <br />
                    <h3 className="para text-lg font-bold mb-4">
                      1. How to{" "}
                      <span className="text-blue-600">Variableize Costs</span>
                    </h3>
                    <p className="para text-gray-700 mb-4">
                      Minimize Capital Expenditure (CapEx): Focus on reducing
                      upfront investments tied to acquisition and growth by
                      leveraging flexible, scalable solutions.
                    </p>
                    <p className="para text-gray-700">
                      Shift Cost Structures: Transition from indirect costs to
                      direct costs by outsourcing, pay-per-use models, or
                      optimizing resources.
                    </p>
                  </div>
                  <div className="card-how bg-white p-10 rounded-lg shadow-lg max-w-sm mx-auto rounded-xl">
                    <img
                      className="float-right"
                      src="./src/images/scale.jpg"
                      alt=""
                    />
                    <br />
                    <br />
                    <br />
                    <h3 className="para text-lg font-bold mb-4">
                      2. How to{" "}
                      <span className="text-blue-600"> Fulfill at Scale</span>
                    </h3>
                    <p className="para text-gray-700 mb-4">
                      Scalable Operations: Adjust capacity dynamically to meet
                      fluctuating demands, scaling up or down as required.
                    </p>
                    <p className="para text-gray-700 mb-4">
                      Customer-Centric Approach: Quickly adapt to new customer
                      segments as they emerge, ensuring responsiveness to market
                      changes.
                    </p>
                    <p className="para text-gray-700">
                      Built-in Agility: Design processes and systems that
                      emphasize operational flexibility and rapid deployment.
                    </p>
                  </div>
                  <div className="card-how bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto rounded-xl">
                    <img
                      className="float-right"
                      src="./src/images/productive.jpg"
                      alt=""
                    />
                    <br />
                    <br />
                    <br />
                    <h3 className="para flex-img text-lg font-bold mb-4">
                      3. Why Are Your Workers so{" "}
                      <span className="text-blue-600">Productive</span>?
                    </h3>

                    <p className="para text-gray-700 mb-4">
                      Employee Happiness Equals Productivity: Happy employees
                      deliver better outcomes, driven by positive morale and job
                      satisfaction.
                    </p>
                    <p className="para text-gray-700 mb-4">
                      Reliable Processes Build Trust: Dependable payroll
                      systems, structured performance evaluations, and robust
                      operational frameworks enhance workforce confidence.
                    </p>
                    <p className="para text-gray-700">
                      Empowered Workforce: Investments in skill development,
                      welfare programs, and comprehensive benefits lead to
                      motivated and efficient employees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white w-full px-4 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center md:text-left mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-bold">
                Unlock Talent <br />
                with <span className="text-blue-600">Univoc!</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img
                  className="w-full max-w-sm mx-auto md:max-w-none"
                  src="/src/images/side-img.png"
                  alt="Side illustration"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-2/3">
                {/* Vocational Ed-Tech Platform Hexagon */}
                <div className="bg-blue-500 text-white rounded-lg md:rounded-xl p-6 transform md:rotate-0 md:skew-x-0 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <img
                        src="/src/images/voc.png"
                        alt="Vocational Ed-Tech"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Vocational Ed-Tech Platforms
                    </h3>
                    <ul className="text-sm space-y-2 text-left">
                      <li>Advanced Learning Experience Systems</li>
                      <li>Mobile-based Micro-learning for Skilled Workers</li>
                      <li>
                        Hybrid Training with Instructor-Led Modules (ILBT)
                      </li>
                      <li>AI-Powered Competency Assessments</li>
                    </ul>
                  </div>
                </div>

                {/* Skilling Programs Hexagon */}
                <div className="bg-gray-100 rounded-lg md:rounded-xl p-6 transform md:rotate-0 md:skew-x-0 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <img
                        src="https://i.pinimg.com/1200x/06/c5/be/06c5be7368c29ffd12131d9ae5c47c0a.jpg"
                        alt="Skilling Programs"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      Skilling Programs
                    </h3>
                    <ul className="text-sm space-y-2 text-left">
                      <li>Recognition of Prior Competence (RPL)</li>
                      <li>Certification through Bridge Programs</li>
                      <li>Source-Train-Deploy Framework</li>
                      <li>Capacity Building for Trainers</li>
                      <li>Mapping Skills to Aspirations</li>
                    </ul>
                  </div>
                </div>

                {/* ISDH Hexagon */}
                <div className="bg-blue-100 rounded-lg md:rounded-xl p-6 transform md:rotate-0 md:skew-x-0 hover:scale-105 transition-transform">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <img
                        src="/src/images/ISDH.jpg"
                        alt="ISDH"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      ISDH (Integrated Skill Development Hub)
                    </h3>
                    <ul className="text-sm space-y-2 text-left">
                      <li>
                        Multi-Sector and Multi-Discipline Training Facilities
                      </li>
                      <li>Operational Management for University Campuses</li>
                      <li>Early Skill Development Initiatives in Schools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-white relative text-center   py-12">
          <h2 className="text-blue-500 text-left text-4xl ml-20 font-bold">
            Supported by best
          </h2>
          <div className="relative z-10 flex flex-col md:flex-row justify-center items-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
            <div className="card bg-blue-100 shadow-lg rounded-xl p-6 w-80">
              <img
                alt="Help Club Foundation logo"
                className="mx-auto mb-4"
                src="/src/images/image9.png"
              />
              <p className="para ml-5 text-gray-700">
                UNIVOC offers the best online solutions for recruitment,
                providing a robust platform to source quality candidates across
                any department. With its comprehensive technical and
                psychometric assessment tests, it ensures hiring the right
                talent seamlessly.
              </p>

              <div className="flex-hex gap-4">
                <div>
                  <p className="text-support mt-4 text-black ">
                    <b>Mr. Azeem Faisal</b>
                    <br />
                    Vice President of the Help Club Foundation
                  </p>
                </div>
                <div>
                  <img
                    className="mt-6"
                    src="./src/images/AZEEMFAISAL.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="card bg-blue-100  shadow-lg rounded-xl p-6 w-80">
              <img
                alt="Distil Assessments LLP logo"
                className="mx-auto mb-4"
                src="/src/images/image10.png"
              />
              <p className="para ml-5 text-gray-700">
                UNIVOC has been an invaluable partner in meeting our hiring
                requirements, delivering exceptional solutions tailored to our
                needs. Their professional approach, coupled with their ability
                to identify and assess top-tier talent, has significantly
                streamlined our recruitment process. We deeply appreciate their
                dedication and expertise and look forward to continuing this
                successful collaboration for future talent acquisition needs.
              </p>

              <div className="flex-hex justify-center gap-5">
                <div>
                  <p className="text-support mt-4 text-black ">
                    <b>Mr. Arjun Mishra</b>
                    <br />
                    Distil Assessments LLP
                  </p>
                </div>
                <div></div>
                <img className="mt-6" src="./src/images/ARJUN.jpg" alt="" />
              </div>
            </div>
            <div className="card bg-blue-100  shadow-lg rounded-xl p-6 w-80">
              <img
                alt="FedEx logo"
                className="mx-auto mb-4"
                src="/src/images/image8.png"
              />
              <p className="para ml-5 text-gray-700">
                We screen around 5,000 candidates each month to hire a
                significant number of quality professionals. With 80% of our
                online assessments now managed by Distil, the process has become
                more efficient and reliable. Their expertise has been
                instrumental in streamlining our recruitment journey and
                ensuring we identify the best talent.
              </p>
              <center>
                <div className="flex-hex justify-center gap-5">
                  <div>
                    <p className="text-support mt-4 text-black ">
                      <b>Mr. Danish Siddiqui</b>
                      <br />
                      Fedex
                    </p>
                  </div>
                  <div>
                    <img
                      className="mt-6"
                      src="./src/images/DANISH.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </center>
            </div>
          </div>
          <br />
          <br />
          <div className="absolute inset-0   bg-blue-500 z-0 mt-80 mb-0"></div>
        </section>
        <section></section>
      </Element>
    </motion.div>
  );
}
