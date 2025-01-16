import React from "react";

const JobCategories = () => {
  const categories = [
    { title: "Work from Home", jobs: 67, icon: "🏠", isNew: true },
    { title: "Accountant", jobs: 125, icon: "📊" },
    { title: "BPO / Customer Care", jobs: 2511, icon: "☎️" },
    { title: "Data Entry / Back Office", jobs: 982, icon: "💻" },
    { title: "Sales / Marketing", jobs: 550, icon: "📈" },
    { title: "Receptionist / Front Office", jobs: 47, icon: "💼" },
    { title: "Hospitality Executives", jobs: 10, icon: "🏨" },
    { title: "Delivery", jobs: 15, icon: "🚚" },
    { title: "Cook / Chef", jobs: 9, icon: "🍳" },
    { title: "Driver", jobs: 0, icon: "🚗" },
    { title: "Beauticians / Spa", jobs: 6, icon: "💆‍♀️" },
    { title: "Mechanic", jobs: 69, icon: "🔧", isNew: true },
    { title: "IT Software-Engineer", jobs: 2728, icon: "💻", isNew: true },
    { title: "Retail / Store Executive", jobs: 26, icon: "🛒", isNew: true },
  ];

  return (
    <div className="   bg-[linear-gradient(148.05deg,#C6D5F6_0%,#EAF0FF_48.94%,#DEE8FF_97.87%)] grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white border shadow-md p-4 rounded-lg flex flex-col items-center text-center"
        >
          <div className="text-4xl mb-2">{category.icon}</div>
          <h3 className="text-lg font-bold">{category.title}</h3>
          <p className="text-gray-500">{category.jobs} Active Jobs</p>
          {category.isNew && (
            <span className="text-xs text-white bg-red-500 px-2 py-1 rounded-full mt-2">
              New
            </span>
          )}
        </div>
      ))}
      <div className="flex items-center justify-center">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600">
          View All
        </button>
      </div>
    </div>
  );
};

export default JobCategories;
