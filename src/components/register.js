import React, {Component} from 'react';

class Register extends Component {
    state = {
        value: ""
    };

    render() {
        return (
            <div className="registerForm">
                <form>
                    <p> 
                        <label className="registerName">Your username</label>
                        <input id="usernamesignup" required="required" type="text" placeholder="username" />
                    </p>
                    <p> 
                        <label className="registerMail"> Your email</label>
                        <input id="emailsignup" required="required" type="email" placeholder="mail@mail.com"/> 
                    </p>
                    <p> 
                        <label className="registerPasswd">Your password </label>
                        <input id="passwordsignup" required="required" type="password" placeholder="*********"/>
                    </p>
                    <p> 
                        <label className="registerpasswd2" >Please confirm your password </label>
                        <input id="passwordsignup_confirm" required="required" type="password" placeholder="*********"/>
                    </p>
                    <p className="signUpButton"> 
                        <input type="submit" value="Sign up"/> 
                    </p>
                </form>
            </div>
        );
    }
}

export default Register;