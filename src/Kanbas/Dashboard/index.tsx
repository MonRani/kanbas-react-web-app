export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/reactjs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
            <a href="#/Kanbas/Courses/1234/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/vuejs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home">
              CS5678 Vue.js
            </a>
            <p className="wd-dashboard-course-title">Frontend Development with Vue.js</p>
            <a href="#/Kanbas/Courses/5678/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/angular.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/9012/Home">
              CS9012 Angular
            </a>
            <p className="wd-dashboard-course-title">Building Web Applications with Angular</p>
            <a href="#/Kanbas/Courses/9012/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/nodejs.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/3456/Home">
              CS3456 Node.js
            </a>
            <p className="wd-dashboard-course-title">Server-side Development with Node.js</p>
            <a href="#/Kanbas/Courses/3456/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/mongo.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7890/Home">
              CS7890 MongoDB
            </a>
            <p className="wd-dashboard-course-title">Database Management with MongoDB</p>
            <a href="#/Kanbas/Courses/7890/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/python.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/2345/Home">
              CS2345 Python Programming
            </a>
            <p className="wd-dashboard-course-title">Introduction to Python Programming</p>
            <a href="#/Kanbas/Courses/2345/Home">Go</a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/java.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/6789/Home">
              CS6789 Java Programming
            </a>
            <p className="wd-dashboard-course-title">Fundamentals of Java Programming</p>
            <a href="#/Kanbas/Courses/6789/Home">Go</a>
          </div>
        </div>
      </div>
    </div>
  );
}
