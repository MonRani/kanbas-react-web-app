import React from 'react';
import { useParams } from 'react-router';
import { BsGripVertical, BsPencilSquare, BsSearch, BsPlusLg } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import AssignmentControlButtons from './AssignmentControlButtons';
import GreenCheckmark from './GreenCheckmark';
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative w-50">
          <input
            id="wd-search-assignment"
            className="form-control ps-5 rounded-pill"
            placeholder="Search..."
            style={{ paddingLeft: "2.5rem" }}
          />
          <BsSearch className="position-absolute top-50 start-0 translate-middle-y ms-2 fs-5" />
        </div>
        <div className="ms-auto">
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>

      <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-black me-2" viewBox="0 0 16 16">
              <path d="M8 10.586 1.707 4.293A1 1 0 0 1 2.12 2.88L8 8.707l5.88-5.88a1 1 0 1 1 1.415 1.415L8 10.586z"/>
            </svg>
            <span className="fw-bold">ASSIGNMENTS</span>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <div className="rounded-pill text-black px-2 me-3" style={{ backgroundColor: '#d3d3d3', border: '1px solid black', color: 'black' }}>
              40% of total
            </div>
            <BsPlusLg className="text-black fs-5" />
            <IoEllipsisVertical className="fs-5 ms-2" />
          </div>
        </div>
        <ul className="wd-lessons list-group rounded-0">
          {assignments.map((assignment) => (
            <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-5" />
                <BsPencilSquare className="text-success me-2 fs-7" />
                <div>
                  <a className="wd-assignment-link text-black" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} style={{ textDecoration: 'none' }}>
                    <span className="fw-bold">{assignment.title}</span>
                  </a>
                  <br />
                  <span className="fw-bold" style={{ fontSize: '20px' }}>Assignment ID:</span> {assignment._id}
                </div>
              </div>
              <div className="ms-auto d-flex align-items-center">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-5 ms-2" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
