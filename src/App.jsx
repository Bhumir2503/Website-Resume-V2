import { useState, useEffect } from 'react';
import { Events, animateScroll as scroll, scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Education from './components/Education';
import About from './components/About';
import Skill from './components/Skill';

function App() {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let element = document.querySelector('.About-jsx');
      let position = element.getBoundingClientRect();
      // check whether About-jsx is out of viewport
      if(position.top < window.innerHeight && position.bottom - 200>= 0) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const Pelli = [
    {
      school: 'Pellissippi State Community College',
      degree: 'Associates of Science',
      field: 'Computer Science',
      start: 'Aug 2021',
      end: 'Dec 2022',
      accomplishments: ['Data Structures', 'Computer Organization']
    },
  ];

  const UTK = [
    {
      school: 'University of Tennessee, Knoxville',
      degree: 'Bachelors of Science',
      field: 'Computer Science and Minors in Mathematics and Machine Learning',
      start: 'Jan 2023',
      end: 'May 2025',
      accomplishments: ['Algorithms', 'Systems Programming', 'Linear Algebra', 'Differential Equations', 'Multivariable Calculus' ]
    },
  ];




  return (
    <>

      {isNavbarVisible && <Navbar />}
      <div className='About-Me'>
        <div className='About-jsx'>
          <About />
        </div>
        <div className='about-content'>
          <img src="/web-design-layout.svg" alt="" />
        </div>
      </div>
      
      
      
      
      
      <div className='education-section'>
        <div className='education-title'>
          <h1>Education</h1>
        </div>
        <div className='education-side'>
          <Education educationData= {Pelli}/>
          <Education educationData= {UTK}/>
        </div>
      </div>
      



      <div className='skill-section'>
        <div >
          <h1>Skill</h1>
        </div>
        <div className='skill-side'>
          <Skill />
        </div>
      </div>
      
    </>
  )
}

export default App
