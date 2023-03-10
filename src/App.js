import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Outlet />
    </div>
  );
}
export default App;
