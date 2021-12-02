import axios from 'axios';
import React from 'react';

// ENTER YOUR EC2 PUBLIC IP/URL HERE
const ec2_url = '3.143.233.193:8000'
// CHANGE THIS TO TRUE IF HOSTING ON EC2, MAKE SURE TO ADD IP/URL ABOVE
const ec2 = true;
// USE localhost OR ec2_url ACCORDING TO ENVIRONMENT
export const URL = ec2 ? ec2_url : 'http://localhost:8000'

export const isLogin = () => {
    // add functionality to see if logged in
    return true
}


// export const URL = 'http://localhost:8000';
// export const URL = ec2_url;

// export const signup = (values) => {
//     axios.get(`http://${url}:8000/createuser`, {
//         firstname: values.firstName,
//     }).then(
//       res => {
//         console.log(res);
//     }).catch(err => {
//       console.log(err)
//     });
// }

export const UserContext = React.createContext();
