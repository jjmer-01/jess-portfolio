import React from 'react'

import './Nav.css'
import resume from '../../assets/jess-myer-resume-20200417.pdf'

function Nav() {
    return(
        <div id='nav-comp'>
            <h1 id='nav-header-text'>Jess Jean Myer</h1>
            <span id='nav-menu-links'>
                <div className='nav-menu-opt'><a href='#about-comp' alt='About Section'>About</a></div>
                <div className='nav-menu-opt'><a href='#projects-comp' alt='Projects Section'>Projects</a></div>
                <div className='nav-menu-opt'><a href='#contact-comp' alt='Contact Section'>Contact</a></div>
                <div className='nav-menu-opt'><a href={resume} alt=''>Resume</a></div>
            </span>
        </div>
    )
}

export default Nav