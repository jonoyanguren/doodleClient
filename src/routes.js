import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Login from './components/authentication/login';
import DoodlesList from './components/doodle-list';
import DoodlesMap from './components/doodles-map';
import CreateDoodle from './components/create-doodle';
import IndividualDoodle from './components/individual-doodle';
import AmbassadorRegister from './components/authentication/ambassador-register';
import ProductorRegister from './components/authentication/productor-register';
import RegisterSuccess from './components/authentication/register-success';
import ProductorDashboard from './components/productor/dashboard';
import AmbassadorDashboard from './components/ambassador/dashboard';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={DoodlesList}/>
        <Route path="/login" component={Login}/>
        <Route path="/doodlesMap" component={DoodlesMap}/>
        <Route path="/doodlesList" component={DoodlesList}/>
        <Route path="/create-doodle" component={CreateDoodle}/>
        <Route path="/individual" component={IndividualDoodle}/>
        <Route path="/registerAmbassador" component={AmbassadorRegister}/>
        <Route path="/registerProductor" component={ProductorRegister}/>
        <Route path="/register-success" component={RegisterSuccess}/>
        <Route path="/productor-dashboard" component={ProductorDashboard}/>
        <Route path="/ambassador-dashboard" component={AmbassadorDashboard}/>
    </Route>
);