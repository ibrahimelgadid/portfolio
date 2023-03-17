import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import { Landing } from "../components/landing/Landing";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
