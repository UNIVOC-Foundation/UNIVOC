import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHandshake, faTools, faBriefcase, faChalkboardTeacher, faStar } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
    {
      id: 1,
      title: "B.Voc/ D.Voc",
      icon: faGraduationCap,
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The B.Voc (Bachelor of Vocation) is a skill-oriented degree program recognized by the UGC in India, aligned with NSQF Level 7, combining general education with hands-on training to meet industry demands. D.Voc (Diploma of Vocation), corresponding to NSQF Level 5, represents the first year of B.Voc and emphasizes practical skills, with 60-70% of coursework focused on hands-on experience through internships, on-the-job training, and industry collaborations.</p>
          <h4 className="mt-4 font-semibold">Key Benefits:</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Industry-Relevant Skills</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Hands-On Training</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Immediate Employment Opportunities</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Flexibility in Career Paths</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Strong Industry Collaborations</li>
          </ul>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "FLEXI MOU",
      icon: faHandshake,
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The FLEXI MOU program offers flexible learning and work-integrated education to students. By partnering with various industries, it allows students to gain real-world experience while pursuing their academic studies.</p>
          <h4 className="mt-4 font-semibold">Key Benefits:</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Gain practical work experience while studying</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Flexible learning schedule</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Increased employability</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Networking opportunities with industry professionals</li>
          </ul>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    },
    {
      id: 3,
      title: "NATS",
      icon: faTools,
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The National Apprenticeship Training Scheme (NATS) enhances student employability by providing practical training in various fields. Students are trained by industry experts and gain valuable work experience.</p>
          <h4 className="mt-4 font-semibold">What Does NATS Offer?</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Hands-on training with industry professionals</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Exposure to real-world industry challenges</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Financial assistance for apprenticeship training</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Certification upon successful completion</li>
          </ul>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "NAPS",
      icon: faBriefcase,
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The National Apprenticeship Promotion Scheme (NAPS) promotes apprenticeship training across India, focusing on skill development and employment opportunities.</p>
          <h4 className="mt-4 font-semibold">Why NAPS?</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Financial incentives for employers and apprentices</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Encourages industry-academic collaborations</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Empowers apprentices with financial stability</li>
          </ul>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      title: "M.Voc",
      icon: faChalkboardTeacher,
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The M.Voc (Master of Vocation) program is an advanced, postgraduate course for individuals who wish to specialize in specific industries. It focuses on practical training and industry collaborations.</p>
          <h4 className="mt-4 font-semibold">Why M.Voc?</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Specialized training to develop expertise</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Opportunities for higher-level roles</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> Strong industry connections</li>
          </ul>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DCE7FF] to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-[#1983D3] to-black text-transparent bg-clip-text">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2">
              <img
                src={service.imageUrl || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={service.icon} className="text-3xl text-[#1983D3] mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full py-2 px-4 bg-[#1983D3] text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  {activeService === service.id ? 'Hide Details' : 'Show Details'}
                </button>
                {activeService === service.id && (
                  <div className="mt-4 text-gray-600 text-sm animate-fadeIn">
                    {service.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

