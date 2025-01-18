// components/CourseSection.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing

export default function CourseSection() {
  return (
    <section id="course" className="bg-blue-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-0">
            Our most Popular Courses
          </h1>
          <Link
            to="/courses" // Make it a React Router Link to the courses page
            className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors"
          >
            View All
            <i className="fas fa-arrow-right ml-2 text-sm"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                  <span className="text-gray-600 text-sm">Early Started</span>
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

              <div className="text-center relative z-10">
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
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                  <span className="text-gray-600 text-sm">Early Started</span>
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

              <div className="text-center relative z-10">
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
  );
}
