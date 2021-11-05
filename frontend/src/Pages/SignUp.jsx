import '../Styles/Form.css';
import {signup} from '../utils/utils';
import '../Styles/Form.css';
import React, {useContext, useState, useEffect } from 'react';
import { UserRepository } from '../api/userRepository';
import { useHistory } from 'react-router-dom';
import axios from "axios";

function SignUp () {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

  // ENTER YOUR EC2 PUBLIC IP/URL HERE
  const ec2_url = ''
  // CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
  const ec2 = false;
  // USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
  const url = ec2 ? ec2_url : 'localhost'

    const register = (e) => {
        e.preventDefault();
        axios.post(`http://${url}:8000/api/createUser`, {userName: userName, psw: password, firstName: firstName, lastName: lastName}).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err)
        });;
    }
        
  return (
    <div className="section">
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
                <button type="submit" className="form-button" value="Submit">Signup</button>
            </form>
            <div className="form-tail" >
                <a className="form-tail-text-link" href="/login">Already have an account? <span className="link-color">Login</span></a>
            </div>
        </div>
    </div>
  );
}

export default SignUp;
