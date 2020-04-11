import React from 'react'
import './About.css'

function About() {

    return (
        <div id='about-comp' name='about-comp'>
            <div className='about-image-section'>
                <div id='jess-image'></div>
            </div>
            <div className='about-text-border'>
                <h2>About</h2>
                    <p>I'm Jess, and I'm a full stack web developer excited to move into development as a career.</p>
                    <br />
                    <p>Some things you should know about me are that I have a background in HR and tech support, and I'm on the board of a local theater company that explores original practice Shakespeare.</p>
                    <br />
                    <p>I'm excited to go into a field that allows me to challenge myself and constantly learn.</p>
                    <br />
                    <p>HTML/CSS, React, Node.js, PostgreSQL</p>
            </div>   
        </div>
    )    
}

export default About