import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight, FaPlus } from "react-icons/fa";
import "../Courses/RegistrationSection.css";
import image1 from "../Courses/image1.png";
import image01 from "../Courses/image01.png";
import image25 from "../Courses/image25.png";
import sendApp from "../../assets/SendApp.png";

const Courses1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Registration Section */}
      <section className="registration-section">
        {/* Limitless Heading */}
        <h1 className="limitless-heading">
          Limitless Learning, More Possibilities
        </h1>

        {/* Registration Heading */}
        <h2 className="registration-heading">
          <span className="font-agbalum">Registration </span>
          {"  "}
          <span className="font-agbalum">For </span>
          {"  "}
          <span className="Blue-new">New </span>
          {"  "}
          <span className="font-agbalum">Admission</span>
        </h2>

        {/* Registration Paragraph */}
        <p className="registration-paragraph">
          &quot;Embark on an exciting learning adventure today – Enroll now for
          new admissions and unlock access to a comprehensive range of courses
          designed to fuel your passion, enhance your skills, and set you on the
          path to success!&quot;
        </p>

        <div className="timer">
          <div className="timer-box">
            <div className="timer-number">30</div>
            <div className="timer-label">DAYS</div>
          </div>

          <span className="colon">:</span>

          <div className="timer-box">
            <div className="timer-number">18</div>
            <div className="timer-label">HOURS</div>
          </div>

          <span className="colon">:</span>

          <div className="timer-box">
            <div className="timer-number">45</div>
            <div className="timer-label">MINUTES</div>
          </div>

          <span className="colon">:</span>

          <div className="timer-box">
            <div className="timer-number">10</div>
            <div className="timer-label">SECONDS</div>
          </div>
        </div>
        {/* Images */}
        <div
          className="image1"
          style={{ backgroundImage: `url(${image01})` }}
        ></div>
        <div
          className="image2"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>

        {/* Apply Now Button */}
        <div className="text-center">
          <button className="apply-button">Apply Now →</button>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-700 transition duration-300"
        >
          Apply Now <FaChevronRight className="inline ml-2" />
        </motion.button>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-indigo-900">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Find answers to common questions about our courses, admissions,
              fees, career opportunities, and more in our FAQ section for quick
              guidance.
            </p>
            <img
              src={image25 || "/placeholder.svg"}
              alt="FAQ Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="md:w-1/2">
            {[
              "Do you have a refund policy for the course?",
              "Do you offer discounts for students?",
              "Do you offer discounts for students?",
              "What topics are included in the course?",
              "Are the courses online or offline?",
            ].map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4 p-3 sm:p-4 bg-gray-100 rounded-lg flex items-center justify-between"
              >
                <span className="text-sm sm:text-base md:text-lg text-gray-800">
                  {question}
                </span>
                <FaPlus className="text-indigo-600" />
              </motion.div>
            ))}

            <div className="mt-6 sm:mt-8">
              <input
                type="text"
                placeholder="Type your queries"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Become an Instructor Section */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={sendApp || "/placeholder.svg"}
              alt="Send Application"
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              To Become an Instructor
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Never miss out on the latest online courses! Receive weekly
              updates on new opportunities directly from our website.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your mail id"
                className="w-full sm:w-64 p-3 bg-transparent border-b-2 border-white focus:outline-none focus:border-indigo-300"
              />
              <button className="mt-4 sm:mt-0 bg-white text-indigo-800 px-6 py-3 rounded-full hover:bg-indigo-100 transition duration-300">
                Send
              </button>
            </div>

            <p className="mt-4 text-sm">We promise not to spam you!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses1;
