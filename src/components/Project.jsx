import React from 'react';

function Project({ projectData }) {
  return (
    <div>
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p>Technologies Used: {project.technologies.join(', ')}</p>
          <a href={project.link}>Project Link</a>
        </div>
      ))}
    </div>
  );
}

export default Project;