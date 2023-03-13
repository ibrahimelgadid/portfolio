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
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const Navbar = ({ openSidebar }) => {
  return (
    <nav className={classNames({ "nav-top": openSidebar })}>
      <div className="image">
        <img src="./hima.jpg" alt="" />
      </div>
      <ul>
        <li>
          <NavLink to="/">
            <FontAwesomeIcon icon={faEnvelope} className="navIcon" size="lg" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about">
            {" "}
            <FontAwesomeIcon
              icon={faCircleUser}
              className="navIcon"
              size="lg"
            />
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="projects">
            {" "}
            <FontAwesomeIcon icon={faFile} className="navIcon" size="lg" />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="skills">
            {" "}
            <FontAwesomeIcon icon={faBicycle} className="navIcon" size="lg" />
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="contact">
            {" "}
            <FontAwesomeIcon
              icon={faContactBook}
              className="navIcon"
              size="lg"
            />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
