import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MdMenu, MdClose } from "react-icons/md"; // Menu and close icons
import { RiMenu3Line } from "react-icons/ri"; // Newly added icon
import "../Navbar/Navbar.css";
import logo1 from "../../assets/logo1.png";
import globe from "../../assets/globe.png";
import logo2 from "../../assets/logo2.png";

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white font-bold text-lg flex items-center bg-clip-text bg-gradient-to-r from-[#007EDB] via-[#FFFFFF] to-[#4E4E4E] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#007EDB] hover:via-[#FFFFFF] hover:to-[#4E4E4E]"
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
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#1983D3] text-white font-sans shadow-lg">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Navigation */}
        <div className="h-[70px] flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/HomePage" className="flex items-center space-x-2">
            <img src={logo1} alt="Logo Part 1" className="h-8" />
            <img
              src={globe}
              alt="Rotating Globe"
              className="h-8 animate-spin-slow"
            />
            <img src={logo2} alt="Logo Part 2" className="h-8" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white flex justify-center items-center p-2 rounded bg-black bg-opacity-20 backdrop-blur-md shadow-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <MdClose className="text-3xl" /> // Close icon
            ) : (
              <RiMenu3Line className="text-3xl" /> // Newly added icon
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/HomePage" onClick={handleNavLinkClick}>
              HOME
            </NavLink>
            <NavLink to="/about" onClick={handleNavLinkClick}>
              ABOUT US
            </NavLink>
            <NavLink to="/Services" onClick={handleNavLinkClick}>
              OUR SERVICES
            </NavLink>
            <NavLink to="/courses" onClick={handleNavLinkClick}>
              COURSES
            </NavLink>
            <NavLink to="/job-section" onClick={handleNavLinkClick}>
              JOB
            </NavLink>
            <NavLink to="/Contact" onClick={handleNavLinkClick}>
              CONTACT
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#1983D3] bg-opacity-95 backdrop-blur-md z-50 flex flex-col">
            <div className="lg:hidden space-y-6 p-8 relative">
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <MdClose />
              </button>
              <NavLink to="/HomePage" onClick={handleNavLinkClick}>
                HOME
              </NavLink>
              <NavLink to="/about" onClick={handleNavLinkClick}>
                ABOUT US
              </NavLink>
              <NavLink to="/services" onClick={handleNavLinkClick}>
                OUR SERVICES
              </NavLink>
              <NavLink to="/courses" onClick={handleNavLinkClick}>
                COURSES
              </NavLink>
              <NavLink to="/job-section" onClick={handleNavLinkClick}>
                JOB
              </NavLink>
              <NavLink to="/Contact" onClick={handleNavLinkClick}>
                CONTACT
              </NavLink>

              {/* Logo section in the mobile menu */}
              <div className="flex justify-center mt-8">
                <img src={logo1} alt="Logo Part 1" className="h-8" />
                <img
                  src={globe}
                  alt="Rotating Globe"
                  className="h-8 animate-spin-slow mx-4"
                />
                <img src={logo2} alt="Logo Part 2" className="h-8" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
