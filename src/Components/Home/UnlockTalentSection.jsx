// components/UnlockTalentSection.jsx
import React from "react";

export default function UnlockTalentSection() {
  return (
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
            <div className="bg-blue-500 text-white rounded-lg md:rounded-xl p-6 transform md:rotate-0 md:skew-x-0 hover:scale-105 transition-all duration-300">
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

            <div className="bg-gray-100 rounded-lg md:rounded-xl p-6 transform md:rotate-0 md:skew-x-0 hover:scale-105 transition-all duration-300">
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

            <div className="bg-blue-100 rounded-lg md:rounded-xl p-6 transform md:rotate-0 md:skew-x-0 hover:scale-105 transition-all duration-300">
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
  );
}