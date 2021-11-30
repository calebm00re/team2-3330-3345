import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Profile.css'
import EventCard from "./EventCard";

class ProfilePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isEditing: true,
            emoji: '',
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

    componentDidMount () {
    }

    handleClick () {
        // this.props.onCardClick(this.props.index)
    }
    setRandomEmoji () {
        let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"]
        let randomEmoji = emojies[Math.floor(Math.random()*emojies.length)];
        this.setState({emoji: randomEmoji});
    }


    render () {
        return (
            <section className="profile-page" onClick={ e => this.handleClick() } >
                <div className="container-sidebar">
                    <div className="content-card">
                        <div className="profile-icon-name">
                            <div className="emoji-output">
                                { this.state.emoji ? this.state.emoji : "😶" }
                            </div>
                            <h1 className="profile-name">First Last</h1>
                        </div>
                        <p className="profile-bio">User Bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        <div className="content-section">
                            <h2 className="section-heading">Events User has posted</h2>
                            <div className="browse-grid">
                                {
                                    [1,2,3,4].map((x, i) => <EventCard key={x} index={x} isTicket={false} /> )
                                }
                            </div>
                        </div>
                        
                        <Link to="/editprofile" className="button top-right-button button-large">Edit Profile</Link>
                    </div>
                </div>
            </section>
        )
    }

}

export default ProfilePage;