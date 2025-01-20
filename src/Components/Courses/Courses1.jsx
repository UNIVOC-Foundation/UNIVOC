import "../Courses/RegistrationSection.css";
import image1 from "../Courses/image1.png";
import image01 from "../Courses/image01.png";
import image25 from "../Courses/image25.png";
import sendApp from "../../assets/SendApp.png";

const Courses1 = () => {
  return (
    <div className="full-screen-container">
      {/* Registration Section */}
      <section className="course-sec">
        {/* Limitless Heading */}
        <h1 className="heading-limitless ">
          Limitless Learning, More Possibilities
        </h1>

        {/* Registration Heading */}
        <center>
        <h2 className="registration-heading">
          <span className="font-agbalum">Registration </span>
          {"  "}
          <span className="font-agbalum">For </span>
          {"  "}
          <span className="Blue-new">New </span>
          {"  "}
          <span className="font-agbalum">Admission</span>
        </h2>
        </center>

        {/* Registration Paragraph */}
        <p className="registration-paragraph ml-40">
          &quot;Embark on an exciting learning adventure today – Enroll now for
          new admissions and unlock access to a comprehensive range of courses
          designed to fuel your passion, enhance your skills, and set you on the
          path to success!&quot;
        </p>
        <center>
        <div class="slider-container">
      <div class="slider">
        <div class="slide">
          <img src="/images/ELECTRICAL AND ELECTRONICS2.png" alt="Slide 1"/>
        </div>
        <div class="slide">
          <img src="/images/Pharmacy2.png" alt="Slide 2"/>
        </div>
        <div class="slide">
          <img src="/images/MERN2.png" alt="Slide 3"/>
        </div>
        <div class="slide">
          <img src="/images/HotelManagement2.png" alt="Slide 4"/>
        </div>
      </div>
    </div>
    </center>
        <div className="timer">
          <div className="timer-box">
            <div className="timer-number">30</div>
            <div className="timer-label">DAYS</div>
          </div>

          <span className="colon">:</span>

          <div className="timer-box">
            <div className="timer-number">18</div>
            <div className="timer-label">HOURS</div>
          </div>

          <span className="colon">:</span>

          <div className="timer-box">
            <div className="timer-number">45</div>
            <div className="timer-label">MINUTES</div>
          </div>

          <span className="colon">:</span>

          <div className="timer-box">
            <div className="timer-number">10</div>
            <div className="timer-label">SECONDS</div>
          </div>
        </div>
        
        {/* Images */}
      
        {/* Apply Now Button */}
        <div className="text-center">
          <button className="apply-button">Apply Now →</button>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-left">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <p className="faq-subheading">
            Find answers to common questions about our courses, admissions,
            fees, career opportunities, and more in our FAQ section for quick
            guidance.
          </p>
          <img src={image25} alt="FAQ Illustration" className="faq-image" />
        </div>

        <div className="faq-right">
          {[
            "Do you have a refund policy for the course?",
            "Do you offer discounts for students?",
            "Do you offer discounts for students?",
            "What topics are included in the course?",
            "Are the courses online or offline?",
          ].map((question, index) => (
            <div className="faq-item" key={index}>
              <span className="dot">•</span>
              <span className="question">{question}</span>
              <span className="plus">⨁</span>
            </div>
          ))}

          {/* New Query Box */}
          <div className="query-box">
            <input
              type="text"
              placeholder="Type your queries"
              className="query-input"
            />
            <button className="query-send">Send</button>
          </div>
        </div>
      </section>
      <div
        className=" relative min-h-screen w-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient(270.03deg, #DCE7FF 26.41%, rgba(220, 231, 255, 0) 99.97%)",
        }}
      >
        {/* Blue Box Container */}
        <div
          className=" relative w-[100%] max-w-[1800px] h-[600px] rounded-tl-[38.35px] rounded-tr-[38.35px] rounded-bl-[38.35px] rounded-br-[38.35px] shadow-[19.18px_19.18px_63.92px_0px_rgba(0,0,0,0.5)] p-4 md:p-16"
          style={{
            background:
              "linear-gradient(95.36deg, #1F53C5 1.69%, #6993F1 24.64%, #6993F1 60.79%, #1D4BB2 96.93%)",
          }}
        >
          {/*   <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-15 left-800"
        >
          <path
            d="M34.129 7.9387C32.5626 6.65104 31.1483 5.21573 29.4862 3.52895C19.9673 12.431 10.4814 21.3022 0.995458 30.1734C0.868709 30.0863 0.741923 29.9993 0.615174 29.9123C1.00297 29.3058 1.31705 28.6336 1.78983 28.1027C7.60473 21.5735 13.456 15.0765 19.2687 8.5454C21.6716 5.8456 24.005 3.08395 26.5013 0.182492C31.2421 0.208757 35.8516 0.402934 40.9514 0.617787C38.4634 3.29345 36.3723 5.54225 34.129 7.9387Z"
            fill="#BF0036"
          />
        </svg>
         <svg
          width="309"
          height="500"
          viewBox="0 0 309 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 z-0"
        >
          <path
            d="M0.983284 360.609L59.4711 358.371L99.9542 356.823C111.929 356.365 123.832 354.748 135.495 351.994L169.602 343.941C196.337 337.628 221.781 326.746 244.812 311.774V311.774C263.067 299.907 276.979 282.437 284.459 261.989L295.876 230.777C306.156 202.673 298.176 171.141 275.765 151.311L265.967 142.64C248.084 126.816 222.018 124.381 201.513 136.619L189.618 143.719C167.544 156.895 162.054 186.459 177.927 206.681V206.681C187.472 218.84 202.848 224.884 218.117 222.478L236.854 219.526C259.629 215.938 279.486 202.069 290.696 181.922L295.812 172.728C323.291 123.343 302.673 61.0189 251.163 37.7656L212.255 20.2014C205.228 17.0293 197.944 14.4612 190.481 12.525L176.077 8.7878C116.769 -6.59997 53.7753 2.2304 0.983796 33.3323V33.3323"
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="1.27842"
            strokeLinecap="round"
            strokeDasharray="19.18 19.18"
          />
        </svg> */}
          {/* Content inside Blue Box */}
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
            {/* Left Section - Illustration */}
            <div className="flex justify-center w-full md:w-1/2">
              <img
                src={sendApp}
                alt="Send Application"
                className="w-[550px] h-[450px]"
              />
            </div>

            {/* Right Section - Text and Input */}
            <div className="text-white text-center md:text-left md:w-1/2">
              <h1 className="text-[32px] md:text-[40px] font-bold mb-4">
                To Become an Instructor
              </h1>
              <p className="text-[16px] mb-6">
                Never miss out on the latest online courses! Receive weekly
                updates on new opportunities directly from our website.
              </p>

              {/* Email Input */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your mail id"
                  className="p-3 w-full md:w-[300px] bg-transparent border-b-2 border-white focus:border-white outline-none placeholder-white"
                />
              </div>

              {/* Send Button */}
              <button className="relative w-[179px] h-[43.8px] left-[50px] bg-[#D9D9D9] rounded-[32.4471px] border-2 border-[#01246D] hover:bg-[#01246D] hover:text-white text-black font-semibold flex items-center justify-center shadow-md transition duration-300 ease-in-out mt-6">
                Send
                <div
                  className="relative right-[-50px] top-[-05px] w-[12px] h-[12px] bg-[#01246D] rotate-[60deg]"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                  }}
                ></div>
              </button>
            </div>
            <p className="relative top-[160px] left-[-560px] text-[14px] text-center text-white md:text-left whitespace-nowrap">
              We promise not to spam you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses1;
