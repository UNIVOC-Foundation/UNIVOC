import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom"; // Use Link for client-side routing

const courses = [
  {
    id: 1,
    title: "Pharmacy",
    category: "Pharmacy",
    description:
      "Skills You'll Gain: Pharmacology, Drug Formulation, Patient Counseling.",
    image:
      "https://img.freepik.com/free-photo/pharmacist-holding-medicine-box-capsule-pack-drugstore_31965-8533.jpg",
    link: "/Pharmacy",
  },
  {
    id: 2,
    title: "Data Science",
    category: "Data Science",
    description:
      "Skills You'll Gain: Data Analysis, Machine Learning, Statistical Modeling.",
    image:
      "https://img.freepik.com/free-vector/data-scientist-analyst-working-laptop-with-digital-graph-chart_1150-52509.jpg",
    link: "/DataScience",
  },
  {
    id: 3,
    title: "Java Full Stack Web Development",
    category: "Development",
    description:
      "Skills You'll Gain: Frontend Development, Backend Development, Database Management.",
    image:
      "https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg",
    link: "/java",
  },
  {
    id: 4,
    title: "Dot Net Full Stack Web Development",
    category: "Development",
    description:
      "Skills You'll Gain: Frontend Development, Backend Development, Database Management.",
    image:
      "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg",
    link: "/DotNet",
  },
  {
    id: 5,
    title: "Mechanical Engineering ",
    category: "Engineering",
    description:
      "Skills You'll Gain: Design, Manufacturing, Maintenance, Troubleshooting.",
    image:
      "https://img.freepik.com/free-photo/engineer-meeting-architectural-project-working-with-partner_1421-74.jpg",
    link: "/Mechanical",
  },
  {
    id: 6,
    title: "Chemical",
    category: "Chemical",
    description:
      "Skills You'll Gain: Chemical Reactions, Laboratory Techniques, Safety Procedures.",
    image:
      "https://img.freepik.com/free-photo/scientist-working-laboratory-with-test-tubes-laboratory-equipment_23-2149227131.jpg",
    link: "/Chemical",
  },
  {
    id: 7,
    title: "Hotel Revenue Management",
    category: "Hotel Management",
    description:
      "Skills You'll Gain: Revenue Optimization, Pricing Strategies, Financial Analysis.",
    image:
      "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
    link: "/HotelManagement",
  },
  {
    id: 8,
    title: "MEAN Stack Web Development",
    category: "Development",
    description:
      "Skills You'll Gain: MongoDB, Express.js, Angular, Node.js, Full Stack Development.",
    image:
      "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
    link: "/MEAN",
  },
  {
    id: 9,
    title: "MERN Stack Web Development",
    category: "Development",
    description:
      "Skills You'll Gain: MongoDB, Express.js, React, Node.js, Full Stack Development.",
    image:
      "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
    link: "/MERN",
  },
  {
    id: 10,
    title: "Electrical and Electronics",
    category: "Engineering",
    description:
      "Skills You'll Gain: Electrical Circuits, Electronics, Power Systems, Control Systems.",
    image:
      "https://img.freepik.com/free-photo/electronic-device-circuit-board-close-up_23-2148519692.jpg",
    link: "/Electrical and Electronics",
  },
  {
    id: 11,
    title: "Electrical and Communication",
    category: "Engineering",
    description:
      "Skills You'll Gain: Communication Systems, Signal Processing, Network Design.",
    image:
      "https://img.freepik.com/free-vector/5g-wireless-technology-digital-transformation-background_53876-119505.jpg",
    link: "/Electrical and Communication",
  },
];

const PopularCoursesSlider = () => {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-500 p-8">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-bold text-white">
          Our <span className="text-blue-900">most</span> Popular Courses
        </h2>
        <p className="text-white mt-2">Learn Best Things</p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-8"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-blue-600 font-semibold">
                  {course.category}:
                </h3>
                <h2 className="text-gray-800 font-bold text-lg">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {course.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Apply Now
                  </button>
                  <Link
                    to={course.link}
                    className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-50 transition"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularCoursesSlider;

