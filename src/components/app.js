import React, {Component} from 'react';
import Header from './header';

export default class App extends Component {
    render() {
        return (
            <div>
                {
                    location.pathname == "/login" ||
                    location.pathname == "/registerProductor" ||
                    location.pathname == "/registerAmbassador" ? null : <Header/>
                }
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
