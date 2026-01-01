import React from "react";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <div className="projects-list-row">
            <span className="project-title"><strong>A Queue application:</strong></span>
            <span className="project-desc">Create to avoid standing in the long lines</span>
          </div>
        </li>
        <li>
          <div className="projects-list-row">
            <span className="project-title"><strong>Hello HERO:</strong></span>
            <span className="project-desc">An app designed to treat school children remotely for the therapist & their clients</span>
          </div>
        </li>
        <li>
          <div className="projects-list-row">
            <span className="project-title"><strong>eZRx:</strong></span>
            <span className="project-desc">A web app designed for a south east asian pharmaceutical company to sell their products to vendors online</span>
          </div>
        </li>
        <li>
          <div className="projects-list-row">
            <span className="project-title"><strong>Banking application:</strong></span>
            <span className="project-desc">Designed for an Irish bank</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
