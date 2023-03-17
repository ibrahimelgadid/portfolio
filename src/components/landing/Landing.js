import "./Landing.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookMessenger,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="overlay"></div>
      <div className="container">
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
        <div className="btns">
          <Link to={"/contact"}>Let's Talk</Link>
          <a href="/resume.pdf" download>
            Download CV
          </a>
        </div>

        <div className="social">
          <ul>
            <li>
              <Link target={"_blank"} to="mailto:ibrahimelgadid30@gmail.com">
                <FontAwesomeIcon size="xl" icon={faEnvelope} />
              </Link>
            </li>
            <li>
              <Link target={"_blank"} to="https://wa.me/+201024876339">
                <FontAwesomeIcon size="xl" icon={faWhatsapp} />
              </Link>
            </li>
            <li>
              <Link target={"_blank"} to="http://m.me/ibrahimelgadid">
                <FontAwesomeIcon size="xl" icon={faFacebookMessenger} />
              </Link>
            </li>
            <li>
              <Link
                target={"_blank"}
                to="https://www.linkedin.com/in/ibrahim-elgeded-233269132/"
              >
                <FontAwesomeIcon size="xl" icon={faLinkedin} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
