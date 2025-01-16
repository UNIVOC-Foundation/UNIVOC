import HomePage from '../Components/Home/HomePage';
import { Link } from "react-scroll"; // Import react-scroll

const Home = () => {
  return (
    <>
      <div id="home" className="app-container">
        <HomePage />
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="scroll-down"
        >
        </Link>
      </div>
    </>
  );
};

export default Home;
