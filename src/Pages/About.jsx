import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  BsLightning,
  BsClock,
  BsArrowUpRight,
  BsBarChart,
} from "react-icons/bs";
import Vision1 from "/images/Vision1.png";
import Vision2 from "/images/Vision2.png";
import About1 from "/src/assets/about1.png";
import About2 from "/src/assets/about2.jpg";
import About3 from "/src/assets/about3.jpg";
import About4 from "/src/assets/about4.jpg";
import About5 from "/src/assets/about5.jpg";

export default function UnifiedVocationalCourses() {
  const [activeTab, setActiveTab] = useState("vision");

  const visionMissionContent = {
    vision: {
      title:
        "Expand Access To Work-Integrated Education On A Broad Scale, Developing Job-Ready Programs That Create Meaningful Career Opportunities For Individuals Across Diverse Social And Geographic Backgrounds",
      image: Vision1,
      points: [
        "Traditional education focuses on memorization, conformity, and indoctrination.",
        "We aim to create a hands-on, real-world model that equips students with practical skills and connects them to job opportunities.",
      ],
    },
    mission: {
      title:
        "Commit To Empowering Youth Through Skill-Integrated Education That Enhances Employability And Nurtures Entrepreneurship",
      image: Vision2,
      points: [
        "Provide skill-based training for employability.",
        "Promote entrepreneurship through mentorship.",
        "Combine academics with real-world skills.",
        "Offer career guidance and job placement.",
        "Focus on digital and tech proficiency.",
      ],
    },
  };

  const coreValues = [
    {
      icon: <BsLightning className="w-6 h-6" />,
      text: "Prioritize holistic student development through seamless integration of education and industry",
    },
    {
      icon: <BsClock className="w-6 h-6" />,
      text: "Foster integrity, ethical practices, and real-world application of knowledge",
    },
    {
      icon: <BsArrowUpRight className="w-6 h-6" />,
      text: "Promote innovation, inclusivity, and societal responsibility through industry partnerships for lasting positive impact and sustainability",
    },
    {
      icon: <BsBarChart className="w-6 h-6" />,
      text: "Implement cost-effective staffing models for greater efficiency",
    },
  ];

  const objectives = [
    "To Facilitate And Create A Pool Of Qualified Jobready Resources.",
    "To Provide Flexibility To Students By Means Of Pre-Defined Single/Multiple Entry And Multiple Exit Points",
    "To Ensure Adequate Knowledge And Skills For Making Students Work Ready At Each Exit Point Of The Program",
    "To Address The Issues Of Unemployment And Industry Requirements In The State Through A Meaningful Industryacademia Partnership By Adopting Dual System Of Training.",
    "To Integrate NSQF And International Specifications Within The Undergraduate Level Of Higher Education In Order To Enhance Employability Of The Graduates In Meeting Global Workforce Requirements.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="bg-gradient-to-b from-blue-50 to-blue-100"
    >
      <Header />
      <AboutSection />
      <VisionMissionSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        content={visionMissionContent}
      />
      <CoreValuesSection values={coreValues} />
      <ObjectivesSection objectives={objectives} />
    </motion.div>
  );
}

function Header() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center">
      <ImageGrid />
      <div className="text-center max-w-4xl mt-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Unified national and international Vocational of Courses
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-blue-500">
          SKILLING TO EMPOWER AND SHAPING
          <br />
          FUTURES, BUILDING SKILLS
        </p>
      </div>
    </div>
  );
}

