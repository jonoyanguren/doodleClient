import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {doLogin} from '../../actions/index';

class Login extends Component {
    onFormSubmit() {
        const {email, password} = this.props.fields;
        var data = {
            email: email.value,
            password: password.value
        };

        this.props.doLogin(data)
            .then((response) => {
                const {data} = response.payload;

                if (data.error) {
                    alert("Error: " + data.message);
                    return;
                }


                if(data.type === "ambassador") {
                    this.props.history.push('/ambassador-dashboard');

                } else if(data.type === "productor") {
                    this.props.history.push('/productor-dashboard');
                }
            });
    }

    render() {
        const {fields: {email, password}, handleSubmit} = this.props;

        return (
            <form className="register-form" onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <div className="inputs-section">
                    <h3 className="first">Login</h3>
                    <div className="row">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" {...email}/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label><br/>
                            <input type="password" className="form-control" {...password}/>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-success btn-block">¡Quiero entrar!</button>
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {loginData: state.doodles.data}
}

export default reduxForm({
    form: 'Login',
    fields: ['email', 'password']
}, mapStateToProps, {doLogin})(Login);
