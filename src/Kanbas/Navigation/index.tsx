import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div
        id="wd-kanbas-navigation"
        className="list-group rounded-0"
        style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: "100px", backgroundColor: "black" }}
      >
        <a
          id="wd-account-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0"
        >
          <img src="/NEU.png" width="75px" alt="NEU logo" />
        </a>
        <Link
          key="/Kanbas/Account"
          to="/Kanbas/Account"
          className={`list-group-item text-center border-0 bg-black ${
            pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"
          }`}
        >
          <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
          <br />
          Account
        </Link>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`list-group-item bg-black text-center border-0 ${
              pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"
            }`}
            style={{ padding: "1rem" }}
          >
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            {link.label}
          </Link>
        ))}
      </div>
      <div
        id="wd-content-area"
        style={{
          padding: "20px",
          width: "100px",
        }}
      >
      </div>
    </div>
  );
}
