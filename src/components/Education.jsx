import React from 'react';

function Education({ educationData }) {
  return (
    <div className='education'>

      {educationData.map((edu, index) => (
        <div key={index}>
          <div className='education-content'>
            <h2>{edu.school}</h2>
            <h4>{edu.degree} in {edu.field}</h4>
            <h5>{edu.start} - {edu.end}</h5>
            <h6>Relevant Cources:</h6>
            <ul>
              {edu.accomplishments.map((acc, i) => <li key={i}>{acc}</li>)}
            </ul>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Education;