import React, {Component} from 'react';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {registerAmbassador} from '../../actions/index';

class AmbassadorRegister extends Component {
    state = {
        bImage: null,
        bgChanged: false
    };

    componentWillMount() {
        const bgImage = 'url(../../img/ambassador/ambassador' + (Math.floor(Math.random() * 4) + 1) + '.jpg)';

        if(!this.state.bgChanged) {
            this.setState({
                bImage: bgImage,
                bgChanged: true
            })
        }
    }

    onFormSubmit() {
        const {name, email, password, passwordConfirm} = this.props.fields;

        if (password.value !== passwordConfirm.value) {
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
                debugger;
                if (data.error) {
                    alert("Error: " + data.payload.message);
                    return;
                }

                this.props.history.push('/register-success');
            });
    }

    render() {
        const {fields: {name, email, password, passwordConfirm}, handleSubmit} = this.props;

        return (
            <div className="register-form-container" style={{backgroundImage: this.state.bImage}}>
                <div >
                    <Link to="/">
                        <img className="logo-white" src="/doodleClient/img/logo-white.png"/>
                    </Link>
                </div>

                <form className="register-form" onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <h3>Conviértete en embajador</h3>

                    <div className="inputs-section">
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
                            <button className="btn btn-orange btn-block">Empieza ahora</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'AmbassadorRegister',
    fields: ['name', 'email', 'password', 'passwordConfirm']
}, null, {registerAmbassador})(AmbassadorRegister);
