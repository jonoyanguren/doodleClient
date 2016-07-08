import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {registerProductor} from '../../actions/index';

class ProductorRegister extends Component {
    onFormSubmit() {
        const {companyName, cif, web, email, password, passwordConfirm} = this.props.fields;

        if(password.value !== passwordConfirm.value) {
            alert("Passwords does not match");
            return;
        }

        var data = {
            companyName: companyName.value,
            cif: cif.value,
            web: web.value,
            email: email.value,
            password: password.value
        };

        this.props.registerProductor(data)
            .then((data) => {
                if(data.error) {
                    alert("Error: " + data.payload.message);
                    return;
                }

                this.props.history.push('/register-success');
            });
    }

    render() {
        const {fields: {companyName, cif, web, email, password, passwordConfirm}, handleSubmit} = this.props;

        return (


            <form className="register-form" onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <div className="inputs-section">
                    <h3 className="first">Conviértete en productor</h3>
                    <div className="row">
                        <div className="form-group">
                            <label>Company Name</label>
                            <input type="text" className="form-control" {...companyName}/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label><br/>
                            <input type="text" className="form-control" {...email}/>
                        </div>
                        <div className="form-group">
                            <label>CIF:</label><br/>
                            <input type="text" className="form-control" {...cif}/>
                        </div>
                        <div className="form-group">
                            <label>Web:</label><br/>
                            <input type="text" className="form-control" {...web}/>
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
    fields: ['companyName', 'cif', 'web', 'email', 'password', 'passwordConfirm']
}, null, {registerProductor})(ProductorRegister);