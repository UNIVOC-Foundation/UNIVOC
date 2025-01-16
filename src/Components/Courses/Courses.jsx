import React from "react";
import PopularCoursesSlider from "./PopularCoursesSlider";
import Courses1 from "./Courses1";


const Courses = () => {
  return (
    <>
    <div
  className="relative w-full min-h-screen px-4 md:px-20 py-10 grid place-items-center"
  style={{
    backgroundImage: `
      repeating-linear-gradient(to right, rgba(173, 216, 230, 0.5) 0, rgba(173, 216, 230, 0.5) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(to bottom, rgba(173, 216, 230, 0.5) 0, rgba(173, 216, 230, 0.5) 1px, transparent 1px, transparent 40px)
    `,
    backgroundSize: '40px 40px',
    backgroundColor: '#f0f8ff',
  }}
>
  {/* Header */}
  <div className="text-center mb-8">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
      Learning <span className="text-blue-500">Paths</span>
    </h1>
    <p className="text-sm md:text-base lg:text-lg text-gray-600 italic mt-2">
      Reach new horizons in learning
    </p>
  </div>

  {/* Search Bar */}
  <div className="relative w-full max-w-md md:max-w-lg mb-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
    <input
      type="text"
      placeholder="Search for over 50+ courses"
      className="w-full px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
    />
    <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
      Search
    </button>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-5xl space-y-10 md:space-y-0 md:space-x-10">
    {/* Center Square Image */}
    <div className="flex items-center justify-center">
      <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-200 rounded-[5rem] overflow-hidden shadow-md">
        <img
          src="/background-square.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Benefits Section */}
    <div className="flex flex-col items-start w-full px-4 md:px-0">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Benefits <span className="text-blue-500">From Our Online Learning</span>
      </h2>
      <div className="space-y-6">
        {/* Benefit Item */}
        {[
          {
            icon: '🎓',
            title: 'Online Degrees',
            description:
              'Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.',
          },
          {
            icon: '⏳',
            title: 'Short Courses',
            description:
              'Enhance your skills with our concise and focused short courses, designed for quick and effective learning.',
          },
          {
            icon: '👨‍🏫',
            title: 'Training From Experts',
            description:
              'Immerse yourself in knowledge with industry experts guiding you through hands-on experience.',
          },
          {
            icon: '🎥',
            title: '1.5k+ Video Courses',
            description:
              'Dive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience.',
          },
        ].map((benefit, index) => (
          <div className="flex items-start" key={index}>
            <div className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-blue-600 cursor-pointer text-xl">
              {benefit.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


<PopularCoursesSlider/>
<Courses1/>
    </>
  );
};

export default Courses;
