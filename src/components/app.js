import React, {Component} from 'react';
import Header from './header';
import Login from './login';
import Register from './register';
import DoodleList from './doodle-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
