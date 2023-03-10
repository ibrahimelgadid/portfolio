import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFile,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleUser,
  faContactBook,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="image">
        <img src="./hima.jpg" alt="" />
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="navIcon" size="xl" />
          <Link to="home">Home</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleUser} className="navIcon" size="xl" />

          <Link to="about">About</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faFile} className="navIcon" size="xl" />
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faBicycle} className="navIcon" size="xl" />
          <Link to="skills">Skills</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faContactBook} className="navIcon" size="xl" />
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
