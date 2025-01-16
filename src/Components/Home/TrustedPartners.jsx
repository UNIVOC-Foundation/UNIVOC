import { useEffect, useRef } from "react";

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

const TrustedPartners = () => {
  const logosContainerRef = useRef(null);

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
    <>
      <div
        className="max-w-full mx-auto min-h-screen relative w-full h-60 overflow-hidden bg-gray-100"
        style={{
          backgroundImage: `url('/logos/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-100 bg-opacity-30 z-0"></div>

        {/* Moving Logos */}
        <div
          className="flex items-center w-full mt-48 py-36 z-10 cursor-pointer space-x-4 sm:space-x-8 overflow-x-hidden"
          ref={logosContainerRef}
        >
          <div className="flex w-[200%]">
            {" "}
            {/* Adjust the width to 200% */}
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${(index % logos.length) + 1}`}
                className={`w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full border-2 border-sky-600 z-10 hover:bg-white transition-transform transform hover:scale-105 mx-2 ${
                  index === 4 ? "special-class-for-5th-logo" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedPartners;
