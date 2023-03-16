import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import BarsIcon from "./components/layout/bars-icon/BarsIcon";
import { useState } from "react";
import Footer from "./components/layout/footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="portfolio">
      <Navbar openSidebar={openSidebar} />
      <BarsIcon openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
