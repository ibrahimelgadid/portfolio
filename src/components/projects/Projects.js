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
              <img src="./imgs/c-v.jpg" alt="" />
            </div>
            <h2>Project one</h2>
            <div className="btns">
              <Link to={""}>Live Show</Link>
              <Link to={""}>Github</Link>
            </div>
          </div>
          <div className="card">
            <div className="ribbon">
              <div className="rib">Reactjs</div>
            </div>
            <div className="image">
              <img src="./imgs/avatar-03.png" alt="" />
            </div>{" "}
            <h2>Project one</h2>
            <div className="btns">
              <Link to={""}>Live Show</Link>
              <Link to={""}>Github</Link>
            </div>
          </div>
          <div className="card">
            <div className="ribbon">
              <div className="rib">Reactjs</div>
            </div>
            <div className="image">
              <img src="./imgs/avatar-04.png" alt="" />
            </div>{" "}
            <h2>Project one</h2>
            <div className="btns">
              <Link to={""}>Live Show</Link>
              <Link to={""}>Github</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
