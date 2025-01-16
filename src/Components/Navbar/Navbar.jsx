import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";
import "../Navbar/Navbar.css"; 
import logo1 from "../../assets/logo1.png";
import globe from "../../assets/globe.png";
import logo2 from "../../assets/logo2.png";

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white font-medium flex items-center bg-clip-text bg-gradient-to-r from-[#007EDB] via-[#FFFFFF] to-[#4E4E4E] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#007EDB] hover:via-[#FFFFFF] hover:to-[#4E4E4E] active:bg-gradient-to-r active:from-[#007EDB] active:via-[#FFFFFF] active:to-[#4E4E4E] lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-[#007EDB] lg:hover:via-[#FFFFFF] lg:hover:to-[#4E4E4E]"
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#1983D3] text-white font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Navigation */}
        <div className="h-[70px] flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/HomePage" className="flex items-center space-x-2">
            <img src={logo1} alt="Logo Part 1" className="h-8" />
           <img src={globe} alt="Rotating Globe" className="h-8 animate-rotateGlobe" />
            <img src={logo2} alt="Logo Part 2" className="h-8" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white flex flex-col justify-center items-center bg-black bg-opacity-10 backdrop-blur-md p-2 rounded"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/HomePage" onClick={handleNavLinkClick}>HOME</NavLink>
            <NavLink to="/about" onClick={handleNavLinkClick}>ABOUT US</NavLink>
            <NavLink to="/Services" onClick={handleNavLinkClick}>OUR SERVICES</NavLink>
            <NavLink to="/courses" onClick={handleNavLinkClick}>COURSES</NavLink>
            <NavLink to="/job-section" onClick={handleNavLinkClick}>JOB</NavLink>
            <NavLink to="/Contact" onClick={handleNavLinkClick}>CONTACT</NavLink>
          
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#1983D3] bg-opacity-50 backdrop-blur-md z-50 flex flex-col">
            <div className="lg:hidden space-y-2 mt-0 bg-black bg-opacity-20 backdrop-blur-md p-4 rounded relative">
              <button
                className="absolute top-2 right-2 text-white"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
              <NavLink to="/HomePage" onClick={handleNavLinkClick}>HOME</NavLink>
              <NavLink to="/about" onClick={handleNavLinkClick}>ABOUT US</NavLink>
              <NavLink to="/services" onClick={handleNavLinkClick}>OUR SERVICES</NavLink>
              <NavLink to="/courses" onClick={handleNavLinkClick}>COURSES</NavLink>
              <NavLink to="/job-section" onClick={handleNavLinkClick}>JOB</NavLink>
              <NavLink to="/Contact" onClick={handleNavLinkClick}>CONTACT</NavLink>
              <div className="flex items- space-x-4 border border-white p-2 rounded-lg shadow-lg">
                <NavLink to="/login" onClick={handleNavLinkClick}>LOGIN</NavLink>
                <FaUserCircle className="text-black-500 w-6 h-6" /> {/* Profile icon */}
                <NavLink to="/signup" onClick={handleNavLinkClick}>SIGN UP</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
