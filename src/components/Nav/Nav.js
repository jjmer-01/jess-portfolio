import React from 'react'

import './Nav.css'

function Nav() {
    return(
        <div id='nav-comp'>
            <h1 id='nav-header-text'>Portfolio: Jess Myer </h1>
            <span id='nav-menu-links'>
                <div className='nav-menu-opt'>About</div>
                <div className='nav-menu-opt'>Projects</div>
                <div className='nav-menu-opt'>Contact</div>
                <div className='nav-menu-opt'>Resume</div>
            </span>
        </div>
    )
}

export default Nav