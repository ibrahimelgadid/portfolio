import "./Landing.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faFacebookMessenger,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
        <button>
          <a href="/resume.pdf" download>
            Download CV
          </a>
        </button>
      </div>

      <div className="social">
        <ul>
          <li>
            <Link target={"_blank"} to="mailto:ibrahimelgadid30@gmail.com">
              <FontAwesomeIcon size="xl" icon={faEnvelope} />
            </Link>
          </li>
          <li>
            <Link to="https://api.whatsapp.com/send/?phone=00201024876339&text=helloimhere&type=phone_number&app_absent=0">
              <FontAwesomeIcon size="xl" icon={faWhatsapp} />
            </Link>
          </li>
          <li>
            <Link to="http://m.me/ibrahimelgadid" target={"_blank"}>
              <FontAwesomeIcon size="xl" icon={faFacebookMessenger} />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/ibrahim-elgeded-233269132/"
              target={"_blank"}
            >
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
