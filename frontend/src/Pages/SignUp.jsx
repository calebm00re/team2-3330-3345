import '../Styles/Form.css';
import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

function SignUp () {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const history = useHistory();

    const ec2_url = ''
    const ec2 = false;
    const url = ec2 ? ec2_url : 'localhost'

    const register = (e) => {
        e.preventDefault();

        if (userName === "" || password === "" || firstName === "" || lastName === "") {
            document.getElementById("form-error").style.display = "block";
            document.getElementById("form-error").innerHTML = "Missing information";
            
        } else {
            axios.post(`http://${url}:8000/api/createUser`, {userName: userName, psw: password, firstName: firstName, lastName: lastName}).then(res => {
                console.log(res);
                history.push('/onboarding')
            }).catch(err => {
                console.log(err)
                document.getElementById("form-error").style.display = "block";
            });;
        }
    }
        
  return (
    <section>
        <div className="container form-container">
            <form name="signUpForm" onSubmit={register} className="form">
                <div className="form-header">
                    <h2>Sign Up</h2>
                </div>
                <div className="double-form-field-wrap">
                    <div className="form-field">
                        <label className="form-label" for="firstName">First name</label>
                        <input class="form-input" type="text" id="firstName" name="firstName" placeholder="Johnny" 
                                value ={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                         />
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="lastName">Last name</label>
                        <input class="form-input" type="text" id="lastName" name="lastName" placeholder="Appleseed" 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
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
                    <input class="form-input" type="password" id="password" name="password" placeholder="···"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div id="form-error">
                    Something went wrong
                </div>
                <button type="submit" className="form-button" value="Submit">Signup</button>
            </form>
            <div className="form-tail" >
                <a className="form-tail-text-link" href="/login">Already have an account? <span className="link-color">Login</span></a>
            </div>
        </div>
    </section>
  );
}

export default SignUp;