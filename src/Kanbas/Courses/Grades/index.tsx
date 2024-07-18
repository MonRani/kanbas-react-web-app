import React from 'react';
import { BsGearFill } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5'; // Correct import for search icon
import { FaFileImport, FaFileExport } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import * as db from "../../Database";

const Grades = () => {
  return (
    <div className="p-3">
      {/* Top Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Right justified buttons */}
        <div className="d-flex align-items-center ms-auto">
          <button className="btn btn-light me-2">
            <FaFileImport /> Import
          </button>
          <button className="btn btn-light me-2">
            <FaFileExport /> Export
          </button>
          <button className="btn btn-light">
            <BsGearFill className="me-1" />
          </button>
        </div>
      </div>

      {/* Search dropdowns */}
      <div className="d-flex mb-3">
        {/* Search Students dropdown */}
        <div className="dropdown me-2">
          <label htmlFor="searchStudents" className="fw-bold">Student Names</label>
          <div className="input-group">
            <span className="input-group-text"><IoSearch /></span>
            <input type="text" className="form-control" id="searchStudents" placeholder="Search Students" />
          </div>
        </div>

        {/* Search Assignments dropdown */}
        <div className="dropdown">
          <label htmlFor="searchAssignments" className="fw-bold">Assignment Names</label>
          <div className="input-group">
            <span className="input-group-text"><IoSearch /></span>
            <input type="text" className="form-control" id="searchAssignments" placeholder="Search Assignments" />
          </div>
        </div>
      </div>

      {/* Apply Filters button */}
      <div className="mb-3">
        <button className="btn btn-outline-secondary btn-static">
          <CiFilter className="text-black" /> Apply Filters
        </button>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover text-center">
          <thead>
            <tr>
              <th style={{ fontWeight: 'bold' }}>Student Name</th>
              <th>A1 SETUP<br />Out of 100</th>
              <th>A2 HTML<br />Out of 100</th>
              <th>A3 CSS<br />Out of 100</th>
              <th>A4 BOOTSTRAP<br />Out of 100</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td style={{ color: 'red', verticalAlign: 'middle' }}>Jane Adams</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>96.67%</td>
              <td style={{ verticalAlign: 'middle' }}>92.18%</td>
              <td style={{ verticalAlign: 'middle' }}>66.22%</td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td style={{ color: 'red', verticalAlign: 'middle' }}>Christina Allen</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td style={{ color: 'red', verticalAlign: 'middle' }}>Samreen Ansari</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
            </tr>
            {/* Row 4 */}
            <tr>
              <td style={{ color: 'red', verticalAlign: 'middle' }}>Han Bao</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>88.03%</td>
              <td style={{ verticalAlign: 'middle' }}>98.99%</td>
            </tr>
            {/* Row 5 */}
            <tr>
              <td style={{ color: 'red', verticalAlign: 'middle' }}>Mahi Sai Srinivas Bobbili</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>96.67%</td>
              <td style={{ verticalAlign: 'middle' }}>98.37%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
            </tr>
            {/* Row 6 */}
            <tr>
              <td style={{ color: 'red', verticalAlign: 'middle' }}>Siran Cao</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
              <td style={{ verticalAlign: 'middle' }}>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;