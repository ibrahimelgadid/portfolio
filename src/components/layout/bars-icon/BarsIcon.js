import classNames from "classnames";
import "./BarsIcon.css";

const BarsIcon = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div
      className={classNames("bars-icon", { "bars-icon-op": openSidebar })}
      onClick={() => setOpenSidebar(!openSidebar)}
    >
      <div className={classNames({ "bars-icon-d-one": openSidebar })}></div>
      <div className={classNames({ "bars-icon-d-two": openSidebar })}></div>
      <div className={classNames({ "bars-icon-d-three": openSidebar })}></div>
    </div>
  );
};

export default BarsIcon;
