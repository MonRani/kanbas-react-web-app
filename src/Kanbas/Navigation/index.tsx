import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { BsPersonCircle, BsGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div
      id="wd-kanbas-navigation"
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-flex flex-column bg-black z-2"
      style={{ width: 120, height: "100vh" }}
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 d-flex justify-content-center align-items-center"
        style={{ height: 100 }}
      >
        <img src="/NEU.png" width="75px" alt="Northeastern University Logo" />
      </a>
      <div className="d-flex flex-column justify-content-between flex-grow-1">
        <NavLink
          id="wd-account-link"
          to="/Kanbas/Account"
          className={({ isActive }) =>
            isActive
              ? "list-group-item text-danger bg-white text-center border-0"
              : "list-group-item text-white bg-black text-center border-0"
          }
        >
          <div className="d-flex flex-column align-items-center">
            <BsPersonCircle className="fs-1" style={{ color: "white", fill: "grey" }} />
            <span>Account</span>
          </div>
        </NavLink>
        <NavLink
          id="wd-dashboard-link"
          to="/Kanbas/Dashboard"
          className={({ isActive }) =>
            isActive
              ? "list-group-item text-danger bg-white text-center border-0"
              : "list-group-item text-white bg-black text-center border-0"
          }
        >
          <div className="d-flex flex-column align-items-center">
            <AiOutlineDashboard className="fs-1 text-danger" />
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink
          id="wd-course-link"
          to="/Kanbas/Courses"
          className={({ isActive }) =>
            isActive
              ? "list-group-item text-danger bg-white text-center border-0"
              : "list-group-item text-white bg-black text-center border-0"
          }
        >
          <div className="d-flex flex-column align-items-center">
            <LiaBookSolid className="fs-1 text-danger" />
            <span>Courses</span>
          </div>
        </NavLink>
        <NavLink
          id="wd-calendar-link"
          to="/Kanbas/Calendar"
          className={({ isActive }) =>
            isActive
              ? "list-group-item text-danger bg-white text-center border-0"
              : "list-group-item text-white bg-black text-center border-0"
          }
        >
          <div className="d-flex flex-column align-items-center">
            <IoCalendarOutline className="fs-1 text-danger" />
            <span>Calendar</span>
          </div>
        </NavLink>
        <NavLink
          id="wd-inbox-link"
          to="/Kanbas/Inbox"
          className={({ isActive }) =>
            isActive
              ? "list-group-item text-danger bg-white text-center border-0"
              : "list-group-item text-white bg-black text-center border-0"
          }
        >
          <div className="d-flex flex-column align-items-center">
            <FaInbox className="fs-1 text-danger" />
            <span>Inbox</span>
          </div>
        </NavLink>
        <NavLink
          id="wd-labs-link"
          to="/Kanbas/Labs"
          className={({ isActive }) =>
            isActive
              ? "list-group-item text-danger bg-white text-center border-0"
              : "list-group-item text-white bg-black text-center border-0"
          }
        >
          <div className="d-flex flex-column align-items-center">
            <BsGear className="fs-1 text-danger" />
            <span>Labs</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}