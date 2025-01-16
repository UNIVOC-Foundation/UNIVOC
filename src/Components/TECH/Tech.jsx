import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll"; // Import react-scroll
import "../TECH/Tech.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import tech1 from '../../assets/tech1.png';
import tech2 from '../../assets/tech2.png';
import tech3 from '../../assets/tech3.png';
import ai1 from '../../assets/ai1.png';
import ai2 from '../../assets/ai2.png';
import layer from '../../assets/layer.png';

const benefits = [
  { id: 1, title: "Access to Skilled Manpower", description: "Gain industry-specific, trained personnel to meet business demands." },
  { id: 2, title: "Reduced Attrition", description: "Retain employees longer through education and clear career progression opportunities." },
  { id: 3, title: "Cost-Effective Training", description: "Employ trainees/apprentices without incurring PF or ESIC obligations." },
  { id: 4, title: "Government Incentives", description: "Avail financial benefits under NAPS (National Apprenticeship Promotion Scheme) and NATS (National Apprenticeship Training Scheme)." },
  { id: 5, title: "CSR Benefits", description: "Allocate trainee stipends and training fees under Corporate Social Responsibility (CSR) provisions." },
  { id: 6, title: "Recognized Qualifications", description: "Provide UGC-approved degrees/diplomas and NCVET-recognized certifications to candidates." },
  { id: 7, title: "Blended Learning", description: "Deliver university-level education through flexible, blended learning models." },
];                

const technologies = [
  { id: 1, image: tech3, title: "Berojgar Survey", description: "Berojgar Survey has grown from a job board to a global career partner, connecting talent with opportunities that align with their aspirations. We understand your needs and match them with recruiters looking for candidates like you. By bridging this gap, we empower individuals to achieve their career goals while supporting recruiters in finding the right fit." },
  { id: 2, image: tech2, title: "Uni Job", description: "Uni Job empowers the Blue and Grey Collar workforce by connecting them to local job opportunities and offering upskilling programs. Focused on accessibility and career growth, it bridges the gap between employers and candidates, transforming lives and creating a skilled workforce to drive socio-economic development and sustainable career success." },
  { id: 3, image: tech1, title: "AI LMS", description: "AI LMS utilizes artificial intelligence to personalize learning, automate tasks, and track progress. It helps students complete 30% of their learning and meet required hours. By customizing learning paths and providing analytics, AI LMS enhances engagement, improves outcomes, and increases overall educational efficiency." },
  { id: 4, image: tech3, title: "Berojgar Survey", description: "Berojgar Survey has grown from a job board to a global career partner, connecting talent with opportunities that align with their aspirations. We understand your needs and match them with recruiters looking for candidates like you. By bridging this gap, we empower individuals to achieve their career goals while supporting recruiters in finding the right fit." },
  { id: 5, image: tech2, title: "Uni Job", description: "Uni Job empowers the Blue and Grey Collar workforce by connecting them to local job opportunities and offering upskilling programs. Focused on accessibility and career growth, it bridges the gap between employers and candidates, transforming lives and creating a skilled workforce to drive socio-economic development and sustainable career success." },
  { id: 6, image: tech1, title: "AI LMS", description: "AI LMS utilizes artificial intelligence to personalize learning, automate tasks, and track progress. It helps students complete 30% of their learning and meet required hours. By customizing learning paths and providing analytics, AI LMS enhances engagement, improves outcomes, and increases overall educational efficiency." },
];

