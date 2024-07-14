import React from 'react';

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      imgSrc: "/reactjs.jpg",
      courseCode: "REACT101",
      courseTitle: "React.js",
      courseDescription: "Learn the fundamentals of React.js for building interactive UIs."
    },
    {
      id: 2,
      imgSrc: "/nodejs.jpg",
      courseCode: "NODEJS101",
      courseTitle: "Node.js",
      courseDescription: "Explore server-side JavaScript development with Node.js and Express."
    },
    {
      id: 3,
      imgSrc: "/mongodb.jpg",
      courseCode: "MONGODB101",
      courseTitle: "MongoDB",
      courseDescription: "Introduction to MongoDB for storing and managing database collections."
    },
    {
      id: 4,
      imgSrc: "/angular.jpg",
      courseCode: "ANGULAR101",
      courseTitle: "Angular",
      courseDescription: "Build dynamic web applications with the Angular framework."
    },
    {
      id: 5,
      imgSrc: "/vuejs.jpg",
      courseCode: "VUEJS101",
      courseTitle: "Vue.js",
      courseDescription: "Learn Vue.js for creating reactive and component-based web interfaces."
    },
    {
      id: 6,
      imgSrc: "/aws.jpg",
      courseCode: "AWS101",
      courseTitle: "AWS",
      courseDescription: "Introduction to cloud computing with Amazon Web Services (AWS)."
    },
    {
      id: 7,
      imgSrc: "/typescript.jpg",
      courseCode: "TYPESCRIPT101",
      courseTitle: "TypeScript",
      courseDescription: "Get started with TypeScript for building scalable and maintainable JavaScript applications."
    }
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map(course => (
          <div key={course.id} className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card">
              <a className="wd-dashboard-course-link text-decoration-none text-dark" href={`#/Kanbas/Courses/${course.id}/Home`}>
                <img src={course.imgSrc} className="card-img-top" alt={`${course.courseCode} Course`} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    {course.courseCode} {course.courseTitle}
                  </h5>
                  <p className="card-text">
                    {course.courseDescription}
                  </p>
                  <a href={`#/Kanbas/Courses/${course.id}/Home`} className="btn btn-primary">Go</a>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}