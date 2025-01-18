import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import HeroSection from "./HeroSection";
import JobSection from "./JobSection";
import CourseSection from "./CourceSection";
import AboutSection from "./AboutSection";
import PartnersSection from "./PartnersSection";
import HowUnivocSection from "./HowUnivocSection";
import UnlockTalentSection from "./UnlockTalentSection";
import SupportedBySection from "./SupportBySection";

// Import images directly
import Chef from "../Hero/Chef.png";
import Doctor from "../Hero/Doctor_with_microscope.png";
import Researcher from "../Hero/Joker.png";
import Civil from "../Hero/King.png";
import Electrical_engg from "../Hero/Queen.png";
import Student01 from "../Hero/Happy.png";
import Chem from "../Hero/Noob.png";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const logosContainerRef = useRef(null);

  const images = [
    {
      src: Chef,
      alt: "Chef in professional kitchen",
      profession: "Culinary Arts",
    },
    { src: Doctor, alt: "Doctor with microscope", profession: "Healthcare" },
    { src: Civil, alt: "Engineer at work", profession: "Engineering" },
    { src: Chem, alt: "chem_lab", profession: "chemistry" },
    { src: Student01, alt: "student01", profession: "student" },
    { src: Electrical_engg, alt: "electrical engg", profession: "Engineering" },
    {
      src: Researcher,
      alt: "Doctor with microscope",
      profession: "Healthcare",
    },
  ];

  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo9.png",
    "/logos/logo10.png",
    "/logos/logo11.png",
    "/logos/logo12.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const logosContainer = logosContainerRef.current;
    let animationFrameId;

    const scrollLogos = () => {
      logosContainer.scrollLeft += 1;
      if (logosContainer.scrollLeft >= logosContainer.scrollWidth / 2) {
        logosContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scrollLogos);
    };

    animationFrameId = requestAnimationFrame(scrollLogos);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-[#1983D3] overflow-hidden"
    >
      <HeroSection
        images={images}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <Element name="courses-jobs-section">
        <JobSection />
        <CourseSection />
        <AboutSection />
        <PartnersSection logos={logos} logosContainerRef={logosContainerRef} />
        <HowUnivocSection />
        <UnlockTalentSection />
        <SupportedBySection />
      </Element>
    </motion.div>
  );
}
