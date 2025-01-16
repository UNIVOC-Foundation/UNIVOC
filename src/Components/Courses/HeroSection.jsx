// components/HeroSection.jsx
import Courses from "./Courses";
import image4 from "../../assets/image 4.png";
import adani from "../../assets/adani.png";
import epin from "../../assets/e-pin.png";
import nilm from "../../assets/nilm.png";
import padget from "../../assets/padget.png";
import ak from "../../assets/ak.png";
import turners from "../../assets/turners.png";
import Dixon from "../../assets/Dixon.png";
import subros from "../../assets/subros.png";
import nsdc from "../../assets/nsdc.png";
import isid from "../../assets/isid.png";
import global from "../../assets/global.png";
import capro from "../../assets/capro.png";
import image11 from "../../assets/image 11.png";
import man from "../../assets/man.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#C6D5F6] via-[#EAF0FF] to-[#DEE8FF] min-h-screen py-20 ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg mt-[-300px]">
          <h1 className="text-5xl font-bold text-black-800">
            Upgrade your skills with our unique, expertly designed courses.
          </h1>
          <p
            className="mt-4 text-black-600"
            style={{
              position: "relative",
              width: "831px",
              height: "90px",
              left: "3 px",
              top: "30px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "26px",
              lineHeight: "30px",
              display: "flex",
              alignItems: "center",
              color: "#000000",
            }}
          >
            Explore a transformative approach to skill development on our online
            learning platform. Uncover a new realm of learning experiences and
            elevate your expertise in unique ways.
          </p>

          <div className="relative mt-6 flex justify-center md:justify-start">
            <button
              className="absolute w-[155.13px] h-[51.37px] left-[10px] top-[100px] 
             bg-gradient-to-r from-[#1883D3] via-[#3F94E6] to-[#88ADFC] 
             rounded-[10.2736px] text-white flex justify-center items-center"
            >
              Enroll Now
            </button>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
              style={{
                position: "relative ",
                top: "110px",
                left: "250px",
              }}
            >
              <circle
                cx="20"
                cy="20"
                r="19.5"
                stroke="#1883D3"
                strokeDasharray="6 5"
              />
              <circle
                cx="19.5"
                cy="19.5"
                r="16.5"
                fill="url(#paint0_linear_4_24)"
              />
              <path
                d="M31.3769 19.5002L13.7782 29.8442L13.6194 9.43134L31.3769 19.5002Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4_24"
                  x1="8"
                  y1="10"
                  x2="26.5"
                  y2="33"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6DC0FF" />
                  <stop offset="0.257545" stopColor="#055693" />
                  <stop offset="0.720001" stopColor="#4AA2E3" />
                  <stop offset="1" stopColor="#002F52" />
                </linearGradient>
              </defs>
            </svg>
            <span
              className="text-blue-700 font-bold text-[20.1278px] leading-[10px] flex items-center underline"
              style={{
                position: "relative", // Set position to absolute
                top: "120px", // Adjust the top value as needed
                left: "250px", // Adjust the left value as needed
                width: "155px",
                height: "11px",
                fontFamily: "Inter",
                fontWeight: 700,
                textDecorationLine: "underline",
                flex: "none",
                order: 1,
                flexGrow: 0,
              }}
            >
              What’s Univoc?
            </span>
          </div>
        </div>

        {/* Image and SVG */}
        <div
          className="relative w-full md:w-1/2 flex justify-center items-center"
          style={{ zIndex: 2 }}
        >
          {/* SVG Illustration */}
          <svg
            width="460"
            height="460"
            viewBox="0 0 460 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
            style={{
              top: "30px",
              left: "220px",
              zIndex: 2,
            }}
          >
            <circle
              cx="230"
              cy="230"
              r="228.5"
              stroke="#0A71BE"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="18 20"
            />
            <circle cx="230" cy="230" r="210" fill="url(#paint0_linear_2_96)" />
            <defs>
              <linearGradient
                id="paint0_linear_2_96"
                x1="61.709"
                y1="117.483"
                x2="389.561"
                y2="373.072"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#88ADFC" />
                <stop offset="1" stopColor="#255DD4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main Illustration Image */}
          <img
            src={image4}
            alt="Learning Illustration"
            style={{
              width: "370px",
              height: "590px",
              position: "relative",
              top: "-20px",
              left: "130px",
              gap: "0px",
              opacity: "1",
              zIndex: 3,
            }}
            className="relative"
          />
        </div>
      </div>
      {/* New Rounded Box Section */}
      <div
        style={{
          top: "-550px",
          left: "800px",
          boxShadow: "2px 8px 29px 0px #00000066", // Added box shadow
          opacity: "0.8",
          zIndex: 2,
        }}
        className="relative bg-white rounded-xl p-4 flex items-center space-x-4 w-72"
      >
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
          {/* Add your arrow icon or SVG here */}
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.524414"
              width="31.951"
              height="32"
              rx="15.9755"
              fill="url(#paint0_linear_4_43)"
            />
            <path
              d="M12.6334 20.5203L11.6654 20.4254C11.2555 20.3852 10.9567 20.0213 10.9988 19.6138L11.8281 11.1395C11.8683 10.7296 12.2322 10.4308 12.6397 10.473L21.1116 11.3042C21.5214 11.3444 21.8203 11.7083 21.7781 12.1157L21.6831 13.0837C21.6425 13.4979 21.2675 13.7979 20.8541 13.7485L15.7409 13.1214L21.3918 20.0018C21.6533 20.3202 21.6075 20.7867 21.2891 21.0482L20.523 21.6774C20.2046 21.9389 19.7381 21.8931 19.4766 21.5747L13.8257 14.6944L13.4466 19.8364C13.4167 20.2538 13.0495 20.5634 12.6334 20.5203Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_43"
                x1="5.52441"
                y1="8"
                x2="27.0244"
                y2="26.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8FCFFF" />
                <stop offset="0.5" stopColor="#1682D3" />
                <stop offset="1" stopColor="#0092FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              // Background color
              fontFamily: "Inter, sans-serif", // Font family
              color: "#1883D3", // Text color for better contrast
              textAlign: "center", // Center the text horizontally
            }}
            className=" relative text-lg font-bold"
          >
            50+
          </p>

          <p className="text-black-600">Online Courses</p>
        </div>
      </div>

      {/* Online student */}
      <div
        style={{
          top: "160px",
          left: "1265px",
          width: "250px",
          boxShadow: "2px 8px 29px 0px #00000066", // Added box shadow
          opacity: 0.8,
          zIndex: 2,
        }}
        className="absolute bg-white rounded-xl p-4 flex items-center space-x-4 w-72"
      >
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full">
          <img
            src={man}
            alt="Custom Icon"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
            }}
          />
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              // Background color
              fontFamily: "Inter, sans-serif", // Font family
              color: "#1883D3", // Text color for better contrast
              textAlign: "center", // Center the text horizontally
            }}
            className="text-lg font-bold"
          >
            10k+
          </p>

          <p className="text-black-600">Online Students</p>
        </div>
      </div>

      {/* online section */}
      <div
        style={{
          top: "420px",
          left: "780px",
          boxShadow: "2px 8px 29px 0px #00000066", // Added box shadow
          zIndex: 2,
          height: "100px",
          opacity: 0.8,
        }}
        className="absolute bg-white rounded-xl p-4 flex items-center space-x-4 w-72"
      >
        {/* Icon */}
        <div
          className="flex items-center justify-center w-12 h-12 text-white rounded-full"
          style={{
            width: "27.82px",
            height: "27.82px",
            gap: "0px",
            borderRadius: "13.09px 0px 0px 0px",
            opacity: "1",
          }}
        >
          <img
            src={image11}
            alt="Custom Icon"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
            }}
          />
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              // Background color
              fontFamily: "Inter, sans-serif", // Font family
              color: "#1883D3", // Text color for better contrast
              textAlign: "center", // Center the text horizontally
            }}
            className="text-lg font-bold"
          >
            Advance Classes
          </p>

          <p
            style={{
              fontFamily: "Inter, sans-serif", // Font family
              color: "black", // Text color for better contrast
              textAlign: "center", // Center the text horizontally
              fontSize: "12px",
              position: "relative", // Set position relative for upward adjustment
              top: "-10px", // Adjust the value to move it upwards
            }}
            className="text-lg"
          >
            Started Early
          </p>

          <button
            style={{
              position: "absolute",
              width: "60px",
              height: "22px",
              left: "100px",
              top: "65px",
              fontFamily: "Calibri",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "11.3px",
              lineHeight: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center the text in the button
              backgroundColor: "#1883D3", // Add background color for the button
              color: "#FFFFFF",
              borderRadius: "5px", // Optional: Rounded edges for the button
              border: "none", // Remove default border
              cursor: "pointer", // Make it look clickable
            }}
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Footer Section */}
      {/* <div
  className="absolute bg-gradient-to-r from-[#1399FD] via-[#71B2FC] to-[#2C60D0] rounded-lg shadow-md"
  style={{
    width: "1600px", 
    height: "115px", 
    top: "650px", 
    left: "0px", 
    transform: "translateX(-5%)", 
  }}
>
  <div className="flex justify-center items-center h-full space-x-11 flex-wrap p-4 ">
   
    <img src={adani}  alt="Logo 1" className="h-[80px] w-[80px] rounded-full" />
    <img src={epin} alt="Logo 2" className="h-[80px] w-[80px] rounded-full" />
    <img src={Dixon} alt="Logo 3" className="h-[80px] w-[80px] rounded-full" />
    <img src={subros} alt="Logo 4" className="h-[80px] w-[80px] rounded-full" />
    <img src={nsdc} alt="nsdc" className="h-[80px] w-[80px] rounded-full" />
    <img src={global} alt="global" className="h-[80px] w-[80px] rounded-full" />
    <img src={isid} alt="isid" className="h-[80px] w-[80px] rounded-full" />
    <img src={capro} alt="capro" className="h-[80px] w-[80px] rounded-full" />
    <img src={turners} alt="turners" className="h-[80px] w-[80px] rounded-full" />
    <img src={nilm} alt="nilm" className="h-[80px] w-[80px] rounded-full" />
    <img src={ak} alt="ak" className="h-[80px] w-[80px] rounded-full" />
    <img src={padget} alt="padget" className="h-[80px] w-[80px] rounded-full" />


   
  </div>
   </div> */}

      <div
        className="absolute bg-gradient-to-r from-[#1399FD] via-[#71B2FC] to-[#2C60D0] rounded-lg shadow-md"
        style={{
          width: "100%", // Ensures full-width layout
          height: "auto", // Automatically adjusts height based on content
          top: "645px",
          left: "0",
        }}
      >
        <div className="flex flex-wrap justify-center items-center h-full space-x-4 space-y-1 md:space-x-6 lg:space-x-8 p-4">
          <img
            src={adani}
            alt="Logo 1"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={epin}
            alt="Logo 2"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={Dixon}
            alt="Logo 3"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={subros}
            alt="Logo 4"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={nsdc}
            alt="nsdc"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={global}
            alt="global"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={isid}
            alt="isid"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={capro}
            alt="capro"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={turners}
            alt="turners"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={nilm}
            alt="nilm"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={ak}
            alt="ak"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
          <img
            src={padget}
            alt="padget"
            className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full"
          />
        </div>
      </div>

      <Courses />
    </section>
  );
};

export default HeroSection;
