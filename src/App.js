import React from 'react';

import Nav from './components/Nav/Nav'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
