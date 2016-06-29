import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Login from './components/login';
import Register from './components/register';
import DoodlesList from './components/doodle-list';
import DoodlesMap from './components/doodles-map';
import CreateDoodle from './components/create-doodle';

export default (
    <Route path="/doodleClient/" component={App}>
        <IndexRoute component={DoodlesList}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/doodlesMap" component={DoodlesMap}/>
        <Route path="/doodlesList" component={DoodlesList}/>
        <Route path="/createDoodle" component={CreateDoodle}/>
    </Route>
);