import '../Styles/Form.css';
import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import {UserRepository} from '../api/userRepository'

function Login () {
    //basis for login api - Work In Progress
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const ec2_url = ''
    const ec2 = false;
    const url = ec2 ? ec2_url : 'localhost'

    const userRepository = new UserRepository();

    const login = async (e) => {
        e.preventDefault();
        if (userName === "" || password === "") {
            document.getElementById("form-error").style.display = "block";
            document.getElementById("form-error").innerHTML = "Incorrect username or password";
        } else {
            console.log("in login")
            e.preventDefault();
            const res = await userRepository.login(userName, password);
            if(!res.success) {
                console.log("no good")
                setErrors(res)
                console.log(errors)
            } else {
                console.log("good entry")
                history.push(`/home`)
            }
        }
        
    }

    return (
        <section>
            <div className="container form-container">
                <form name="loginForm" onSubmit={login} className="form">
                    <div className="form-header">
                        <h2>Login</h2>
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="username">Username</label>
                        <input class="form-input" type="text" id="username" name="username" placeholder="jappleseed@yahoo.com" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                />
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="password">Password</label>
                        <a class="form-field-link" href="https://google.com/">Forgot</a>
                        <input class="form-input" type="password" id="password" name="password" placeholder="···" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div id="form-error">
                        Invalid email and password combination
                    </div>
                    <button type="submit" className="form-button" value="Submit">Login</button>
                </form>
                <div className="form-tail" >
                    <a className="form-tail-text-link" href="/signup">Don't have an account? <span className="link-color">Create one</span></a>
                </div>
            </div>
        </section>
    );
}

export default Login;
