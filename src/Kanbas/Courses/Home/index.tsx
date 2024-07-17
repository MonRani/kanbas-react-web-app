import React from "react";
import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <Modules />
      </div>
      <div className="d-none d-xl-block ms-3">
        <CourseStatus />
      </div>
    </div>
  );
}
