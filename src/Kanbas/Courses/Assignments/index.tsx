import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { BsGripVertical, BsPencilSquare, BsSearch, BsPlusLg, BsTrash } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';
import { fetchAllAssignments, deleteAssignment } from './client';

export default function Assignments() {
  const { cid } = useParams<{ cid?: string }>();
  const [confirmDelete, setConfirmDelete] = useState<{ id: string | null; visible: boolean }>({ id: null, visible: false });
  const [assignments, setAssignments] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAssignments = async () => {
      if (cid) {
        const fetchedAssignments = await fetchAllAssignments(cid);
        setAssignments(fetchedAssignments);
      }
    };

    loadAssignments();
  }, [cid]);

  const handleAddAssignment = () => {
    if (cid) {
      navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
    }
  };

  const handleEditAssignment = (assignmentId: string) => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${assignmentId}`);
  };

  const handleDelete = (assignmentId: string) => {
    setConfirmDelete({ id: assignmentId, visible: true });
  };

  const confirmDeletion = async () => {
    if (confirmDelete.id) {
      await deleteAssignment(confirmDelete.id);
      setAssignments(assignments.filter(a => a._id !== confirmDelete.id));
    }
    setConfirmDelete({ id: null, visible: false });
  };

  const cancelDeletion = () => {
    setConfirmDelete({ id: null, visible: false });
  };

  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative w-50">
          <input
            id="wd-search-assignment"
            className="form-control ps-5 rounded-pill"
            placeholder="Search..."
            style={{ paddingLeft: '2.5rem' }}
          />
          <BsSearch className="position-absolute top-50 start-0 translate-middle-y ms-2 fs-5" />
        </div>
        <div className="ms-auto">
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger" onClick={handleAddAssignment}>
            + Assignment
          </button>
        </div>
      </div>

      <div className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-5" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill text-black me-2" viewBox="0 0 16 16">
              <path d="M8 10.586L1.707 4.293A1 1 0 012.12 2.88L8 8.707l5.88-5.88a1 1 0 111.415 1.415L8 10.586z" />
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
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-5" />
                  <BsPencilSquare className="text-success me-2 fs-7" />
                  <div>
                    <a
                      className="wd-assignment-link text-black"
                      onClick={() => handleEditAssignment(assignment._id)}
                      style={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                      <span className="fw-bold">{assignment.title}</span>
                    </a>
                    <br />
                    <span className="fw-bold" style={{ fontSize: '20px' }}>Assignment ID:</span> {assignment._id}
                  </div>
                </div>
                <div className="ms-auto d-flex align-items-center">
                  <GreenCheckmark />
                  <BsTrash
                    className="text-danger ms-2 fs-5"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDelete(assignment._id)}
                  />
                  <IoEllipsisVertical className="fs-5 ms-2" />
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* Confirmation Dialog */}
      {confirmDelete.visible && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" onClick={cancelDeletion}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelDeletion}>No</button>
                <button type="button" className="btn btn-danger" onClick={confirmDeletion}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
