import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {registerAmbassador} from '../../actions/index';

class AmbassadorRegister extends Component {
    onFormSubmit() {
        const {name, email, password, passwordConfirm} = this.props.fields;

        if(password.value !== passwordConfirm.value) {
            alert("Passwords does not match");
            return;
        }

        var data = {
            name: name.value,
            email: email.value,
            password: password.value
        };

        this.props.registerAmbassador(data)
            .then((data) => {
                if(data.error) {
                    alert("Error: " + data.payload.message);
                    return;
                }

                this.props.history.push('/register-success');
            });
    }

    render() {
        const {fields: {name, email, password, passwordConfirm}, handleSubmit} = this.props;

        return (
            <form className="register-form" onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <div className="inputs-section">
                    <h3 className="first">Conviértete en embajador</h3>
                    <div className="row">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" {...name}/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label><br/>
                            <input type="text" className="form-control" {...email}/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label><br/>
                            <input type="password" className="form-control" {...password}/>
                        </div>
                        <div className="form-group">
                            <label>Password Confirmation:</label><br/>
                            <input type="password" className="form-control" {...passwordConfirm}/>
                        </div>
                    </div>
                    <div className="row">
                        <p>¿Así de sencillo?, sí, las cosas complicadas no tienen por qué ser las mejores.</p>
                        <button className="btn btn-success btn-block">Empieza ahora</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'AmbassadorRegister',
    fields: ['name', 'email', 'password', 'passwordConfirm']
}, null, {registerAmbassador})(AmbassadorRegister);
