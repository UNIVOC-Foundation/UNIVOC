
import bouframe from "../images/Frame 2300.png";

const Program = () => {
  return (
    <div className="p-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 border-b-2 border-black pb-1">
            About the Program
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            The Dot Net Full Stack course covers both front-end and back-end
            development using the .NET framework. The curriculum includes
            learning C# for back-end logic, ASP.NET for building dynamic web
            applications, and Entity Framework for data management. On the
            front-end, students will master HTML, CSS, JavaScript, and
            frameworks like Angular or React. Key topics include database
            management with SQL Server, web APIs, MVC architecture, and
            deployment techniques. The course also focuses on version control
            using Git, testing strategies, and debugging practices, ensuring
            students gain comprehensive knowledge for building and deploying
            modern web applications.
          </p>
          <div className="mt-10 h-[250px] w-full md:w-[500px] rounded-lg shadow-lg p-8 mx-auto">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-black">
              Courses
            </h2>
            <div className="flex flex-col gap-2">
              <select className="bg-gray-100 p-2 rounded-md border">
                <option>Technical Skills</option>
              </select>
              <select className="bg-gray-100 p-2 rounded-md border">
                <option>Functional Skills</option>
              </select>
              <select className="bg-gray-100 p-2 rounded-md border">
                <option>Behavioral Skills</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-3xl h-auto md:h-[470px] w-full md:w-[350px] shadow-xl shadow-blue-400 p-8 flex flex-col">
          <img src={bouframe} alt="Student" className="rounded-md mb-6" />
          <button className="bg-blue-500 text-white px-5 py-2 rounded-md mb-6">
            Start Learning
          </button>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex justify-between w-full border-b-2 border-black pb-1">
              <p className="font-bold">Duration</p>
              <p>45hrs</p>
            </div>
            <div className="flex justify-between w-full border-b-2 border-black pb-1">
              <p className="font-bold">Language</p>
              <p>English</p>
            </div>
            <div className="flex justify-between w-full border-b-2 border-black pb-1">
              <p className="font-bold">Total Credits</p>
              <p>30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
