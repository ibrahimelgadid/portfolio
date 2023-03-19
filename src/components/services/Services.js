import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services">
      <div className="overlay"></div>
      <div className="container">
        <p>What i offer?</p>
        <h1>Services</h1>
        <div className="serv">
          <motion.h3
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {" "}
            Nodejs/Reactjs Websites
          </motion.h3>
          <ul>
            <motion.li
              className="services-skill-container"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faCheck} />
              Convert PSD and Figma to html css design.
            </motion.li>

            <motion.li
              className="services-skill-container"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.2,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faCheck} />
              Ecommerce Websites and admin dashboard with more features.
            </motion.li>

            <motion.li
              className="services-skill-container"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.4,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faCheck} />
              Gallary Websites upload and display you images.
            </motion.li>

            <motion.li
              className="services-skill-container"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.6,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faCheck} />
              Send mails and push notifications.
            </motion.li>

            <motion.li
              className="services-skill-container"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 1.8,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faCheck} />
              Chat room and realtime Websites
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
