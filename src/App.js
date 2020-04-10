import React from 'react';

import routes from './routes'

import Landing from './components/Landing/Landing'
import About from './components/About/About'


import './App.css'


function App() {
  return (
      <div className="App">
        {routes}
      </div>

  );
}

export default App;
