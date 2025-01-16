import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faPills, faTshirt, faIndustry, faHeartbeat, faLaptopCode, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import BVocImage from '../../assets/BVoc.png';
import FlexiMouImage from '../../assets/FLEXI MOU.png';
import NatsImage from '../../assets/NATS.png';
import NapsImage from '../../assets/NAPS.png';
import MVocImage from '../../assets/M.Voc.png';
import DefaultImage from '../../assets/services.png';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(true);

  const servicesData = [
    {
      id: 1,
      title: "B.Voc/ D.Voc",
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The B.Voc (Bachelor of Vocation) is a skill-oriented degree program recognized by the UGC in India, aligned with NSQF Level 7, combining general education with hands-on training to meet industry demands. D.Voc (Diploma of Vocation), corresponding to NSQF Level 5, represents the first year of B.Voc and emphasizes practical skills, with 60-70% of coursework focused on hands-on experience through internships, on-the-job training, and industry collaborations. The program includes NSQF Level 5 D.Voc, Level 6 Advanced Certificate, and Level 7 B.Voc in various domains.</p>
          <h4 className="mt-4 font-semibold">Domains:</h4>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center"><FontAwesomeIcon icon={faHotel} className="mr-2 text-blue-500" /> Hotel Management</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faPills} className="mr-2 text-blue-500" /> Pharmacy</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faTshirt} className="mr-2 text-blue-500" /> Fashion Designing</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faIndustry} className="mr-2 text-blue-500" /> Manufacturing</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faHeartbeat} className="mr-2 text-blue-500" /> Paramedical</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faLaptopCode} className="mr-2 text-blue-500" /> Information Technology</li>
            <li className="flex items-center"><FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-blue-500" /> Event Management</li>
          </ul>
        </>
      ),
      imageUrl: BVocImage,
    },
    {
      id: 2,
      title: "FLEXI MOU",
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> B.Voc, or Bachelor of Vocation (NSQF Level 7), is a degree program recognized by the University Grants Commission (UGC) in India. Unlike traditional degrees, it emphasizes skill-based, hands-on training. The program integrates skill-oriented credits with general education, preparing students to meet industry requirements effectively.</p>
        </>
      ),
      imageUrl: FlexiMouImage,
    },
    {
      id: 3,
      title: "NATS",
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> D.Voc (Diploma of Vocation) aligns with NSQF Level 5 and represents the first year of a B.Voc program. Unlike conventional diplomas, D.Voc places a strong focus on skill training, with 60-70% of the coursework involving practical, hands-on experience. Key elements like internships, on-the-job training, and work-integrated learning are supported through strong industry partnerships.</p>
        </>
      ),
      imageUrl: NatsImage,
    },
    {
      id: 4,
      title: "NAPS",
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The “NAPS” Scheme is being governed by the Ministry of Skill Development & Entrepreneurship (MSDE), Government of India.</p>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> It is being regulated by the Directorate General of Training (DGT) & National Skill Development Corporation (NSDC).</p>
        </>
      ),
      imageUrl: NapsImage,
    },
    {
      id: 5,
      title: "M.Voc",
      description: (
        <>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> The M.Voc (Master of Vocation) is a UGC-recognized, postgraduate skill-based program aligned with NSQF Level 8 or higher. It focuses on advanced technical, managerial, and entrepreneurial skills through practical training, internships, and industry collaboration. Open to B.Voc or equivalent graduates, it prepares students for leadership roles, specialized careers, or entrepreneurship in fields like technology, healthcare, hospitality, and more, bridging the gap between education and industry needs.</p>
          <p><FontAwesomeIcon icon={faStar} className="mr-2 text-blue-500" /> It is being regulated by the Directorate General of Training (DGT) & National Skill Development Corporation (NSDC).</p>
        </>
      ),
      imageUrl: MVocImage,
    },
  ];

  const defaultImageUrl = DefaultImage;

  const toggleService = (id) => {
    setImageLoaded(false);
    setActiveService(activeService === id ? null : id);
  };

  const activeServiceData = servicesData.find(service => service.id === activeService);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#DCE7FF] relative">
      <div className="w-full text-center mt-4 md:mt-8">
        <h1 className="text-[30px] md:text-[60px] lg:text-[70px] font-semibold leading-tight md:leading-[80px] lg:leading-[108.92px] underline underline-offset-4 decoration-skip-ink-none text-transparent bg-clip-text bg-gradient-to-r from-[#1983D3] to-black">
          Services
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-8 px-4 md:px-16">
        <div className="flex flex-col items-center justify-start w-full md:w-[35%] md:mr-8"> {/* Adjusted width */}
          <img
            src={activeServiceData ? activeServiceData.imageUrl : defaultImageUrl}
            alt={activeServiceData ? activeServiceData.title : "Default"}
            className={`w-[90%] md:w-full h-auto rounded-lg shadow-md transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full md:w-[55%] mt-6 md:mt-0 p-4 min-w-[300px]"> {/* Adjusted width */}
          <div className="w-full h-auto bg-white rounded-t-[30px] rounded-b-[30px] shadow-md border border-[#1983D3]">
            {servicesData.map((service, index) => (
              <div key={service.id} className={`border-t border-[#1983D3] ${index === 0 ? 'rounded-t-[30px]' : ''} ${index === servicesData.length - 1 && activeService !== service.id ? 'rounded-b-[30px]' : ''}`}>
                <div className="p-11 cursor-pointer flex items-center justify-between" onClick={() => toggleService(service.id)}>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#1983D3] mr-7"></div>
                    <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                  </div>
                  <button className={`text-xl md:text-2xl font-bold transform transition-transform duration-300 ${activeService === service.id ? 'rotate-180' : ''}`}>
                    {activeService === service.id ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                  </button>
                </div>
                {activeService === service.id && (
                  <div className={`p-3 bg-gray-100 ${index === servicesData.length - 1 ? 'rounded-b-[30px]' : ''}`}>
                    <p className="text-lg mb-3">{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
