import Logo from '../Assets/landing-image.svg'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { UserRepository } from '../api/userRepository';
import axios from 'axios';
import { URL } from '../utils/utils';

const userRepository = new UserRepository();
const user = userRepository.currentUser();
let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"];
class EventCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            organizerName: '',
        }
    }



    getProfileInfo = () => {
        axios.post(`${URL}/api/getUser`, {userID: this.props.event.organizerID}).then(res => {
            const d = res.data.data;
            let fullName = d[0].firstName + ' ' + d[0].lastName;
            this.setState({organizerName: fullName})
            
        }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.getProfileInfo();
    }

    render () {
        return (
            <article className="event-card">
                <div className="card-header-info">
                    {
                        false ?
                        <img src={Logo} loading="lazy" width="30%" alt="Logo" className="event-img" />
                        :
                        <></>
                    }
                    <div className="event-flex-layout">
                        <h2 className="event-title">{this.props.event.eventName ? this.props.event.eventName : "Event name"}</h2>
                        <Link className="author-wrap" to={"/profile/" + this.props.event.organizerID}>
                            <div className="emoji-output emoji-small">
                            { emojies[Math.floor(Math.random()*emojies.length)] }
                            </div>
                            <span className="">{this.state.organizerName}</span>
                        </Link>
                    </div>
                    <p className="event-subtitle">{this.props.event.eventDescription}</p>
                </div>
                {
                    !this.props.isTicket ?
                    <>
                        <div className="card-tags">
                            { this.props.event.eventGenre ? <div className="">{this.props.event.eventGenre}</div> : <></>}
                            { this.props.event.eventLocation ? <div className="">{this.props.event.eventLocation}</div> : <></>}
                            {/* { this.props.event.eventDate ? <div className="">{this.props.event.eventDate}</div> : <></>} */}
                            {/* { this.props.event.eventTime ? <div className="">{this.props.event.eventTime}</div> : <></>} */}
                        </div>
                    </>
                    :
                    <></>
                }
                
                <div className="card-buttons">
                    <Link to={"/events/" + this.props.event.eventID} className="button">{!this.props.isTicket ? "Details" : "View Ticket"}</Link>
                </div>
            </article>
        )
    }
}

export default EventCard;

