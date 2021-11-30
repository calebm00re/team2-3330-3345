import React from "react";

class ProfilePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isEditing: true,
            first: '',
            last: '',
            username: '',
            password: '',
            dob: '',
            userId: '',
        }
    }

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

    handleClick () {
        // this.props.onCardClick(this.props.index)
    }


    render () {
        return (
            <section className="profile-page" onClick={ e => this.handleClick() } >
                <div className="container-sidebar">
                    {
                        this.state.isEditing ?
                            <>
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
                            </>
                        :
                        <></>
                    }
                </div>
            </section>
        )
    }

}

export default ProfilePage;