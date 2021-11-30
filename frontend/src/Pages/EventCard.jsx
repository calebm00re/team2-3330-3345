import Logo from '../Assets/landing-image.svg'
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

class EventCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <article className="event-card">
                <div className="card-header-info">
                    {
                        !this.props.isTicket ?
                        <img src={Logo} loading="lazy" width="30%" alt="Logo" className="event-img" />
                        :
                        <></>
                    }
                    <div className="event-flex-layout">
                        <h2 className="event-title">Event {this.props.index}</h2>
                        <div className="author-wrap">
                            <div className="author-image text-style-muted"></div>
                            Posted by <span className="author-name">Tom</span>
                        </div>
                    </div>
                    <p className="event-subtitle">A 1 line description of the event that teases what its about</p>
                </div>
                {
                    !this.props.isTicket ?
                    <>
                        <div className="card-tags">
                            <div className="">Music</div>
                            <div className="">Min 1 year</div>
                            <div className="">$55257.1</div>
                            <div className="">5/2/2022</div>
                            <div className="">San Ramone</div>
                        </div>
                    </>
                    :
                    <></>
                }
                
                <div className="card-buttons">
                    <Link to={"events/" + this.props.index} className="button">Details</Link>
                </div>
            </article>
        )
    }
}

export default EventCard;

