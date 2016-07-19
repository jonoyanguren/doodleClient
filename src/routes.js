import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {bindActionCreators} from "redux";

import {store} from './configureStore';

import App from './components/app';
import Login from './components/authentication/login';
import DoodleMapContainer from './components/doodle-map/doodle-map-container';
import DoodlesMap from './components/doodle-map/doodles-map';
import CreateDoodle from './components/create-doodle/create-doodle';
import AmbassadorRegister from './components/authentication/ambassador-register';
import ProductorRegister from './components/authentication/productor-register';
import RegisterSuccess from './components/authentication/register-success';
import ProductorDashboard from './components/productor/dashboard';
import AmbassadorDashboard from './components/ambassador/dashboard';

// Container
import ProfileContainer from './components/profile/profile-container';
import DoodlesListContainer from './components/doodle-list/doodle-list-container';
import IndividualDoodleContainer from './components/individual-doodle/individual-doodle-container';

import * as routeActions from "./actions/routeActions";

const boundRouteActions = bindActionCreators(routeActions, store.dispatch);

export default (
    <Route path="/doodleClient/" component={App}>
        <IndexRoute component={DoodlesListContainer} onEnter={boundRouteActions.boundAllDoodles}/>
        <Route path="/login" component={Login}/>
        <Route
            path="/doodlesMap"
            component={DoodleMapContainer}
            onEnter={boundRouteActions.boundAllDoodles}/>
        <Route path="/create-doodle" component={CreateDoodle}/>
        <Route path="/registerAmbassador" component={AmbassadorRegister}/>
        <Route path="/registerProductor" component={ProductorRegister}/>
        <Route path="/register-success" component={RegisterSuccess}/>
        <Route path="/productor-dashboard" component={ProductorDashboard}/>
        <Route path="/ambassador-dashboard" component={AmbassadorDashboard}/>
        <Route path="/profile/:id">
            <IndexRoute component={ProfileContainer}/>
        </Route>
        <Route path="/doodle/:id">
            <IndexRoute component={IndividualDoodleContainer} onEnter={boundRouteActions.boundOneDoodle}/>
        </Route>
    </Route>
);
