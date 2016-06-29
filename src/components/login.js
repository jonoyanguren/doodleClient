import React, {Component} from 'react';

class Login extends Component {
    state = {
        value: ""
    };

    render() {
        return (
            <div className="loginForm">
                <div className="loginHeader">
                    Member Login
                </div>
                <div className="loginBody">
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input id="rememberme" type="checkbox"/>
                        <label for="rememberme">Remember</label>
                        <input type="submit" value="Login Now"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;