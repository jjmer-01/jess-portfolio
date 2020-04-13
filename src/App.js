import React from 'react';

import Skills from './components/Skills/Skills'

import './App.css'
import resume from './assets/jess-myer-resume-20200417.pdf'
import cssIcon from './assets/css3.png'
import htmlIcon from './assets/html5.png'
import jsIcon from './assets/javascript.png'
import nodejsIcon from './assets/node-js.png'
import sqlIcon from './assets/postgre-sql.png'
import reIcon from './assets/react.png'
import sassIcon from './assets/sass.png'
import socketIcon from './assets/socket-io.png'

function App() {
  return (
      <div className="App">
        <div id='nav'>
          <h1 id='nav-header-text'>Jess Myer</h1>
          <ul id='nav-menu-links'>
              <li className='nav-menu-opt'>
                  <a 
                      href='#about' 
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      duration={500}
                      alt='About Section'>About
                  </a>
              </li>
              <li className='nav-menu-opt'>
                  <a 
                      href='#skills'
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      duration={500}
                      alt='Skills Section'>Skills
                  </a>
              </li>
              <li className='nav-menu-opt'>
                  <a 
                      href='#projects' 
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      duration={500}
                      alt='Projects Section'>Projects
                  </a>
              </li>
              <li className='nav-menu-opt'>
                  <a 
                      href='#contact' 
                      activeClass='active'
                      spy={true}
                      smooth={true}
                      duration={500}
                      alt='Contact Section'>Contact
                  </a>
              </li>
              <li className='nav-menu-opt'>
                  <a href={resume} 
                      alt='link to printable resume' 
                      target='blank'>Resume
                  </a>
              </li>
          </ul>
      </div>
        <div id='about'>
          <div className='about-image-section'>
            <div id='jess-image'></div>
          </div>
          <div className='about-text-border'>
            <h2>About</h2>
              <p className='about-p'>I'm Jess, a full stack web developer excited to move into web design as a career.</p>
              <br />
              <p className='about-p'>I'm excited to go into a field that allows me to challenge myself and constantly learn.</p>
          </div>   
        </div>
        <div id='skills'>
          <h2>Skills</h2>
          <div className='skills-icons'>
            <div className='icon'>
              <img src={htmlIcon} alt='HTML icon' />
              <p>HTML</p>
            </div>
            <div className='icon'>
              <img src={cssIcon} alt='CSS icon' />
              <p>CSS</p>
            </div>
            <div className='icon'>
              <img src={jsIcon} alt='JavaScript icon' />
              <p>JavaScript</p>           
            </div>
            <div className='icon'>
              <img src={reIcon} alt='React icon' />
              <p>React</p>         
            </div>
            <div className='icon'>
              <img src={nodejsIcon} alt='Node.js icon' />
              <p>Node.js</p>
            </div>
            <div className='icon'>
              <img src={sqlIcon} alt='PostgreSQL Icon' />
              <p>PostgreSQL</p>          
            </div>
            <div className='icon'>
              <img src={socketIcon} alt='Socket.io Icon' />
              <p>Socket.io</p>
            </div>
            <div className='icon'>
              <img src={sassIcon} alt='Sass Icon' />
              <p>Sass</p>
            </div>
          </div>
          
        </div>
        <div id='projects'>
          <h2>Projects</h2>
          <div>Personal Project</div>
          <div>Group Project</div>
          <div>Git Hub Link</div>
        </div>
        <div id="contact">
          <h2>Contact</h2>
          <p>Node Mailer Form?</p>
          <label>First Name:</label>
          <input type='text' />
          <label>Last Name:</label>
          <input type='text' />
          <label>Email:</label>
          <input type='text' />
          <label>Message:</label>
          <input type='text' />
          <p>Social Media (LinkedIn, Instagram)</p>
        </div>
      </div>

  );
}

export default App;
