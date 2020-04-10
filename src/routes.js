import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import About from './components/About/About'

export default (
    <Switch>
        <Route exact strict path="/" component={Landing} />
        <Route exact path='/about' component={About} />
    </Switch>
)