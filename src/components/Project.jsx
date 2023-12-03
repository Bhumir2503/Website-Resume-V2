import React from 'react';

function Project({ projectData, link , image}) {
  return (
    <a target='_blank' href = {link}>
      <div className='project'>
        <img src={image} alt="" />
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