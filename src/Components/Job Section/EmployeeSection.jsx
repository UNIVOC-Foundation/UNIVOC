import { FaUserTie, FaGlobeAmericas, FaCheckCircle, FaStar, FaDollarSign } from 'react-icons/fa';
import interested from "../../assets/interested.png";
import ellipse from "../../assets/ellipse.png";
import vector from "../../assets/vector.png";
import Contact from '../Contact';

export default function EmployerSection() {
  return (
    <div className="min-h-screen bg-[linear-gradient(148.05deg,#C6D5F6_0%,#EAF0FF_48.94%,#DEE8FF_97.87%)] px-4 py-12 font-sans">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#333333] mb-2">
            Are You An Employer?
          </h1>
          <p className="text-[#666666] text-lg mb-6">
            Hire in 30 Mins
          </p>
          <button className="bg-[#0088FF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0077ee] transition-colors">
            Post Job
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-3xl font-bold text-[#333333] mb-2">1.5 Lakhs+</div>
            <div className="text-[#666666]">Registration Per month</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-3xl font-bold text-[#333333] mb-2">50 Lakhs+</div>
            <div className="text-[#666666]">Active Job Seekers</div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-6xl font-Pontano Sans">
              Why We Are <span className="text-[#0088FF]">Most Popular</span>
            </h2>
            <p className="text-[#666666] text-lg leading-relaxed">
              Trusted by top recruiters and job seekers, Univoc simplifies hiring with a seamless experience and unmatched opportunities
            </p>
          </div>

        {/* Right Content with Image and Floating Elements */}
        <div className="relative w-full h-full flex justify-center items-center">
  {/* Circular Background */}
  <div className="relative w-full h-full flex justify-center items-center">
  {/* Circular Background */}
  <div className="relative w-[450px] h-[450px] rounded-full bg-[#D3E0FF] flex justify-center items-center overflow-hidden">
    {/* Girl Image */}
    <img
      src="/logos/girl.png"
      alt="Professional with laptop"
      className="w-full h-full object-contain"
    />
  </div>
</div>
  {/* Floating Elements */}
  <div className="absolute top-2 right-16 bg-white rounded-lg shadow-md px-3 py-1 flex items-center gap-2">
    <FaStar className="text-[#0088FF]" />
    <span>Quality Job</span>
  </div>

  <div className="absolute top-1/4 left-4 bg-white rounded-lg shadow-md px-3 py-1 flex items-center gap-2">
    <FaCheckCircle className="text-[#0088FF]" />
    <span>100% Trusted</span>
  </div>

  <div className="absolute bottom-1/4 left-4 bg-white rounded-lg shadow-md px-3 py-1 flex items-center gap-2">
    <FaGlobeAmericas className="text-[#0088FF]" />
    <span>International Job</span>
  </div>

  <div className="absolute top-1/3 right-4 bg-white rounded-lg shadow-md px-3 py-1 flex items-center gap-2">
    <FaUserTie className="text-[#0088FF]" />
    <span>Top Companies</span>
  </div>

  <div className="absolute bottom-1/3 right-4 bg-white rounded-lg shadow-md px-3 py-1 flex items-center gap-2">
    <FaDollarSign className="text-[#0088FF]" />
    <span>No Extra Charge</span>
  </div>

  {/* Decorative Stars */}
  <div className="absolute top-20 left-40 w-4 h-4 bg-[#0088FF] rounded-full opacity-50"></div>
  <div className="absolute bottom-20 right-40 w-4 h-4 bg-[#0088FF] rounded-full opacity-50"></div>
</div>

        </div>
      </div>
      <br/>

      {/* For Interested Students Section */}
<section className="bg-blue-50 py-10">
  <div className="max-w-7xl mx-auto px-6 md:px-10">
    <h2 className="text-3xl font-semibold text-blue-900 text-left">
      For Interested <span className="text-blue-500">Students</span>
    </h2>
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-8">
      {/* Left Side Illustration */}
<div className="relative w-full md:w-1/2 flex justify-center items-center">
  {/* Background Elements */}
  <img
    src={ellipse}
    alt="Background Ellipse"
    className="absolute top-0 left-0 w-full max-w-lg opacity-20"
  />
  <img
    src={vector}
    alt="Background Vector"
    className="absolute bottom-0 right-0 w-full max-w-lg opacity-30"
  />

  {/* Main Illustration */}
  <img
    src={interested}
    alt="Student working illustration"
    className="relative z-10 max-w-full h-auto"
  />
</div>


      {/* Right Side Content */}
      <div className="mt-6 md:mt-0 md:w-1/2 md:pl-10 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-700 leading-relaxed">
          Get Matched To The Most Valuable Jobs! <br />
          Just Drop Your CV At{" "}
          <span className="text-blue-700 font-bold">UNIVOC</span>.
        </h3>
        <ul className="mt-4 space-y-3 text-gray-600 leading-loose">
          <li>📌 1M jobs site in India</li>
          <li>📌 Seamless Searching</li>
          <li>📌 Handpicked top companies</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 self-start">
          Post Your CV
        </button>
      </div>
    </div>
  </div>
</section>
<Contact/>
    </div>
  );
}
