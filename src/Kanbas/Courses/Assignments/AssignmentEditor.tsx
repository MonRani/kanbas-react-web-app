import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createAssignment, updateAssignment } from "./client";

const AssignmentEditor = () => {
  const navigate = useNavigate();
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();

  const [title, setTitle] = useState("New Assignment");
  const [description, setDescription] = useState("New Assignment Description");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  const handleSave = async () => {
    const assignment = {
      title,
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
      course: cid!,
    };

    if (aid) {
      await updateAssignment({ ...assignment, _id: aid });
    } else {
      await createAssignment(cid!, assignment);
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div className="assignment-editor p-4">
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Assignment Name</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label className="form-label me-2">Points:</label>
          <input
            type="number"
            className="form-control w-auto"
            value={points}
            onChange={(e) => setPoints(parseInt(e.target.value))}
          />
        </div>
        <div className="mb-3 d-flex align-items-start">
          <label className="form-label me-2">Assign:</label>
          <div className="flex-grow-1 border rounded p-3">
            <div className="row">
              <div className="col-md-4 mb-2">
                <label className="form-label">Due:</label>
                <input
                  type="date"
                  className="form-control"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="form-label">Available From:</label>
                <input
                  type="date"
                  className="form-control"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                />
              </div>
              <div className="col-md-4 mb-2">
                <label className="form-label">Until:</label>
                <input
                  type="date"
                  className="form-control"
                  value={availableUntil}
                  onChange={(e) => setAvailableUntil(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentEditor;
