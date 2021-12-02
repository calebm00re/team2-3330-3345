import '../Styles/Form.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { URL, UserContext } from '../utils/utils';
import { UserRepository } from '../api/userRepository';

const userRepository = new UserRepository();
const user = userRepository.currentUser();
const profileUser = "/profile/" + user.userID;
class CreateEditEvent extends React.Component {
    

    state = {
        eventName: '',
        eventDescription: '',
        eventDate: '',
        numTickets: '',
        eventLocation: '',
        eventGenre: '',
        eventID: 0,
    }


    componentDidMount ()  {

        if (this.props.isEditing) {
            this.getEventInfo();
        }

        return () => {}
    }

    getEventInfo = () => {
        const pathname = window.location.pathname;
        const eventIdString = pathname.substring(5);
        const eventId = eventIdString.match(/(\d+)/)[0];
        this.setState({eventId})

        axios.post(`${URL}/api/Event`, { eventID: eventId}).then(res => {
            const d = res.data.data[0];
            console.log(d);
            this.setState({
                eventName: d.eventName ? d.eventName : '',
                eventDescription: d.eventDescription ? d.eventDescription : '',
                eventDate: d.eventDate ? d.eventDate : new Date(),
                numTickets: d.numTickets ? d.numTickets : 10,
                eventLocation: d.eventLocation ? d.eventLocation : '',
                eventGenre: d.eventGenre ? d.eventGenre : '',
            })
        }).catch(err => {
            console.log(err)
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.props.isEditing) {
            console.log("editing event...")
            axios.put(`${URL}/api/editEvent`, { eventNameNew: this.state.eventName, eventLocationNew: this.state.eventLocation, eventGenreNew: this.state.eventGenre, eventDescriptionNew: this.state.eventGenre, eventDateNew: this.state.eventDate, eventTimeNew: null }).then(res => {
                const d = res.data.data;
                console.log(d);
                window.location.href = "/events/" + this.state.eventId;
            }).catch(err => {
                console.log(err)
            });
        } else {
            console.log("creating event...")
            axios.post(`${URL}/api/createEvent`, {organizerID: user.userID, eventName: this.state.eventName, eventDescription: this.state.eventDescription,
                eventDate: this.state.eventDate, numTickets: this.state.numTickets, eventLocation: this.state.eventLocation, eventGenre: this.state.eventGenre, organizerID: user.userID}).then(res => {
                const d = res.data.data;
                console.log(d);
                window.location.href = "/browse";
            }).catch(err => {
                console.log(err)
            });
        }
    }
    editEvent = (e) => {
    }

    createEvent = (e) => {
        e.preventDefault();
        console.log("createEvent WAS CALLED LETS GOOO");
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                        {
                            this.props.isEditing ?
                            <a href={"/events/" + this.state.eventId} className="button button-secondary back-button">← Back</a>
                            :
                            <></>
                        }
                        <form name="loginForm" onSubmit={e => this.handleFormSubmit(e)} className="form is-dark">
                            <div className="form-header"><h2>{this.props.isEditing ? "Edit event details" : "Post an event"}</h2></div>
                            <div className="form-field">
                                <label className="form-label" for="name">Name of event</label>
                                <input required class="form-input is-dark" type="text" id="name" name="name" placeholder="National Cherry Festival" 
                                    value={this.state.eventName}
                                    onChange={(e) => this.setState({eventName: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="description">Description</label>
                                <textarea required class="form-input is-dark" type="text" id="description" name="description" placeholder="A fun filled day of cherry picking, pies, games, and so much more!" 
                                    value={this.state.eventDescription}
                                    onChange={(e) => this.setState({eventDescription: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="description">Date</label>
                                <input required class="form-input is-dark" type="date" id="date" name="date" min="2021-12-01"
                                    value={this.state.eventDate}
                                    onChange={(e) => this.setState({eventDate: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="numTickets">Number of Tickets</label>
                                <input class="form-input is-dark" type="number" id="numTickets" name="numTickets" placeholder="50"
                                    value={this.state.numTickets}
                                    onChange={(e) => this.setState({numTickets: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="location">Location</label>
                                <input required class="form-input is-dark" type="text" id="location" name="location" placeholder="Dallas, TX"
                                    value={this.state.eventLocation}
                                    onChange={(e) => this.setState({eventLocation: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="categories">Genre</label>
                                <input required class="form-input is-dark" type="text" id="categories" name="categories" placeholder="Food, Culture, Festival"
                                    value={this.state.eventGenre}
                                    onChange={(e) => this.setState({eventGenre: e.target.value})}
                                />
                            </div>
                            <div id="form-error">Invalid info</div>
                            <button type="submit" className="form-button" value="Submit">{this.props.isEditing ? "Publish changes" : "Create event"}</button>
                        </form>
                    </div>
                </section>
            </>
        )
    }
    
}

export default CreateEditEvent;