import { useState, useEffect } from 'react';
import { Events, animateScroll as scroll, scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Education from './components/Education';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';

function App() {

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let element = document.querySelector('.About-jsx');
      let position = element.getBoundingClientRect();
      // check whether About-jsx is out of viewport
      
      if(position.top < window.innerHeight && position.bottom - 300 >= 0) {
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

  const Maze = [{
    name: 'Maze Generator and Solver',
    description: "Contributed to the creation of a user interface compatible with Linux and Windows platforms. Implemented Prim's Algorithm for maze generation, offering a variety of maze designs. Additionally, integrated Djikstra's, Depth First Search, and Breath First Search algorithms to provide effective maze-solving capabilities.",
    tech: ['Python', 'Pygame', 'C++', 'Linux', 'SDL', 'GIT & Github'],
    link: 'https://github.com/Bhumir2503/Maze-Gen-Solver'
  }];

  const Sudoku = [{
    name: 'Sudoku Generator and Solver',
    description: "Contributed to the creation of a user interface compatible with Linux and Windows platforms. Implemented Prim's Algorithm for maze generation, offering a variety of maze designs. Additionally, integrated Djikstra's, Depth First Search, and Breath First Search algorithms to provide effective maze-solving capabilities.",
    tech: ['Python', 'Pygame', 'C++', 'Linux', 'SDL', 'GIT & Github'],
    link: 'https://github.com/Bhumir2503/Maze-Gen-Solver'
  }];
  
  const Resume1 = [{
    name: 'Personal Website v1',
    description: "Contributed to the creation of a user interface compatible with Linux and Windows platforms. Implemented Prim's Algorithm for maze generation, offering a variety of maze designs. Additionally, integrated Djikstra's, Depth First Search, and Breath First Search algorithms to provide effective maze-solving capabilities.",
    tech: ['Python', 'Pygame', 'C++', 'Linux', 'SDL', 'GIT & Github'],
    link: 'https://github.com/Bhumir2503/Maze-Gen-Solver'
  }];
  
  const Inventory = [{
    name: 'Inventory Management System',
    description: "Contributed to the creation of a user interface compatible with Linux and Windows platforms. Implemented Prim's Algorithm for maze generation, offering a variety of maze designs. Additionally, integrated Djikstra's, Depth First Search, and Breath First Search algorithms to provide effective maze-solving capabilities.",
    tech: ['Python', 'Pygame', 'C++', 'Linux', 'SDL', 'GIT & Github'],
    link: 'https://github.com/Bhumir2503/Maze-Gen-Solver'
  }];
  
  const Resume2 = [{
    name: 'Personal Website v2',
    description: "Contributed to the creation of a user interface compatible with Linux and Windows platforms. Implemented Prim's Algorithm for maze generation, offering a variety of maze designs. Additionally, integrated Djikstra's, Depth First Search, and Breath First Search algorithms to provide effective maze-solving capabilities.",
    tech: ['Python', 'Pygame', 'C++', 'Linux', 'SDL', 'GIT & Github'],
    link: 'https://github.com/Bhumir2503/Maze-Gen-Solver'
  }];



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
      

      <div className='project-section'>
        <div >
          <h1>Project</h1>
        </div>
        <div className='project-side'>
          <Project projectData={Maze} link = "https://github.com/Bhumir2503/Maze-Gen-Solver"/>
          <Project projectData={Sudoku} link = "https://github.com/Bhumir2503/Maze-Gen-Solver"/>
          <Project projectData={Resume1} link = "https://github.com/Bhumir2503/Maze-Gen-Solver"/>
          <Project projectData={Inventory} link = "https://github.com/Bhumir2503/Maze-Gen-Solver"/>
          <Project projectData={Resume2} link = "https://github.com/Bhumir2503/Maze-Gen-Solver"/>
        </div>
      </div>


    </>
  )
}

export default App
