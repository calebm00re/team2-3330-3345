import Logo from '../Assets/landing-image.svg'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { UserRepository } from '../api/userRepository';

const userRepository = new UserRepository();
const user = userRepository.currentUser();

function EventControlCard (props) {
    return (
        <>
            <div className="metrics-info">
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
            </div>
            
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
                        <select className="browse-input" onChange={ e => handleTicketSelection(e.target.value)}>
                            <option value="">Select a ticket</option>
                            {
                                [1,2,3].map((x,i) => 
                                    <option value={x} key={i}>Ticket {x}</option>
                                )
                            }
                        </select>
                        <button className={ticketSelected ? "button no-text-wrap" : "button no-text-wrap btn-disabled"} onClick={e => claimTicket(ticket)}>Claim Ticket</button>
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

    const getReviews = () => {
    }

    return (
    <>
        <div className="event-page reviews-list">
            <h2>Reviews</h2>
            {
                [1,2].map((x, i) => <>
                     <div className="review-card">
                        <div className="review-header">
                            <Link className="author-wrap" to="/profile/1">
                                <div className="emoji-output emoji-small">
                                { props.emoji ? props.emoji : "😶" }
                                </div>
                                <span className="">Tom</span>
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
        eventId: ''
    };

    componentDidMount () {
        const pathname = window.location.pathname;
        const eventId = pathname.substring(8);
        console.log(eventId)
        this.setState({eventId});
        // this.loadEventDetails();
    }

    loadEventDetails () {
        // console.log(eventId);
        
        let id = this.props.match.params.eventId;
        console.log(id)
        // if (id) {
        //     this.productsRepository.getProduct(id)
        //         .then(product =>
        //             this.setState({product})
        //         );
        // }
        // assign ticket to user
        // make it unavailable to other users

    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                        <a href="/browse" className="button button-secondary back-button">← Back</a>
                        <article className="event-page">
                            <img src={Logo} loading="lazy" width="30%" alt="Logo" className="event-img" />
                    
                            <div className="card-header-info">
                                <div className="event-flex-layout">
                                    <div>
                                        <h2 className="event-title">Event {this.state.eventId}</h2>
                                        <p className="event-subtitle">A 1 line description of the event that teases what its about</p>
                                        <div className="card-tags">
                                            <div className="">Music</div>
                                            <div className="">Min 1 year</div>
                                            <div className="">$55257.1</div>
                                            <div className="">5/2/2022</div>
                                            <div className="">San Ramone</div>
                                        </div>
                                        <Link className="author-wrap" to="/profile/1">
                                            <div className="emoji-output emoji-small">
                                            { this.state.emoji ? this.state.emoji : "😶" }
                                            </div>
                                            <span className="">{user.firstName}</span>
                                        </Link>
                                    </div>
                                    <div className="author-wrap">
                                        {
                                            this.props.ownerView ?
                                            <>
                                                <EventControlCard eventId={this.state.eventId} />
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
