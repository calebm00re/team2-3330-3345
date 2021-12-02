import Logo from '../Assets/landing-image.svg'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { UserRepository } from '../api/userRepository';
import axios from 'axios';
import { URL } from '../utils/utils';

const userRepository = new UserRepository();
const user = userRepository.currentUser();
let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"];

function EventControlCard (props) {
    return (
        <>
            {/* <div className="metrics-info">
                <p className="metrics-visibility-label">🔒 Only visible by you</p>
                <h2>5/20 tickets claimed</h2>
                <p className="text-style-muted">Attendees:</p>
                <div className="attendees-list">
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((x,i) => <>
                             <div className="author-wrap">
                                <div className="author-image"></div>
                                Posted by Tom
                            </div>
                        </>)
                    }
                </div>
                <Link to={"../edit/" + props.eventId} className={"button button-secondary no-text-wrap"} >Edit Event</Link>
            </div> */}
            
        </>
    )
}

function EventTickets () {
    const [ticket, setTicket] = useState('');
    const [ticketSelected, setTicketSelected] = useState(false);
    const [ticketClaimed, setTicketClaimed] = useState(false);

    const handleTicketSelection = (ticket) => {
        if (ticket != "") {
            setTicket(ticket);
            setTicketSelected(true);
        }
    }

    const claimTicket = () => {
        setTicket(ticket);
        setTicketClaimed(true);
    }

    return (
    <>
        <div className="select-tickets-wrapper">
            {
                ticketClaimed ?
                <>
                    <div className="ticket-selected">
                        Got your ticket: {ticket}
                    </div>
                </>
                :
                <>
                    <h2 className="">Claim a ticket to reserve your spot</h2>
                    <div className="select-tickets">
                        {/* <select className="browse-input" onChange={ e => handleTicketSelection(e.target.value)}>
                            <option value="">Select a ticket</option>
                            {
                                [1,2,3].map((x,i) => 
                                    <option value={x} key={i}>Ticket {x}</option>
                                )
                            }
                        </select> */}
                        <button className={"button no-text-wrap"} onClick={e => claimTicket(ticket)}>Claim Ticket</button>
                    </div>
                </>
            }
            
        </div>
    </>
    )
}


function ReviewForm () {
    const [reviewBody, setReviewBody] = useState([]);
    const [reviewRating, setReviewRating] = useState([]);

    const handleSubmit = () => {
    }

    return (
        <>
            <div className="review-card">
                <form name="review-form" className="review-form">
                    <input className="form-input" placeholder="Had a good time? Leave a review" />

                    <select className="form-input" >
                        <option valaue="5">⭐⭐⭐⭐⭐</option>
                        <option valaue="4">⭐⭐⭐⭐</option>
                        <option valaue="3">⭐⭐⭐</option>
                        <option valaue="2">⭐⭐</option>
                        <option valaue="1">⭐</option>
                    </select>
                    <button className="button">Submit Review</button>
                </form>
            </div>
        </>
    )
}

function EventReviews (props) {
    const [reviews, setReviews] = useState([]);
    const [emoji, setEmoji] = useState([]);

    const getReviews = () => {
    }

    return (
    <>
        <div className="event-page reviews-list">
            <h2>Reviews</h2>
            {
                [1,2].map((x, i) => <>
                     <div className="review-card" key={x}>
                        <div className="review-header">
                            <Link className="author-wrap" to="/profile/1">
                                <div className="emoji-output emoji-small">
                                { emojies[Math.floor(Math.random()*emojies.length)] }
                                </div>
                                <span className="">Anonymous</span>
                            </Link>
                            <p>Posted 11/2/3 3:02pm</p>
                        </div>
                        <div className="rating">
                            {
                                [1,2,3,4,5].map((x, i) => <>
                                    ⭐
                                </>)
                            }
                        </div>
                        <p className="review-body">Review Body</p>
                    </div>
                </>)
            }
            <ReviewForm />
           
            
        </div>
    </>
    )
}

export class EventPage extends React.Component {
    state = {
        event: {},
        organizerName: '',
        emoji: '',
    };

    setRandomEmoji () {
        console.log("in emoji func")
        let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"]
        let randomEmoji = emojies[this.state.event.organizerID % 23];
        this.setState({emoji: randomEmoji});
    }

    loadEventDetails () {
        const pathname = window.location.pathname;
        const eventId = pathname.substring(8);

        axios.post(`${URL}/api/Event/`, {eventID: eventId}).then(res => {
            this.setState({event: res.data.data[0]})
            console.log("org id: " + this.state.event.organizerID)
            this.getProfileInfo();
        }).catch(err => {
            console.log(err)
        });
        
        //get event by eventID

    }

    getProfileInfo = () => {
        axios.post(`${URL}/api/getUser`, {userID: this.state.event.organizerID}).then(res => {
            const d = res.data.data[0];
            let fullName = d.firstName + ' ' + d.lastName;
            this.setState({organizerName: fullName})
            this.setRandomEmoji()
        }).catch(err => {
            console.log(err)
        });
    }


    componentDidMount () {
        this.loadEventDetails();
        console.log(this.state.event.organizerID, user.userID)
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                        <a href="/browse" className="button button-secondary back-button">← Browse</a>
                        <article className="event-page">
                            {/* <img src={Logo} loading="lazy" width="30%" alt="Logo" className="event-img" /> */}
                    
                            <div className="card-header-info">
                                <div className="event-page-layout">
                                    <div>
                                    <h2 className="event-title">{this.state.event.eventName}</h2>
                                        <p className="event-subtitle">{this.state.event.eventDescription}</p>
                                        <div className="card-tags">
                                            { this.state.event.eventGenre ? <div className="">{this.state.event.eventGenre}</div> : <></>}
                                            { this.state.event.eventLocation ? <div className="">{this.state.event.eventLocation}</div> : <></>}
                                            {/* { this.state.event.eventDate ? <div className="">{this.state.event.eventDate}</div> : <></>}
                                            { this.state.event.eventTime ? <div className="">{this.state.event.eventTime}</div> : <></>} */}
                                        </div>
                                        <Link className="author-wrap" to={"/profile/" + this.state.event.organizerID}>
                                            <div className="emoji-output emoji-small">
                                            { this.state.emoji }
                                            </div>
                                            <span className="">{this.state.organizerName}</span>
                                        </Link>
                                    </div>
                                    <div className="">
                                        {
                                            this.state.event.organizerID == user.userID ?
                                            <>
                                                <EventControlCard eventId={this.state.event.eventID} />
                                            </>
                                            :
                                            <>
                                            </>
                                        }
                                    </div>
                                </div>
                                
                                
                            </div>
                            <EventTickets />
                        </article>
                        <EventReviews />
                    </div>
                </section>
            </>
        )
    }

    
}

export default EventPage;
