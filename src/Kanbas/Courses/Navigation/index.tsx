import React, { useState } from 'react';
import './index.css';

export default function CoursesNavigation() {
  const [activeLink, setActiveLink] = useState('#/Kanbas/Courses/1234/Home');

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <ul id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      <li>
        <a
          id="wd-course-home-link"
          href="#/Kanbas/Courses/1234/Home"
          className={`list-group-item border border-0 ${
            activeLink === '#/Kanbas/Courses/1234/Home' ? 'active' : 'text-danger'
          }`}
          onClick={() => handleLinkClick('#/Kanbas/Courses/1234/Home')}
        >
          Home
        </a>
      </li>
      <li>
        <a
          id="wd-course-modules-link"
          href="#/Kanbas/Courses/1234/Modules"
          className={`list-group-item border border-0 ${
            activeLink === '#/Kanbas/Courses/1234/Modules' ? 'active' : 'text-danger'
          }`}
          onClick={() => handleLinkClick('#/Kanbas/Courses/1234/Modules')}
        >
          Modules
        </a>
      </li>
      <li>
        <a
          id="wd-course-piazza-link"
          href="#/Kanbas/Courses/1234/Piazza"
          className={`list-group-item border border-0 ${
            activeLink === '#/Kanbas/Courses/1234/Piazza' ? 'active' : 'text-danger'
          }`}
          onClick={() => handleLinkClick('#/Kanbas/Courses/1234/Piazza')}
        >
          Piazza
        </a>
      </li>
      <li>
        <a
          id="wd-course-zoom-link"
          href="#/Kanbas/Courses/1234/Zoom"
          className={`list-group-item border border-0 ${
            activeLink === '#/Kanbas/Courses/1234/Zoom' ? 'active' : 'text-danger'
          }`}
          onClick={() => handleLinkClick('#/Kanbas/Courses/1234/Zoom')}
        >
          Zoom
        </a>
      </li>
      <li>
        <a
          id="wd-course-assignments-link"
          href="#/Kanbas/Courses/1234/Assignments"
          className={`list-group-item border border-0 ${
            activeLink === '#/Kanbas/Courses/1234/Assignments' ? 'active' : 'text-danger'
          }`}
          onClick={() => handleLinkClick('#/Kanbas/Courses/1234/Assignments')}
        >
          Assignments
        </a>
      </li>
      <li>
        <a
          id="wd-course-quizzes-link"
          href="#/Kanbas/Courses/1234/Quizzes"
          className={`list-group-item border border-0 ${
            activeLink === '#/Kanbas/Courses/1234/Quizzes' ? 'active' : 'text-danger'
          }`}
          onClick={() => handleLinkClick('#/Kanbas/Courses/1234/Quizzes')}
        >
          Quizzes
        </a>
      </li>
      <li>
        <a
          id="wd-course-grades-link"
          href="#/Kanbas/Courses/1234/Grades"
          className={`list-group-item border border-0 ${
            activeLink === '#/Kanbas/Courses/1234/Grades' ? 'active' : 'text-danger'
          }`}
          onClick={() => handleLinkClick('#/Kanbas/Courses/1234/Grades')}
        >
          Grades
        </a>
      </li>
    </ul>
  );
}