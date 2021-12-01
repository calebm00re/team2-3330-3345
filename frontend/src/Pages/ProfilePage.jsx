import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Profile.css'
import EventCard from "./EventCard";
import { UserRepository } from "../api/userRepository";
import axios from "axios";
import { URL } from "../utils/utils";

const userRepository = new UserRepository();
const user = userRepository.currentUser();

class ProfilePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isEditing: true,
            emoji: '',
            bio: '',
            first: '',
            last: '',
            username: '',
            password: '',
            dob: '',
            userId: 0,
        }
    }

    getProfileInfo = () => {
        const pathname = window.location.pathname;
        const userIdString = pathname.substring(9);
        const userId = userIdString.match(/(\d+)/)[0];
        this.setState({userId});

        axios.post(`${URL}/api/getUser`, {userID: userId}).then(res => {
            const d = res.data.data;
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
                            <h1 className="profile-name">{this.state.first} {this.state.last}</h1>
                        </div>
                        <p className="profile-bio">{this.state.bio} </p>
                        
                        <div className="content-section">
                            <h2 className="section-heading">Events User has posted</h2>
                            {/* <div className="browse-grid">
                                {
                                    [1,2,3,4].map((x, i) => <EventCard key={x} index={x} isTicket={false} /> )
                                }
                            </div> */}
                        </div>
                        {
                            this.state.userId == user.userID ?
                                <Link to="/editprofile" className="button top-right-button button-large">Edit Profile</Link>
                            :
                            <>
                            </>
                        }
                    </div>
                </div>
            </section>
        )
    }

}

export default ProfilePage;