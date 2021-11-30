import React from 'react'
// import axios from 'axios';
// const ec2_url = ''
// const ec2 = false;
// const url = ec2 ? ec2_url : 'localhost'

class ProfileEdit extends React.Component {



    // getProfileInfo (e) {
    //     e.preventDefault();
    //     axios.post(`http://${url}:8000/api/login`, {userName: userName, psw: password}).then(res => {
    //         console.log(res);
    //         history.push('/home')
    //     }).catch(err => {
    //         console.log(err)
    //         document.getElementById("form-error").style.display = "block";
    //     });
    // }



    handleSubmit () {
        // this.props.onCardClick(this.props.index)
    }

    render () {
        return (
            <section className="profile-page" onClick={ e => this.handleClick() } >
                <div className="container-sidebar">
                    <h1 className="landing-title">Profile</h1>
                    <h2 className="landing-subtitle">user account info</h2>
                    <ul>
                        <li>First name: {this.state.first}</li>
                        <li>Last name: {this.state.last}</li>
                        <li>Username: {this.state.username}</li>
                        <li>Password: {this.state.password}</li>
                        <li>DOB: {this.state.dob}</li>
                        <li>User ID: {this.state.userID}</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default ProfileEdit;