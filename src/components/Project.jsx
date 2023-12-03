import React from 'react';

function Project({ projectData, link }) {
  return (
    <a target='_blank' href = {link}>
      <div className='project'>
        {projectData.map((project, index) => (
          <div key={index} className='project-content'>
            <h2>{project.name}</h2>
            <h4>{project.description}</h4>
            <ul>
              {project.tech.map((acc, i) => <li key={i}>{acc}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </a>
  );
}

export default Project;