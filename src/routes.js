import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Dash from './components/Dash/Dash'

export default (
    <Switch>
        <Route exact strict path="/" component={Landing} />
        <Route exact path='/dash' component={Dash} />
    </Switch>
)