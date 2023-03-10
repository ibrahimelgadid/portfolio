import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import { Landing } from "../components/landing/Landing";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
