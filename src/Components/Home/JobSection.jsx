import React from "react";

const jobRoles = [
  { title: "Work From Home", image: "./src/images/wfh.png" },
  { title: "Accountant", image: "./src/images/Account.png" },
  { title: "BPO / Customer Care", image: "./src/images/bpo.jpg" },
  { title: "Data Entry / Back Office", image: "./src/images/data.jpg" },
  { title: "Sales / Marketing Executive", image: "./src/images/sales.jpg" },
  { title: "Receptionist / Front Office", image: "./src/images/office.jpg" },
  { title: "Hospitality Executives", image: "./src/images/hospitality.jpg" },
  { title: "Delivery", image: "./src/images/delivery.jpg" },
  { title: "Cook/Chef", image: "./src/images/cook.jpg" },
  { title: "Driver", image: "./src/images/driver.png" },
  { title: "Beauticians / Spa", image: "./src/images/spa.jpg" },
  { title: "Mechanic", image: "./src/images/mechanic.jpg" },
  { title: "IT-Software-Engineer", image: "./src/images/it.jpg" },
  { title: "Retail / Store Executive", image: "./src/images/retail.jpg" },
];

export default function JobSection() {
  return (
    <section id="Job" className="bg-blue-100 justify-center py-12 px-2">
      <h1 className="text-3xl font-bold text-blue-600 mb-9 ml-30 pt-10 ml-20">
        Top Job Roles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ml-20 mr-20 gap-4">
        {jobRoles.map((role, index) => (
          <div
            key={index}
            className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <img
              alt={role.title}
              className="mb-2"
              src={role.image || "/placeholder.svg"}
            />
            <div className="flex items-center mb-2">
              <span className="font-semibold">{role.title}</span>
              <span className="bg-red-500 text-white text-xs font-bold ml-2 px-2 py-1 rounded">
                New
              </span>
            </div>
            <p className="text-gray-600">54 Active Jobs</p>
          </div>
        ))}
        <div className="box rounded-xl bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:scale-105">
          <img alt="View All" className="mb-2" src="./src/images/view.png" />
          <div className="flex items-center mb-2">
            <span className="font-semibold font-underlined">View All</span>
          </div>
        </div>
      </div>
    </section>
  );
}
