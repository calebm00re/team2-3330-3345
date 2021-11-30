import axios from 'axios';
import React from 'react';

// ENTER YOUR EC2 PUBLIC IP/URL HERE
const ec2_url = ''
// CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
const ec2 = false;
// USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
const url = ec2 ? ec2_url : 'localhost'

export const isLogin = () => {
    // add functionality to see if logged in
    return true
}

export const URL = 'http://localhost:8000';

export const signup = (values) => {
    axios.get(`http://${url}:8000/createuser`, {
        firstname: values.firstName,
    }).then(
      res => {
        console.log(res);
    }).catch(err => {
      console.log(err)
    });
}

export const UserContext = React.createContext();
