// components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
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
              a tagline; it's our commitment to making education actionable
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
  );
}