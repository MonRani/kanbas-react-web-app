import React, { useState, useEffect } from 'react';
import * as db from '../../Database';
import { useParams } from 'react-router-dom';
import GradesTopBar from './GradesTopBar';
import './index.css';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  points: number;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface Grade {
  _id: string;
  student: string;
  assignment: string;
  grade: string;
}

function Grades() {
  const { cid } = useParams<{ cid: string }>();  // Update to use 'cid'
  console.log(cid);

  const assignments = (db.assignments as Assignment[]).filter((assignment) => assignment.course === cid);
  const enrollments = (db.enrollments as Enrollment[]).filter((enrollment) => enrollment.course === cid);

  const [editableGrades, setEditableGrades] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    console.log('Assignments:', assignments);
    console.log('Enrollments:', enrollments);
  }, [assignments, enrollments]);

  const handleGradeChange = (enrollmentId: string, assignmentId: string, value: string) => {
    setEditableGrades((prevGrades) => ({
      ...prevGrades,
      [`${enrollmentId}-${assignmentId}`]: value,
    }));
  };

  return (
    <div>
      <GradesTopBar />
      <div className="table-responsive">
        <table className="table table-striped table-bordered border-secondary text-center">
          <thead className="table-secondary">
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>
                  {assignment.title}
                  <br />
                  Out of {assignment.points}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user: User) => user._id === enrollment.user);
              return (
                <tr key={enrollment.user}>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade: Grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    const isEditable = true;
                    const gradeKey = `${enrollment.user}-${assignment._id}`;
                    const value = editableGrades[gradeKey] !== undefined ? editableGrades[gradeKey] : grade?.grade || '';

                    return (
                      <td key={assignment._id}>
                        {isEditable ? (
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={value}
                              onChange={(e) => handleGradeChange(enrollment.user, assignment._id, e.target.value)}
                            />
                          </div>
                        ) : (
                          grade?.grade != null ? `${grade.grade}%` : ''
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
