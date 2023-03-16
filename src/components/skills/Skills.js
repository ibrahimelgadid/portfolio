import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills">
      <div className="overlay"></div>
      <div className="container">
        <p>What Skills I Have?</p>
        <h1>Skills</h1>
        <div className="cards">
          <div className="card">
            <h2>Frontend Technologies</h2>
            <ul className="skill">
              <li>
                <div style={{ width: "85%" }} className="outer">
                  Reactjs
                </div>
              </li>
              <li>
                <div style={{ width: "90%" }} className="outer">
                  Tailwind
                </div>
              </li>
              <li>
                <div style={{ width: "85%" }} className="outer">
                  Bootstarp
                </div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h2>Backend Technologies</h2>
            <ul className="skill">
              <li>
                <div style={{ width: "90%" }} className="outer">
                  Nodejs
                </div>
              </li>
              <li>
                <div style={{ width: "85%" }} className="outer">
                  Mongodb
                </div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h2>I have more skills:</h2>
            <div className="more-skills">
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
                Vanilla js
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
                Typescript
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
                Nextjs
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
                PHP/Laravel
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
                Mysql
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
                Problem Solving
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
                Git & GitHub
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
