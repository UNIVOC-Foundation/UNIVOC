// components/HeroSection.jsx
import React from "react";
import { Link } from "react-scroll";

export default function HeroSection({ images, currentImageIndex, setCurrentImageIndex }) {
  return (
    <>
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="object-contain mx-auto"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
        ))}
      </div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end text-white text-center sm:mb-16 sm:mt  px-4 mt-0">
        <h1 className="text-4xl md:text-8xl font-bold mb-2">
          <span className="text-blue-200">Earn,</span>{" "}
          <span className="text-white">Learn,</span>{" "}
          <span className="text-gray-200">Grow</span>
        </h1>
        <p className="max-w-4xl text-lg md:text-xl mb-12">
          We create industry-ready talent through advanced learning, skilling,
          and certification, leveraging Univoc's expertise, in partnership
          with universities, corporates, and governments.
        </p>
        <button className="bg-white text-[#1983D3] px-3 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95">
          EXPLORE MORE
        </button>
        <div className="flex space-x-4 mt-4 mb-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}