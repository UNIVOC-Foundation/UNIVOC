import { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaGraduationCap,
} from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted", {
      name,
      email,
      password,
      confirmPassword,
      courseCategory,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-Blue flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-Blue shadow-lg rounded-lg p-8 space-y-6">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Join Our Courses
            </span>
          </h2>
          <p className="mt-2 text-center text-base text-gray-600">
            Create your account and start learning
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-t-lg relative block w-full px-3 py-4 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-4 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full px-3 py-4 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 focus:outline-none"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="h-6 w-6" />
                    ) : (
                      <FaEye className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full px-3 py-4 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-400 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="h-6 w-6" />
                    ) : (
                      <FaEye className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="course-category" className="sr-only">
                Course Category
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaGraduationCap className="h-6 w-6 text-gray-400" />
                </div>
                <select
                  id="course-category"
                  name="course-category"
                  required
                  className="appearance-none rounded-b-lg relative block w-full px-3 py-4 pl-12 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-lg"
                  value={courseCategory}
                  onChange={(e) => setCourseCategory(e.target.value)}
                >
                  <option value="">Select Course Category</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-lg">
              <span className="px-2 bg-white text-gray-500">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-lg font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Google</span>
                <FaGoogle className="w-6 h-6" />
              </a>
            </div>

            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-lg font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Facebook</span>
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>

            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-lg font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Twitter</span>
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
