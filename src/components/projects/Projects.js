import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="overlay"></div>
      <div className="container">
        <h1>My Projects</h1>
        <div className="cards">
          <div className="card">
            <div className="ribbon">
              <div className="rib">Reactjs & Nodejs</div>
            </div>
            <div className="image">
              <img src="./imgs/Ecommerce-App.jpg" alt="" />
            </div>{" "}
            <h2>E-commerce App</h2>
            <div className="btns">
              <Link
                target={"_blank"}
                to={"https://mernstackrefactor.onrender.com"}
              >
                Live Show
              </Link>
              <Link
                target={"_blank"}
                to={"https://github.com/ibrahimelgadid/mernRefactor"}
              >
                Github
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="ribbon">
              <div className="rib">Reactjs</div>
            </div>
            <div className="image">
              <img src="./imgs/Resume.jpg" alt="" />
            </div>{" "}
            <h2>My CV</h2>
            <div className="btns">
              <Link
                target={"_blank"}
                to={"https://ibrahimelgadid-portfolio.vercel.app/"}
              >
                Live Show
              </Link>
              <Link
                target={"_blank"}
                to={"https://github.com/ibrahimelgadid/portfolio"}
              >
                Github
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="ribbon">
              <div className="rib">GitHub</div>
            </div>
            <div className="image">
              <img src="./imgs/Github.png" alt="" />
            </div>{" "}
            <h2>My Github</h2>
            <div className="btns">
              <Link target={"_blank"} to={"https://github.com/ibrahimelgadid"}>
                Live Show
              </Link>
              <Link target={"_blank"} to={"https://github.com/ibrahimelgadid"}>
                Github
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="ribbon">
              <div className="rib">Html & Css</div>
            </div>
            <div className="image">
              <img src="./imgs/temp1.png" alt="" />
            </div>{" "}
            <h2>Html css template one</h2>
            <div className="btns">
              <Link
                target={"_blank"}
                to={"https://ibrahimelgadid.github.io/html_css_template_3/"}
              >
                Live Show
              </Link>
              <Link
                target={"_blank"}
                to={"https://github.com/ibrahimelgadid/html_css_template_3"}
              >
                Github
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="ribbon">
              <div className="rib">Html & Css</div>
            </div>
            <div className="image">
              <img src="./imgs/temp1.png" alt="" />
            </div>{" "}
            <h2>Html css template two</h2>
            <div className="btns">
              <Link
                target={"_blank"}
                to={"https://ibrahimelgadid.github.io/html-css_temp/"}
              >
                Live Show
              </Link>
              <Link
                target={"_blank"}
                to={"https://github.com/ibrahimelgadid/html-css_temp"}
              >
                Github
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="ribbon">
              <div className="rib">Reactjs</div>
            </div>
            <div className="image">
              <img src="./imgs/weather.jpg" alt="" />
            </div>{" "}
            <h2>Weather forcast</h2>
            <div className="btns">
              <Link
                target={"_blank"}
                to={"https://react-weather-app-weld-one.vercel.app/"}
              >
                Live Show
              </Link>
              <Link
                target={"_blank"}
                to={"https://github.com/ibrahimelgadid/react-weather-app"}
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
