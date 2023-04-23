import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projectHeading">PROJECTS</h3>
      {/* <button className="divider"></button> */}
      <div className="projectinfo">
        <p className="projectnames">PORTFOLIO SITE</p>
        <p className="discription">
          Front-end is built with React.js, and using Axios it fetches data from
          the backend server (built with Node.js and Express.js) which is
          connected to MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Projects;
