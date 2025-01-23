import React from "react";
import { motion } from "framer-motion";
import CEOImage from "../assets/CEO.jpg"; // Make sure this path is correct in your project structure

const CEOMessage = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex items-stretch">
            <div className="md:w-1/3 bg-[#1983D3] p-8 flex flex-col justify-center items-center text-center">
              {/* Circular Image */}
              <div className="relative w-72 h-92 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img
                  src={CEOImage}
                  alt="CEO Mr. Zaki Ahmed"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                Mr. Zaki Ahmed
              </h2>
              <p className="text-indigo-200 mb-4">CEO & Founder, Univoc</p>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-2">
                Message from our CEO
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-6 border-l-4 border-indigo-500 pl-4">
                "Education is the most powerful weapon which you can use to
                change the world."
              </blockquote>

              <div className="space-y-4 text-gray-600">
                <p>
                  At Univoc, our vision is to bridge the gap between industries
                  and skilled manpower, creating opportunities that align with
                  global standards.
                </p>
                <p>
                  Our mission is simple yet powerful: to bridge the gap between
                  industry demands and individual capabilities. We've crafted a
                  diverse range of cutting-edge courses that not only meet but
                  anticipate the needs of various sectors, from technology and
                  healthcare to business and creative fields.
                </p>
                <p>
                  What sets Univoc apart? It's our unwavering commitment to
                  quality, relevance, and student success. Our courses are
                  designed in collaboration with industry leaders, ensuring that
                  what you learn today is what you'll apply tomorrow. We don't
                  just teach; we transform, equip, and empower.
                </p>
                <p>
                  As we continue to expand our global footprint, particularly in
                  Saudi Arabia and Dubai, we're excited about the opportunities
                  this brings to our students. Your success is our success, and
                  we're dedicated to providing you with the tools, knowledge,
                  and support you need to thrive in your chosen field.
                </p>
                <p>
                  Join us at Univoc, and let's embark on this journey of growth
                  and excellence together. Your future starts here.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="/courses"
                  className="inline-block bg-[#1983D3] text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
                >
                  Explore Our Courses
                </a>
                <a
  href="/about"
  className="inline-block bg-white text-indigo-600 border border-[#1983D3] px-6 py-3 rounded-md font-semibold hover:bg-[#E6F4FB] transition duration-300 ease-in-out"
>
  Learn More About Univoc
</a>

              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOMessage;
