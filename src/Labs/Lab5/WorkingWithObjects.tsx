import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "This module introduces the basic concepts of computer science.",
    course: "Computer Science"
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3 id="wd-working-with-objects">Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <hr />
      <a id="wd-retrieve-module" className="btn btn-primary" href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <hr />

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}/title`}>
        Get Title
      </a>
      <hr />
      <a id="wd-retrieve-module-name" className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <hr />

      <h4>Modifying Properties</h4>
      <div>
        <input className="form-control w-75" id="wd-assignment-title" value={assignment.title} onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} placeholder="New Assignment Title" />
        <a id="wd-update-assignment-title" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
      </div>
      <hr />
      <div>
        <input className="form-control w-75" id="wd-assignment-score" type="number" value={assignment.score} onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })} placeholder="New Assignment Score" />
        <a id="wd-update-assignment-score" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>
      <hr />
      <div>
        <input type="checkbox" id="wd-assignment-completed" checked={assignment.completed} onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        <a id="wd-update-assignment-completed" className="btn btn-primary float-end" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
      </div>
      <hr />
      <div>
        <input className="form-control w-75" id="wd-module-name" value={module.name} onChange={(e) => setModule({ ...module, name: e.target.value })} placeholder="New Module Name" />
        <a id="wd-update-module-name" className="btn btn-primary float-end" href={`${MODULE_API_URL}/name/${module.name}`}>
          Update Module Name
        </a>
      </div>
      <hr />
      <div>
        <input className="form-control w-75" id="wd-module-description" value={module.description} onChange={(e) => setModule({ ...module, description: e.target.value })} placeholder="New Module Description" />
        <a id="wd-update-module-description" className="btn btn-primary float-end" href={`${MODULE_API_URL}/description/${module.description}`}>
          Update Module Description
        </a>
      </div>
    </div>
  );
}
