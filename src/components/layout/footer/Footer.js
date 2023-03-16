import {
  faFacebook,
  faFacebookMessenger,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <p>
        Copyright @ 2023 Ibrahim Elgaded
        <br />
        Designed by <b>Ibrahim Elgeded</b>
      </p>
      <ul className="links">
        <li>
          <Link to={""}>
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link to={""}>
            <FontAwesomeIcon size="lg" icon={faFacebook} />
          </Link>
        </li>
        <li>
          <Link to={""}>
            <FontAwesomeIcon size="lg" icon={faFacebookMessenger} />
          </Link>
        </li>
        <li>
          <Link to={""}>
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
          </Link>
        </li>
        <li>
          <Link to={""}>
            <FontAwesomeIcon size="lg" icon={faWhatsapp} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
