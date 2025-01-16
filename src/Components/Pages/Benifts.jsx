
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import icon from "../images/Frame 2418.png";
import { Pagination, Navigation } from "swiper/modules";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-sans text-center mb-8">
          Benefits
          <div className="w-1/2 md:w-1/4 h-0.5 bg-black mx-auto mt-2"></div>
        </h2>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1} // Adjust for smaller screens
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 }, // Show 2 cards on small tablets
            768: { slidesPerView: 3 }, // Show 3 cards on medium screens
            1024: { slidesPerView: 3 }, // Show 3 cards on larger screens
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Card 1 */}
          <SwiperSlide>
            <div className="bg-gradient-to-br from-blue-500 to-blue-300 text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center text-4xl mb-4">
                <img src={icon} alt="icon" className="w-14 h-14" />
              </div>
              <h3 className="text-xl font-bold mb-2">Placement Facilitation</h3>
              <p>
                Career support and placement facilitation will be provided for
                students who successfully complete the program.
              </p>
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="bg-gradient-to-br from-blue-500 to-blue-300 text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center text-4xl mb-4">
                <img src={icon} alt="icon" className="w-14 h-14" />
              </div>
              <h3 className="text-xl font-bold mb-2">Blended Delivery</h3>
              <p>
                The Dot Net Full Stack course blends online learning with
                in-person interaction, boosting student engagement. It enhances
                personalized learning, practical application, and supports
                diverse learning styles for better skill mastery.
              </p>
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="bg-gradient-to-br from-blue-500 to-blue-300 text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center text-4xl mb-4">
                <img src={icon} alt="icon" className="w-14 h-14" />
              </div>
              <h3 className="text-xl font-bold mb-2">Value Additions</h3>
              <p>
                The students will be enabled with various other initiatives
                including Engineers’ Ensemble, free Micro-learning, webinars,
                and other impactful events.
              </p>
            </div>
          </SwiperSlide>

          {/* Additional Cards (example repeated) */}
          <SwiperSlide>
            <div className="bg-gradient-to-br from-blue-500 to-blue-300 text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center text-4xl mb-4">
                <img src={icon} alt="icon" className="w-14 h-14" />
              </div>
              <h3 className="text-xl font-bold mb-2">Value Additions</h3>
              <p>
                The students will be enabled with various other initiatives
                including Engineers’ Ensemble, free Micro-learning, webinars,
                and other impactful events.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gradient-to-br from-blue-500 to-blue-300 text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center text-4xl mb-4">
                <img src={icon} alt="icon" className="w-14 h-14" />
              </div>
              <h3 className="text-xl font-bold mb-2">Value Additions</h3>
              <p>
                The students will be enabled with various other initiatives
                including Engineers’ Ensemble, free Micro-learning, webinars,
                and other impactful events.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Benefits;
