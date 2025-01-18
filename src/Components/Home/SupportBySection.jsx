// components/SupportedBySection.jsx
import React from "react";

export default function SupportedBySection() {
  return (
    <section className="bg-white relative text-center py-12">
      <h2 className="text-blue-500 text-left text-4xl ml-20 font-bold">
        Supported by best
      </h2>
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
        <div className="card bg-blue-100 shadow-md rounded-xl p-6 w-80 transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-102">
          <img
            alt="Help Club Foundation logo"
            className="mx-auto mb-4"
            src="/src/images/image9.png"
          />
          <p className="para ml-5 text-gray-700">
            UNIVOC offers the best online solutions for recruitment, providing a
            robust platform to source quality candidates across any department.
            With its comprehensive technical and psychometric assessment tests,
            it ensures hiring the right talent seamlessly.
          </p>
          <div className="flex-hex gap-4">
            <div>
              <p className="text-support mt-4 text-black ">
                <b>Mr. Azeem Faisal</b>
                <br />
                Vice President of the Help Club Foundation
              </p>
            </div>
            <div>
              <img className="mt-6" src="./src/images/AZEEMFAISAL.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="card bg-blue-100 shadow-md rounded-xl p-6 w-80 transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-102">
          <img
            alt="Distil Assessments LLP logo"
            className="mx-auto mb-4"
            src="/src/images/image10.png"
          />
          <p className="para ml-5 text-gray-700">
            UNIVOC has been an invaluable partner in meeting our hiring
            requirements, delivering exceptional solutions tailored to our
            needs. Their professional approach, coupled with their ability to
            identify and assess top-tier talent, has significantly streamlined
            our recruitment process.
          </p>
          <div className="flex-hex justify-center gap-5">
            <div>
              <p className="text-support mt-4 text-black ">
                <b>Mr. Arjun Mishra</b>
                <br />
                Distil Assessments LLP
              </p>
            </div>
            <img className="mt-6" src="./src/images/ARJUN.jpg" alt="" />
          </div>
        </div>

        <div className="card bg-blue-100 shadow-md rounded-xl p-6 w-80 transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-102">
          <img
            alt="FedEx logo"
            className="mx-auto mb-4"
            src="/src/images/image8.png"
          />
          <p className="para ml-5 text-gray-700">
            We screen around 5,000 candidates each month to hire a significant
            number of quality professionals. With 80% of our online assessments
            now managed by Distil, the process has become more efficient and
            reliable.
          </p>
          <center>
            <div className="flex-hex justify-center gap-5">
              <div>
                <p className="text-support mt-4 text-black ">
                  <b>Mr. Danish Siddiqui</b>
                  <br />
                  Fedex
                </p>
              </div>
              <div>
                <img className="mt-6" src="./src/images/DANISH.jpg" alt="" />
              </div>
            </div>
          </center>
        </div>
      </div>
      <br />
      <br />
      <div className="absolute inset-0 bg-blue-500 z-0 mt-80 mb-0"></div>
    </section>
  );
}
