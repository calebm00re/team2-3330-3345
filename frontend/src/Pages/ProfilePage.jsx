import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Profile.css'
import EventCard from "./EventCard";
import { UserRepository } from "../api/userRepository";
import axios from "axios";
import { URL } from "../utils/utils";


const userRepository = new UserRepository();
var user;
class ProfilePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            events: {},
            isEditing: true,
            emoji: '',
            bio: '',
            first: '',
            last: '',
            username: '',
            password: '',
            dob: '',
            userId: 0,
            User: null
        }
    }

    getEvents () {
        axios.post(`${URL}/api/ownedEvents`, {organizerID: user.userID}).then(res => {
            this.setState({events: res.data.data})
            console.log(this.state.events)
        }).catch(err => {
            console.log(err)
        });

    }

    getProfileInfo = () => {
        user = userRepository.currentUser();
        console.log(user.userID)
        axios.post(`${URL}/api/getUser`, {userID: user.userID}).then(res => {
            const d = res.data.data;
            this.setState({userId: d[0].userID})
            this.setState({bio: d[0].bio})
            this.setState({first: d[0].firstName})
            this.setState({last: d[0].lastName})
            this.setState({dob: d[0].dob})
            this.setState({bio: d[0].bio})
            
        }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount () {   
        this.getProfileInfo();
        this.setRandomEmoji();
        this.getEvents();     
    }

    handleClick () {
        // this.props.onCardClick(this.props.index)
    }

    setRandomEmoji () {
        let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"]
        let randomEmoji = emojies[user.userID % 23];
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
                            <h1 className="profile-name">{this.state.first} {this.state.last}</h1>
                        </div>
                        <p className="profile-bio">{this.state.bio} </p>
                        
                        <div className="content-section">
                            <h2 className="section-heading">Events User has posted:</h2>
                            {<div className="browse-grid">
                            {
                                Object.keys(this.state.events).map((x, i) => (
                                    <EventCard key={x} index={i} event={this.state.events[i]}/>
                                ))
                            }
                        </div>}
                        </div>
                            <Link to="/editprofile" className="button top-right-button button-large">Edit Profile</Link>
                    </div>
                </div>
            </section>
        )
    }

}

export default ProfilePage;