
import role1 from "../images/image 292-1.png";
import role2 from "../images/image 275.png";
import role3 from "../images/Frame 2300-1.png";

const JobRole = () => {
  const jobRoles = [
    "Full Stack Developer",
    ".NET Developer",
    "Back-End Developer",
    "Frontend Developer",
    "Software Engineer",
    "Web Application Developer",
    "UI/UX Developer",
    "API Developer",
    "Cloud Solutions Architect",
    "DevOps Engineer",
  ];

  const courses = [
    {
      title: "Full Stack MEAN Development",
      image: role1, // Replace with your image URLs
      rating: 4,
    },
    {
      title: "Full Stack MERN Development",
      image: role2, // Replace with your image URLs
      rating: 4,
    },
    {
      title: "Java Full Stack Web",
      image: role3, // Replace with your image URLs
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-8">
      {/* Job Roles Section */}
      <div className="flex-1">
        <h2 className="text-4xl font-semibold mb-10 border-b-2 border-black">
          Job Roles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 ml-10">
          {jobRoles.map((role, index) => (
            <p key={index} className="text-gray-700">
              • {role}
            </p>
          ))}
        </div>
      </div>

      {/* Related Courses Section */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-center mb-4">Related Courses</h2>
        <div className="h-0.5 bg-black mx-auto mt-2"></div>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 border-b-2 mb-5 border-black"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-16 h-16 rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-yellow-500 text-2xl flex  space-x-1">
                  {"★".repeat(course.rating)}{" "}
                  <span className="text-gray-400">
                    {"★".repeat(5 - course.rating)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobRole;
