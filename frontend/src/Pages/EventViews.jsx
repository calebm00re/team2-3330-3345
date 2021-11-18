import Logo from '../Assets/landing-image.svg'
import React from 'react'

class EventCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    handleClick () {
        this.props.onCardClick(this.props.index)
    }

    render () {
        return (
            <article className="event-card" onClick={ e => this.handleClick() } >
                <div className="card-header-info">
                    <img src={Logo} loading="lazy" width="30%" alt="Logo" className="event-img" />
                    <h2 className="event-title">Event {this.props.index}</h2>
                    <p className="event-subtitle">A 1 line description of the event that teases what its about</p>
                </div>
                <div className="card-tags">
                    <div className="">Music</div>
                    <div className="">Min 1 year</div>
                    <div className="">$55257.1</div>
                    <div className="">5/2/2022</div>
                    <div className="">San Ramone</div>
                </div>
                <div className="card-buttons">
                    {/* <Link href="" className="button button-secondary">Details</Link> */}
                    <a className="button">Browse Tickets</a>
                </div>
            </article>
        )
    }
}

export default EventCard;

export const EventPage = (props) => <>
    <article className="event-page">

    <a href="/browse" className="button button-secondary">Back</a>
        <div className="card-header-info">
            <img src={Logo} loading="lazy" width="30%" alt="Logo" className="event-img" />
            <h2 className="event-title">Event {props.selectedPageIndex}</h2>
            <p className="event-subtitle">A 1 line description of the event that teases what its about</p>
        </div>
        <div className="card-tags">
            <div className="">Music</div>
            <div className="">Min 1 year</div>
            <div className="">$55257.1</div>
            <div className="">5/2/2022</div>
            <div className="">San Ramone</div>
        </div>
        {/* <div className="card-buttons">
            <Link href="" className="button button-secondary">Details</Link>
            <a href="" className="button">Browse Tickets</a>
        </div> */}
    </article>
</>