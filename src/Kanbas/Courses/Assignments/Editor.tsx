import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import assignmentsData from '../../Database/assignments.json';

// Define the type for assignment details
interface AssignmentDetails {
  _id?: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  course: string;
}

export default function AssignmentEditor() {
  const { aid } = useParams<{ aid: string }>();
  const [assignmentDetails, setAssignmentDetails] = useState<AssignmentDetails>({
    title: '',
    description: 'The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kansas application\n- Links to all relevant source code repositories\n\nThe Kansas application should include a link to navigate back to the landing page.',
    points: 100,
    dueDate: '',
    availableFrom: '',
    availableUntil: '',
    course: ''
  });

  useEffect(() => {
    const assignment = (assignmentsData as AssignmentDetails[]).find(assignment => assignment._id === aid);

    if (assignment) {
      setAssignmentDetails({
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        course: assignment.course
      });
    }
  }, [aid]);

  const handleCancel = () => {
    window.location.href = `#/Kanbas/Courses/${assignmentDetails.course}/Assignments`;
  };

  const handleSave = () => {
    window.location.href = `#/Kanbas/Courses/${assignmentDetails.course}/Assignments`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setAssignmentDetails(prevDetails => ({
      ...prevDetails,
      [id]: value
    }));
  };

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="container">
        <div className="mb-3">
          <label htmlFor="wd-name">Assignment Name</label>
          <input
            id="title"
            className="form-control mb-3"
            value={assignmentDetails.title}
            onChange={handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-control mb-3"
            rows={6}
            value={assignmentDetails.description}
            onChange={handleInputChange}
          />

        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-points">Points</label>
              </div>
              <div className="col-md-8">
                <input
                  id="points"
                  className="form-control"
                  value={assignmentDetails.points}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-group">Assignment Group</label>
              </div>
              <div className="col-md-8">
                <select id="group" className="form-control" value="assignments" disabled>
                  <option value="assignments">ASSIGNMENTS</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-grade-display">Display Grade as</label>
              </div>
              <div className="col-md-8">
                <select id="grade-display" className="form-control" value="percentage" disabled>
                  <option value="percentage">Percentage</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </div>
              <div className="col-md-8">
                <div className="border p-3">
                  <select id="submission-type" className="form-control mb-2" value="online" disabled>
                    <option value="online">Online</option>
                  </select>
                  <b>Online Entry Options</b>
                  <div className="form-check">
                    <input type="checkbox" id="text-entry" name="online-entry" value="text-entry" className="form-check-input" />
                    <label htmlFor="text-entry" className="form-check-label">Text Entry</label><br />
                    <input type="checkbox" id="website-url" name="online-entry" value="website-url" className="form-check-input" />
                    <label htmlFor="website-url" className="form-check-label">Website URL</label><br />
                    <input type="checkbox" id="media-recordings" name="online-entry" value="media-recordings" className="form-check-input" />
                    <label htmlFor="media-recordings" className="form-check-label">Media Recordings</label><br />
                    <input type="checkbox" id="student-annotation" name="online-entry" value="student-annotation" className="form-check-input" />
                    <label htmlFor="student-annotation" className="form-check-label">Student Annotation</label><br />
                    <input type="checkbox" id="file-uploads" name="online-entry" value="file-uploads" className="form-check-input" />
                    <label htmlFor="file-uploads" className="form-check-label">File Uploads</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label>Assign</label>
              </div>
              <div className="col-md-8">
                <div className="border p-3">
                  <b>Assign To</b>
                  <input id="assign-to" className="form-control mb-2" value="Everyone" disabled />
                  <b>Due</b>
                  <input
                    type="datetime-local"
                    id="due-date"
                    className="form-control mb-2"
                    value={assignmentDetails.dueDate}
                    onChange={handleInputChange}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="available-from">Available From</label>
                      <input
                        type="datetime-local"
                        id="availableFrom"
                        className="form-control mb-2"
                        value={assignmentDetails.availableFrom}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="availableUntil">Until</label>
                      <input
                        type="datetime-local"
                        id="availableUntil"
                        className="form-control mb-2"
                        value={assignmentDetails.availableUntil}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-end">
                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-danger ms-2" onClick={handleSave}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
