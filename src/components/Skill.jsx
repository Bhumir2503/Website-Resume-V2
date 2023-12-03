import React from 'react';

const Skill = () => {
    return (
        <div className='skill-col'>
            <ul>
                <li className='Title'><h2>Language</h2></li>
                <li className='items'>Javascript</li>
                <li className='items'>Python</li>
                <li className='items'>C/C++</li>
                <li className='items'>HTML/CSS</li>
                <li className='items'>Java</li>
            </ul>
            <ul>
                <li className='Title'><h2>Framework</h2></li>
                <li className='items'>React.js</li>
                <li className='items'>Vue.js</li>
                <li className='items'>Angular.js</li>
                <li className='items'>Express.js</li>
                <li className='items'>Pytorch</li>
                <li className='items'>Pygame</li>
                <li className='items'>Django</li>
            </ul>
            <ul>
                <li className='Title'><h2>Tool</h2></li>
                <li className='items'>AWS</li>
                <li className='items'>MongoDB</li>
                <li className='items'>GIT & Github</li>
                <li className='items'>Postman</li>
            </ul>
            
        </div>
    );
}

export default Skill;