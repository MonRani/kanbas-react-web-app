import React from "react";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaBell } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="d-none d-xl-block p-3" style={{ width: "300px", marginLeft: '50px', zIndex: 100 }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-secondary w-100 text-start">
            <MdDoNotDisturbAlt className="me-2 fs-4" />
            Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-success w-100 text-start">
            <FaCheckCircle className="me-2 fs-4" />
            Publish
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-4" />
        Import Existing Content
      </button>
      <button className="btn btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-4" />
        Import from Commons
      </button>
      <button className="btn btn-secondary w-100 mt-1 text-start">
        <IoMdHome className="me-2 fs-4" />
        Choose Home Page
      </button>
      <button className="btn btn-secondary w-100 mt-1 text-start">
        <BsFillFileBarGraphFill className="me-2 fs-4" />
        View Course Screen
      </button>
      <button className="btn btn-secondary w-100 mt-1 text-start">
        <TfiAnnouncement className="me-2 fs-4" />
        New Announcement
      </button>
      <button className="btn btn-secondary w-100 mt-1 text-start">
        <BsFillFileBarGraphFill className="me-2 fs-4" />
        New Analytics
      </button>
      <button className="btn btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-4" />
        View Course Notifications
      </button>
    </div>
  );
}
