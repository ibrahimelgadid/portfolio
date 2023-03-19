import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skills.css";
import { motion } from "framer-motion";

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
                <motion.div
                  className="outer"
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    delay: 0,
                    stiffness: 80,
                  }}
                  viewport={{ once: true }}
                >
                  Reactjs
                </motion.div>
              </li>
              <li>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    delay: 0.2,
                    stiffness: 80,
                  }}
                  viewport={{ once: true }}
                  className="outer"
                >
                  Tailwind
                </motion.div>
              </li>
              <li>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    delay: 0.4,
                    stiffness: 80,
                  }}
                  viewport={{ once: true }}
                  className="outer"
                >
                  Bootstarp
                </motion.div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h2>Backend Technologies</h2>
            <ul className="skill">
              <li>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    delay: 0,
                    stiffness: 80,
                  }}
                  viewport={{ once: true }}
                  className="outer"
                >
                  Nodejs
                </motion.div>
              </li>
              <li>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{
                    duration: 2,
                    type: "spring",
                    delay: 0.2,
                    stiffness: 80,
                  }}
                  viewport={{ once: true }}
                  className="outer"
                >
                  Mongodb
                </motion.div>
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
