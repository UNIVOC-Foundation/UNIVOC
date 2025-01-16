import  { useState } from "react";
import { Search, Send, Menu, X } from "lucide-react";
import logo from "../images/logo.png";
import boy from "../images/image 306.png";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen pt-5">
      <header className="bg-[#dbe7f8] shadow-sm border rounded-2xl border-blue-500 container mx-auto bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation for desktop/tablet */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex items-center space-x-8 mt-4 md:mt-0`}
          >
            <div className="relative">
              <select className="appearance-none bg-white border rounded-full border-blue-500 bg-transparent px-8 py-2 text-blue-600 focus:outline-none">
                <option>Explore</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative ">
              <input
                type="text"
                placeholder="What do you want to learn"
                className="pl-10 pr-24 py-2  border rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute left-3  top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <button className="text-gray-600 bg-white border border-blue-500 px-4 py-1 rounded-full ">
              Sign in
            </button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700">
              Register for free
            </button>
          </div>
        </div>
        <main className="container mx-auto px-4 py-8 bg-cover bg-center bg-no-repeat">
          <div className="text-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center bg-[url('./images/frame.png')] bg-cover bg-center">
            <div className="flex flex-col space-y-4 mb-4 md:space-y-2">
              <div className="flex items-center space-x-4 text-md text-white underline mb-4">
                <span>Home</span>
                <span>Integrated Degree Programs</span>
                <span>Dot Net Full Stack</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 mr-[50px]">
                  Dot Net Full Stack
                </h1>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="ml-2">(4.5)</span>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-1/3">
              <img src={boy} alt="Course Image" className="rounded-lg w-full" />
            </div>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Home;
