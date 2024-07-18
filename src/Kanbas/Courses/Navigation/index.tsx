import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './index.css';

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const getActiveLink = (link: string) => {
    return pathname.includes(link);
  };

  return (
    <ul id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `#/Kanbas/Courses/${cid}/${link}`;
        return (
          <li key={link}>
            <a
              href={linkPath}
              className={`list-group-item border border-0 ${
                getActiveLink(link) ? 'active' : 'text-danger'
              }`}
            >
              {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
