import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importing useParams from react-router-dom
import assignmentsData from '../../Database/assignments.json'; // Import assignments data

export default function AssignmentEditor() {
  const { aid } = useParams(); // Get assignmentId from URL params
  const [assignmentDetails, setAssignmentDetails] = useState({
    title: ''
  });

  useEffect(() => {
    // Find assignment from assignmentsData based on aid
    const assignment = assignmentsData.find(assignment => assignment._id === aid);

    if (assignment) {
      setAssignmentDetails({
        title: assignment.title
      });

      // Update the URL dynamically with the assignment title
      // You might handle this part differently based on your routing setup
      // Example: history.replace(`/Kanbas/Courses/${assignment.course}/Assignments/${aid}/${encodeURIComponent(assignment.title)}`);
    }
  }, [aid]);

  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="container">
        <div className="mb-3">
          <label htmlFor="wd-name">Assignment Name</label>
          <input id="wd-name" className="form-control mb-3" value={assignmentDetails.title} readOnly />

          <div className="assignment-details-box p-3 border">
            <p><span style={{ color: 'black' }}>The assignment is </span><span style={{ color: 'red' }}>available online.</span> Submit a link to the landing page of your Web application running on Netlify.</p>

            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kansas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>

            <p>The Kansas application should include a link to navigate back to the landing page.</p>
          </div>
        </div>
        <div className="row justify-content-center mb-3">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-points">Points</label>
              </div>
              <div className="col-md-8">
                <input id="wd-ppoints" className="form-control" value={100} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-group">Assignment Group</label>
              </div>
              <div className="col-md-8">
                <select id="wd-group" className="form-control">
                  <option value="assignments">ASSIGNMENTS</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="wd-grade-display">Display Grade as</label>
              </div>
              <div className="col-md-8">
                <select id="wd-grade-display" className="form-control">
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
                  <select id="wd-submission-type" className="form-control mb-2">
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
                  <input id="assign-to" className="form-control mb-2" value="Everyone" />
                  <b>Due</b>
                  <input type="datetime-local" id="due-date" className="form-control mb-2" defaultValue="2024-05-13T23:59" />
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="available-from">Available From</label>
                      <input type="datetime-local" id="available-from" className="form-control mb-2" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="until">Until</label>
                      <input type="datetime-local" id="until" className="form-control mb-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-end">
                <button className="btn btn-secondary">Cancel</button>
                <button className="btn btn-danger ms-2">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
