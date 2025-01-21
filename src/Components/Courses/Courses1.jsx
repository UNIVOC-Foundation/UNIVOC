import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Send,
  Clock,
  Calendar,
  Users,
} from "lucide-react";
import image25 from "../Courses/image25.png";
import sendApp from "../../assets/SendApp.png";

const Courses1 = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Do you have a refund policy for the course?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not satisfied, you can request a full refund within the first 30 days of purchase.",
    },
    {
      question: "Do you offer discounts for students?",
      answer:
        "We offer a 20% discount for students with a valid student ID. Contact our support team to learn how to apply for the student discount.",
    },
    {
      question: "What topics are included in the course?",
      answer:
        "Our courses cover a wide range of topics including web development, data science, artificial intelligence, digital marketing, and more. Each course has a detailed curriculum you can review before enrolling.",
    },
    {
      question: "Are the courses online or offline?",
      answer:
        "We offer both online and offline courses. Our online courses can be accessed anytime, anywhere, while our offline courses are conducted in select locations. Check the course details for specific information.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Limitless Learning, Infinite Possibilities
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
              Your Journey to <span className="text-blue-600">Excellence</span>{" "}
              Starts Here
            </h2>
            <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Embark on a transformative learning experience. Our cutting-edge
              courses are designed to ignite your passion, sharpen your skills,
              and propel you towards success in the digital age.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { icon: Clock, text: "Flexible Learning" },
                { icon: Calendar, text: "Lifetime Access" },
                { icon: Users, text: "Expert Instructors" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <feature.icon className="w-6 h-6 text-blue-600" />
                  <span className="text-lg font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Timer Section */}
            <div className="relative mt-16">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform -skew-y-3 rounded-3xl opacity-75"></div>
              <div className="relative flex flex-wrap justify-center gap-6 py-8">
                {[
                  { value: "30", label: "DAYS" },
                  { value: "18", label: "HOURS" },
                  { value: "45", label: "MINUTES" },
                  { value: "10", label: "SECONDS" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 w-32 sm:w-40"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-blue-600">
                      {item.value}
                    </div>
                    <div className="text-sm sm:text-base font-medium text-gray-600">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg mt-12"
            >
              Start Your Journey Now →
            </motion.button>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-50 transform -skew-y-6"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Curious about our courses? Find quick answers to common questions
              and discover how our programs can transform your learning
              experience.
            </p>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={image25 || "/placeholder.svg"}
              alt="FAQ Illustration"
              className="w-full max-w-md mx-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-800">
                      {item.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <div className="flex items-center gap-4 mt-8">
              <input
                type="text"
                placeholder="Have more questions? Ask here..."
                className="flex-grow p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
              >
                <Send className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <img
              src={sendApp || "/placeholder.svg"}
              alt="Become an Instructor"
              className="w-full max-w-lg mx-auto object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Share Your Expertise
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join our community of expert instructors and shape the future of
              education. Share your knowledge, inspire learners worldwide, and
              grow your professional network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-4 bg-white border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
              >
                Become an Instructor
              </motion.button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Join our instructor network and receive updates on teaching
              opportunities. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses1;
