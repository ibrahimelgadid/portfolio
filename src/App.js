import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import BarsIcon from "./components/layout/bars-icon/BarsIcon";
import { useState } from "react";
function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="portfolio">
      <Navbar openSidebar={openSidebar} />
      <BarsIcon openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <Outlet />
    </div>
  );
}
export default App;