const Tech = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2); // Middle circle is active by default
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % benefits.length);
        setActiveIndex((prevIndex) => (prevIndex + 1) % technologies.length);
        setFade(true);
      }, 500); // Duration of fade-out animation
    }, 2000); // Change card every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % technologies.length);
      setFade(true);
    }, 500); // Duration of fade-out animation
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + technologies.length) % technologies.length);
      setFade(true);
    }, 500); // Duration of fade-out animation
  };

  const getVisibleTechnologies = () => {
    const visibleTechnologies = [];
    for (let i = -2; i <= 2; i++) {
      visibleTechnologies.push(technologies[(activeIndex + i + technologies.length) % technologies.length]);
    }
    return visibleTechnologies;
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      visibleCards.push(benefits[(currentCardIndex + i) % benefits.length]);
    }
    return visibleCards;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      style={{ backgroundColor: "#1983D3" }}
    >
      {/* Header Section */}
      <section className="relative py-8 text-center mx-auto">
        {/* Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 1) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(to bottom, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 1) 1px, transparent 1px, transparent 20px)
            `,
            maskImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)
            `,
            WebkitMaskImage: `
              linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)
            `,
            backgroundSize: "100% 100%",
            zIndex: 0,
          }}
        ></div>

        <h1
          className="text-white mx-auto flex items-center justify-center relative"
          style={{
            width: "90%",
            maxWidth: "900px",
            height: "100px",
            borderRadius: "100px",
            background:
              "linear-gradient(269.99deg, #194568 45.4%, rgba(0, 67, 117, 0) 99.99%)",
            fontFamily: "Inter, sans-serif",
            fontSize: "50px",
            fontWeight: "700",
            lineHeight: "normal",
            textAlign: "center",
          }}
        >
          <span>TECHNOLOGY</span>
          <span className="relative">
            <img
              src={layer}
              alt="Layer"
              className="absolute h-16 w-auto"
              style={{
                left: "-10px",
                right: "0",
                top: "0",
                bottom: "0",
                objectFit: "contain",
              }}
            />
          </span>
        </h1>

        <div className="relative mt-20">
          <button onClick={handlePrev} className="rotate-button left-button">
            <FontAwesomeIcon icon={faChevronLeft} className="text-2xl text-white" />
          </button>
          <div className="circular-images-container flex justify-center gap-8 mt-6 flex-wrap">
            {getVisibleTechnologies().map((tech, index) => (
              <div
                key={tech.id}
                className={`circle transition-transform duration-500 ease-in-out transform ${
                  index === 2 ? 'scale-105 opacity-100 active-circle' : 'scale-85 opacity-80'
                }`}
                style={{
                  backgroundImage: `url(${tech.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            ))}
          </div>
          <button onClick={handleNext} className="rotate-button right-button">
            <FontAwesomeIcon icon={faChevronRight} className="text-2xl text-white" />
          </button>
        </div>

        <h2 className={`text-xl sm:text-4xl font-semibold mt-6 text-white transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          {technologies[activeIndex].title}
        </h2>
        <div className={`flex justify-center items-center mt-8 max-w-8xl mx-auto text-base sm:text-lg text-white transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <img src={ai1} alt="AI 1" className="h-16 w-auto mr-4" />
          <p>{technologies[activeIndex].description}</p>
          <img src={ai2} alt="AI 2" className="h-16 w-auto ml-4" />
        </div>
      </section>

      {/* Industry Benefits Section */}
      <section className="relative py-8 text-center mx-auto mt-5">
        {/* Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: `
              linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)
            `,
            WebkitMaskImage: `
              linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%)
            `,
            backgroundSize: "100% 100%",
            zIndex: 0,
          }}
        ></div>

        <h1
          className="text-white mx-auto flex items-center justify-center relative"
          style={{
            width: "90%",
            maxWidth: "900px",
            height: "100px",
            gap: "10px",
            borderRadius: "100px",
            background:
              "linear-gradient(89.99deg, #194568 45.4%, rgba(0, 67, 117, 0) 99.99%)",
            fontFamily: "Inter, sans-serif",
            fontSize: "50px",
            fontWeight: "700",
            lineHeight: "normal",
            textAlign: "center",
          }}
        >
          INDUSTRY BENEFITS
        </h1>

        <div className="flex flex-col items-center justify-center space-y-4 mt-8 overflow-hidden">
          {getVisibleCards().map((benefit, index) => (
            <div
              key={benefit.id}
              className={`benefit-card transition-transform duration-300 ease-in-out transform ${
                index === 1 ? "scale-105 opacity-100 active-card" : "scale-85 opacity-80 blur"
              }`}
              style={{
                backgroundColor: index === 1 ? "#fff" : "#f0f0f0",
                borderRadius: "20px",
                padding: "20px",
                width: "700px",
                height: "100px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        <Link
          to="next-section"
          smooth={true}
          duration={500}
          className="scroll-down"
        >
        </Link>
      </section>
    </motion.div>
  );
};

export default Tech;
