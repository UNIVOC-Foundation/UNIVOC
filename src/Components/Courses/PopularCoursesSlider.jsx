import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Pharmacy",
    category: "Pharmacy",
    rating: 4.8,
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
    rating: 4.9,
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
    rating: 4.7,
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
    rating: 4.6,
    description:
      "Skills You'll Gain: Frontend Development, Backend Development, Database Management.",
    image:
      "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg",
    link: "/DotNet",
  },
  {
    id: 5,
    title: "Mechanical Engineering",
    category: "Engineering",
    rating: 4.8,
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
    rating: 4.7,
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
    rating: 4.5,
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
    rating: 4.8,
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
    rating: 4.9,
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
    rating: 4.6,
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
    rating: 4.7,
    description:
      "Skills You'll Gain: Communication Systems, Signal Processing, Network Design.",
    image:
      "https://img.freepik.com/free-vector/5g-wireless-technology-digital-transformation-background_53876-119505.jpg",
    link: "/Electrical and Communication",
  },
];

const PopularCourses = () => {
  const scrollContainer = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const cardWidth = scrollContainer.current.firstChild.offsetWidth + 24;
      const { scrollLeft } = scrollContainer.current;
      const scrollTo =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollContainer.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-500 p-8 relative">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-white">
          Our <span className="text-blue-900">most</span> Popular Courses
        </h2>
        <p className="text-white mt-2">Learn Best Things</p>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <button
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-blue-600 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10 flex items-center justify-center"
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollContainer}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[320px] bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300 snap-start"
            >
              <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{course.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-4">
                  <h3 className="text-blue-600 font-semibold text-sm">
                    {course.category}
                  </h3>
                  <h2 className="text-gray-800 font-bold text-xl mt-1">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="flex gap-3 mt-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd7pnMkYKrjvnGB2EAoetmXE2Z97A_lVAEOTOtCjUjOvwC6mg/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 bg-blue-500 text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors duration-200 text-center"
                  >
                    Apply Now
                  </a>
                  <Link
                    to={course.link}
                    className="flex-1 py-2.5 text-blue-500 border-2 border-blue-500 rounded-full text-sm font-semibold text-center hover:bg-blue-50 transition-colors duration-200"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 text-blue-600 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10 flex items-center justify-center"
          onClick={() => scroll("right")}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default PopularCourses;
