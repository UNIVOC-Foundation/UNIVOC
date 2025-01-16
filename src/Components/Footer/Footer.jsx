import logo1 from "../../assets/logo1.png";
import globe from "../../assets/globe.png";
import logo2 from "../../assets/logo2.png";
import { CiMail } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Description Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo1} alt="UNIV" className="h-8" />
              <img src={globe} alt="Globe" className="h-8" />
              <img src={logo2} alt="OC" className="h-8" />
            </div>
            <p className="text-gray-400 text-sm max-w-xl">
              We create industry-ready talent through advanced learning, skilling, and certification, leveraging Univoc's expertise, in partnership with universities, corporates, and governments.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <a href="/about" className="text-gray-400 hover:text-white">About us</a>
            <a href="/services" className="text-gray-400 hover:text-white">Services</a>
            <a href="/courses" className="text-gray-400 hover:text-white">Courses</a>
            <a href="/jobs" className="text-gray-400 hover:text-white">Jobs</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-start border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              <LuMapPin className="text-gray-400" />
              <span className="text-gray-400">Noida</span>
            </div>
            <div className="flex items-center gap-2">
              <CiMail className="text-gray-400" />
              <span className="text-gray-400">Info@univoc.co.in</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <BsTwitterX size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <IoLogoLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;