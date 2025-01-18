// components/HowUnivocSection.jsx
import React from "react";

export default function HowUnivocSection() {
  return (
    <div className="text-center py-10">
      <h2 className="text-4xl font-bold text-black-600">How Univoc?</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 mt-8">
        <div className="card-how bg-white p-10 rounded-lg shadow-lg max-w-sm mx-auto rounded-xl transition-all duration-200 hover:shadow-md hover:scale-102">
          <img className="float-right" src="./src/images/cost.jpg" alt="" />
          <br />
          <br />
          <h3 className="para text-lg font-bold mb-4">
            1. How to <span className="text-blue-600">Variableize Costs</span>
          </h3>
          <p className="para text-gray-700 mb-4">
            Minimize Capital Expenditure (CapEx): Focus on reducing upfront
            investments tied to acquisition and growth by leveraging flexible,
            scalable solutions.
          </p>
          <p className="para text-gray-700">
            Shift Cost Structures: Transition from indirect costs to direct
            costs by outsourcing, pay-per-use models, or optimizing resources.
          </p>
        </div>
        <div className="card-how bg-white p-10 rounded-lg shadow-lg max-w-sm mx-auto rounded-xl transition-all duration-200 hover:shadow-md hover:scale-102">
          <img className="float-right" src="./src/images/scale.jpg" alt="" />
          <br />
          <br />
          <br />
          <h3 className="para text-lg font-bold mb-4">
            2. How to <span className="text-blue-600"> Fulfill at Scale</span>
          </h3>
          <p className="para text-gray-700 mb-4">
            Scalable Operations: Adjust capacity dynamically to meet fluctuating
            demands, scaling up or down as required.
          </p>
          <p className="para text-gray-700 mb-4">
            Customer-Centric Approach: Quickly adapt to new customer segments as
            they emerge, ensuring responsiveness to market changes.
          </p>
          <p className="para text-gray-700">
            Built-in Agility: Design processes and systems that emphasize
            operational flexibility and rapid deployment.
          </p>
        </div>
        <div className="card-how bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto rounded-xl transition-all duration-200 hover:shadow-md hover:scale-102">
          <img
            className="float-right"
            src="./src/images/productive.jpg"
            alt=""
          />
          <br />
          <br />
          <br />
          <h3 className="para flex-img text-lg font-bold mb-4">
            3. Why Are Your Workers so{" "}
            <span className="text-blue-600">Productive</span>?
          </h3>

          <p className="para text-gray-700 mb-4">
            Employee Happiness Equals Productivity: Happy employees deliver
            better outcomes, driven by positive morale and job satisfaction.
          </p>
          <p className="para text-gray-700 mb-4">
            Reliable Processes Build Trust: Dependable payroll systems,
            structured performance evaluations, and robust operational
            frameworks enhance workforce confidence.
          </p>
          <p className="para text-gray-700">
            Empowered Workforce: Investments in skill development, welfare
            programs, and comprehensive benefits lead to motivated and efficient
            employees.
          </p>
        </div>
      </div>
    </div>
  );
}