function ImageGrid() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const images = [
    {
      src: About1,
      alt: "Professional working",
      style: {
        width: "250px",
        height: "250px",
        padding: "12px",
      },
    },
    {
      src: About2,
      alt: "Business meeting",
      style: {
        width: "220px",
        height: "310px",
        padding: "15px",
      },
    },
    {
      src: About3,
      alt: "Office discussion",
      style: {
        width: "240px",
        height: "400px",
        padding: "10px",
      },
    },
    {
      src: About4,
      alt: "Team collaboration",
      style: {
        width: "230px",
        height: "310px",
        padding: "8px",
      },
    },
    {
      src: About5,
      alt: "Late night work",
      style: {
        width: "250px",
        height: "250px",
        padding: "10px",
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFlip((prevFlip) => !prevFlip);
    }, 1500); // Change image every 0.5 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = -2; i <= 2; i++) {
      visibleImages.push(
        images[(currentImageIndex + i + images.length) % images.length]
      );
    }
    return visibleImages;
  };

  return (
    <div className="flex justify-center gap-6 mt-6 flex-wrap">
      {getVisibleImages().map((img, index) => (
        <motion.div
          key={index}
          className={`relative transition-transform duration-200 ease-in-out transform ${
            index === 2 ? "scale-105 opacity-100" : "scale-85 opacity-80"
          }`}
          style={{
            width: img.style.width,
            height: img.style.height,
            padding: img.style.padding,
          }}
          initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
          animate={{ opacity: 1, scale: 1, rotateY: flip ? 180 : 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, rotateY: 180 }}
        >
          <motion.img
            src={img.src}
            alt={img.alt}
            className="object-cover w-full h-full rounded-lg shadow-md"
            style={{
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function AboutSection() {
  return (
    <div className="min-h-screen bg-[#F0F4FF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-2xl font-cursive mb-2">Who Are We</h2>
          <h1 className="text-5xl font-bold mb-8">
            About <span className="text-[#2196F3]">us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/About1.png"
                alt="Team working on laptop"
                className="rounded-lg shadow-lg mb-6 w-full"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-4 border-dotted border-[#2196F3] rounded-full opacity-20 z-0" />
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              UNIVOC is dedicated to equipping students with the skills,
              knowledge, and practical experience necessary to succeed in
              today&rsquo;s rapidly evolving job market. Recognizing the gap
              between conventional education and industry requirements, UNIVOC
              focuses on a hands-on, skill-driven approach to learning. Our
              philosophy, "Skilling to Empower," is more than a tagline; it's
              our commitment to making education actionable and career-focused.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Through collaborations with industry experts, UNIVOC provides a
              curriculum that blends theoretical concepts with real-world
              applications, ensuring that students are industry-ready upon
              graduation. Each program is designed to include internships,
              on-the-job training, and practical assignments, helping students
              build a portfolio of experiences and connections in their chosen
              fields.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              In line with the latest educational standards, UNIVOC integrates
              flexible learning models, allowing students to customize their
              educational paths. From major and minor electives to
              industry-certified skill programs, students can shape their
              studies around their career goals. Our youth-centric campus
              further supports this development with vibrant clubs, student-led
              initiatives, and leadership opportunities that foster a strong
              sense of community, creativity, and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionMissionSection({ activeTab, setActiveTab, content }) {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Vision & Mission
        </h2>
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg inline-flex">
            {["vision", "mission"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-all ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-800">
                {content[activeTab].title}
              </h3>
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-200 rounded-2xl transform rotate-3"></div>
                <img
                  src={content[activeTab].image}
                  alt={`${activeTab} illustration`}
                  className="relative rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4">
                {content[activeTab].points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-gray-700"
                  >
                    <span className="text-blue-500 text-xl">•</span>
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function CoreValuesSection({ values }) {
  return (
    <div className="min-h-screen p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          Our Core <span className="text-blue-500">Values</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="absolute -top-5 left-8">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  {value.icon}
                </div>
              </div>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed">
                {value.text}
              </p>
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-blue-50 w-8 h-8 translate-x-4 -translate-y-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ObjectivesSection({ objectives }) {
  return (
    <div className="min-h-screen bg-[#EEF3FF] p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold flex items-baseline">
            <span className="text-blue-600 mr-1">O</span>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              BJECTIVE
            </span>
          </h1>
        </motion.div>
        <div className="space-y-8 pl-4 md:pl-8">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="flex items-start gap-6 group"
            >
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-3 group-hover:scale-150 transition-transform" />
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-full">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {objective}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
