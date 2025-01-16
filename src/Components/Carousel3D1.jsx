import { useState } from "react";
import './Carousel3D.css'
const images = [
  "src/assets/tech1.png",
  "src/assets/tech2.png",
  "src/assets/tech3.png",
  "src/assets/tech4.png",
];

const Carousel3D1 = () => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const angleStep = 360 / images.length;

  const rotateCarousel = (direction) => {
    setCurrentAngle((prev) => prev + direction * angleStep);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `rotateY(${currentAngle}deg)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              backgroundImage: `url(${src})`,
              transform: `rotateY(${index * angleStep}deg) translateZ(300px)`,
            }}
          ></div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={() => rotateCarousel(-1)}>
        &#8592;
      </button>
      <button className="carousel-button next" onClick={() => rotateCarousel(1)}>
        &#8594;
      </button>
    </div>
  );
};

export default Carousel3D1;
