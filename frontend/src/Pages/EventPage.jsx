import Logo from '../Assets/landing-image.svg'
import React, {useState} from 'react'

function EventMetrics () {
    return (
        <>
            <div className="metrics-info">
                <span className="text-style-muted">🔒 Only visible by you</span>
                <h2 className="metrics-heading">Metrics</h2>
                <p>5/20 tickets sold</p>
            </div>
            
        </>
    )
}

function EventTickets () {
    const [ticket, setTicket] = useState('');

    const claimTicket = (ticket) => {
        console.log(ticket);
        // assign ticket to user
        // make it unavailable to other users

    }

    return (
        <>
        <div className="select-tickets">
            <select className="browse-input" onChange={ e => setTicket(e.target.value)}>
                <option value="">Choose a ticket</option>
                {
                    [1,2,3].map((x,i) => 
                        <option value={x} key={i}>Ticket {x}</option>
                    )
                }
            </select>
            <button className={ticket ? "button no-text-wrap" : "button no-text-wrap btn-disabled"} onClick={e => claimTicket(ticket)}>Claim Ticket</button>

        </div>
    </>
    )
}

export class EventPage extends React.Component {
    state = {
        eventId: ''
    };

    componentDidMount () {
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
                                <h2 className="event-title">Event 1</h2>
                                <p className="event-subtitle">A 1 line description of the event that teases what its about</p>
                                <div className="card-tags">
                                    <div className="">Music</div>
                                    <div className="">Min 1 year</div>
                                    <div className="">$55257.1</div>
                                    <div className="">5/2/2022</div>
                                    <div className="">San Ramone</div>
                                </div>
                                {
                                    this.props.ownerView ?
                                    <>
                                        <EventMetrics />
                                    </>
                                    :
                                    <>
                                        <div className="author-wrap">
                                            <div className="author-image"></div>
                                            Posted by Tom
                                        </div>
                                    </>
                                }
                                
                            </div>
                            <EventTickets />
                        </article>
                    </div>
                </section>
            </>
        )
    }

    
}

export default EventPage;
