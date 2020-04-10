import React from 'react'
// import { Switch, Route, Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

function About() {

    return (
        <div id='about-comp'>
            <Nav/>
            <div className='about-div'>
                <h2>About</h2>
                <p>image of me</p>
                <p>Hi, I'm Jess, and I'm a full stack web developer excited to move into development as a career.</p>
                <p>Some things you should know about me are that I have a background in HR and tech support, and I'm on the board of a local theater company that explores original practice Shakespeare.</p>
                <p>I'm excited to go into a field that allows me to challenge myself and constantly learn.</p>
                <h3>Skills:</h3>
                <p>HTML/CSS, React, Node.js, PostgreSQL</p>
            </div>
            <Projects />
            <Contact />
        </div>
    )    
}

export default About