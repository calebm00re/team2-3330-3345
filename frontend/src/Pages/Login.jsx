import '../Styles/Form.css';
import React from 'react';

function Login () {


    return (
        <div className="section">
            <div className="container form-container">
                <form name="loginForm" onSubmit="" className="form">
                    <div className="form-header">
                        <h2>Login</h2>
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="username">Username</label>
                        <input class="form-input" type="text" id="username" name="username" placeholder="jappleseed@yahoo.com" />
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="password">Password</label>
                        <a class="form-field-link" href="https://google.com/" target="_blank">Forgot</a>
                        <input class="form-input" type="password" id="password" name="password" placeholder="···" />
                    </div>
                    <a type="submit" className="form-button" value="Submit" href="/home">Login</a>
                </form>
                <div className="form-tail" >
                    <a className="form-tail-text-link" href="/signup">Don't have an account? <span className="link-color">Create one</span></a>
                </div>
            </div>
        </div>
    );
}

export default Login;
