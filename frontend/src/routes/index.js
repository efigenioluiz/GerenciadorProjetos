import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../views/home'
import Projects from '../views/projects';
import Create from '../views/create';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/create" exact component={Create} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes