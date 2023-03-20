import { Link } from "react-router-dom";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <div className="overlay"></div>
      <div className="container">
        <div className="head">
          <p>Get more about me</p>
          <h1>About Me</h1>
        </div>

        <div className="content">
          <motion.div
            animate={{ scale: 1.01 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 120,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            viewport={{ once: true }}
            className="image"
          >
            <img src="./imgs/avatar-05.png" alt="" />
          </motion.div>
          <div className="info">
            <p>
              {" "}
              My name's Ibrahim Elgadid MERN stack developer. I've about one
              year experience with JavaScript, nodejs and reactjs
            </p>

            <Link to="/contact">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
