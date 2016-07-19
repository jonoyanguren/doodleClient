import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {doLogin} from '../../actions/index';

class Login extends Component {
    onFormSubmit() {
        const {email, password} = this.props.fields;
        var data = {
            email: email.value,
            password: password.value
        };

        this.props.doLogin(data).then((data) => {
            if(data.value.error) {
                alert(data.value.message);
            }

            if (data.value.type === "ambassador") {
                this.props.history.push('/ambassador-dashboard');
            } else if (data.value.type === "productor") {
                this.props.history.push('/productor-dashboard');
            }
        });
    }

    render() {
        const {fields: {email, password}, handleSubmit, user, history} = this.props;

        return (
            <div className="row no-margin">
                <div className="image-login col-lg-9">
                    <Link to="/">
                        <img src="/doodleClient/img/logo-white.png"/>
                    </Link>
                </div>
                <div className="login-form col-lg-3">
                    <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                        <h3 className="first">Login</h3>
                        <div className="row">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" {...email}/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control" {...password}/>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-block btn-orange">¡Quiero entrar!</button>
                        </div>
                        <div className="row forgot-password text-right">
                            <Link to="/">Forgot password</Link>
                        </div>
                    </form>
                    <div className="login-footer">
                        <img src="/doodleClient/img/logo.png" alt=""/>
                        <p>c 2016 Evangify</p>
                        <div>
                            <Link to="/">Terms & conditions</Link>
                            <Link to="/">Privacy & cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = state => state.user;

export default reduxForm({
    form: 'Login',
    fields: ['email', 'password']
}, mapState, {doLogin})(Login);
