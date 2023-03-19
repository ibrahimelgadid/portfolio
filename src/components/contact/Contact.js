import {
  faFacebookMessenger,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target.name.value !== "" &&
      e.target.email.value !== "" &&
      e.target.tel.value !== "" &&
      e.target.message.value !== ""
    ) {
      setLoading(true);

      emailjs
        .sendForm(
          "service_jwnaxfs",
          "template_d3y37on",
          form.current,
          "qgUEFzAnZ6B24hBtM"
        )
        .then(
          (result) => {
            toast.success("Message sent successfully");
          },
          (error) => {
            toast.error("Failed to send email");
          }
        )
        .finally(() => {
          e.target.reset();
          setLoading(false);
        });
    } else {
      toast.error("All fields are required");
    }
  };
  return (
    <div className="contact">
      <div className="overlay"></div>
      <div className="container">
        <p>Get In Touch</p>
        <h1>Contact</h1>
        <div className="info">
          <div className="cards">
            <div className="card">
              <FontAwesomeIcon size="xl" icon={faFacebookMessenger} />
              <h3>Messenger</h3>
              <span>
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href={"https://m.me/ibrahimelgadid"}
                >
                  ibrahimelgadid
                </a>
              </span>
            </div>
            <div className="card">
              <FontAwesomeIcon size="xl" icon={faEnvelope} />
              <h3>Gmail</h3>
              <span>
                <a
                  rel={"noreferrer"}
                  href="mailto:ibrahimelgadid30@gmail.com"
                  target={"_blank"}
                >
                  {" "}
                  ibrahimelgadid30@gmail.com
                </a>
              </span>
            </div>
            <div className="card">
              <FontAwesomeIcon size="xl" icon={faWhatsapp} />
              <h3>WhatsApp</h3>
              <span>
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href="https://wa.me/+201024876339"
                >
                  +201024876339
                </a>
              </span>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="inp-group">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="Your full name"
                required=""
              />
              <label htmlFor="name"></label>
            </div>
            <div className="inp-group">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email"
                required=""
              />
              <label htmlFor="email"></label>
            </div>
            <div className="inp-group">
              <input
                type="tel"
                name="tel"
                id="tel"
                autoComplete="off"
                placeholder="Phone number"
                required=""
              />
              <label htmlFor="tel"></label>
            </div>
            <div className="inp-group">
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                required=""
                dir="auto"
              ></textarea>
              <label htmlFor="message"></label>
            </div>
            <button type="submit" className="primary-btn">
              {loading ? "Loading..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
