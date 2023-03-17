import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="overlay"></div>
      <div className="container">
        <p>What i offer?</p>
        <h1>Services</h1>
        <div className="serv">
          <h3> Nodejs/Reactjs Websites</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Convert PSD and Figma to html css design.
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              Ecommerce Websites and admin dashboard with more features.
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              Gallary Websites upload and display you images.
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              Send mails and push notifications.
            </li>

            <li>
              <FontAwesomeIcon icon={faCheck} />
              Chat room and realtime Websites
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
