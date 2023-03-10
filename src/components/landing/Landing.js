import "./Landing.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="overlay"></div>
      <div className="text">
        <p>Welcome, </p>
        <Typewriter
          options={{
            loop: true,
            cursorClassName: "typing",
            wrapperClassName: "typing",
            delay: 150,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm Ibrahim Elgeded")
              .pauseFor(1000)
              .deleteChars(15)
              .typeString("Nodejs Developer")
              .pauseFor(1000)
              .deleteChars(16)
              .typeString("Reactjs Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Download my CV")
              .start();
          }}
        />
      </div>
      <div className="details">
        <button>Let's Talk</button>
        <button>Download CV</button>
      </div>

      <div className="social">
        <ul>
          <li>
            <Link to="">
              <FontAwesomeIcon size="xl" icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link to="">
              <FontAwesomeIcon size="xl" icon={faWhatsapp} />
            </Link>
          </li>
          <li>
            <Link to="">
              <FontAwesomeIcon size="xl" icon={faFacebookMessenger} />
            </Link>
          </li>
          <li>
            <Link to="">
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
