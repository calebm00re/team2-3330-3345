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
        eventCategories: ''
    }


    componentDidMount ()  {

        if (true) {
            this.getEventInfo();
        }

        return () => {}
    }

    getEventInfo = () => {
        //get event info is isEditing and there is an event id
    }

    editEvent = () => {
        // put request to edit event details
    }

    createEvent = (e) => {
        e.preventDefault();
        console.log("createEvent WAS CALLED LETS GOOO");
        axios.post(`${URL}/api/createEvent`, {organizerID: user.userID, eventName: this.state.eventName, eventDescription: this.state.eventDescription,
            eventDate: this.state.eventDate, numTickets: this.state.numTickets, eventLocation: this.state.eventLocation, eventCategories: this.state.eventCategories, organizerID: user.userID}).then(res => {
            const d = res.data.data;
            console.log(d);
            window.location.href = profileUser;
        }).catch(err => {
            console.log(err)
        });
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                        {
                            this.props.isEditing ?
                            <a href={profileUser} className="button button-secondary back-button">← Back</a>
                            :
                            <></>
                        }
                        <form name="loginForm" onSubmit={this.createEvent} className="form is-dark">
                            <div className="form-header"><h2>{this.props.isEditing ? "Edit event details" : "Post an event"}</h2></div>
                            <div className="form-field">
                                <label className="form-label" for="name">Name of event</label>
                                <input class="form-input is-dark" type="text" id="name" name="name" placeholder="National Cherry Festival" 
                                    value={this.state.eventName}
                                    onChange={(e) => this.setState({eventName: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="description">Description</label>
                                <textarea class="form-input is-dark" type="text" id="description" name="description" placeholder="A fun filled day of cherry picking, pies, games, and so much more!" 
                                    value={this.state.eventDescription}
                                    onChange={(e) => this.setState({eventDescription: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="description">Date</label>
                                <input class="form-input is-dark" type="date" id="date" name="date" min="2021-12-01"
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
                                <input class="form-input is-dark" type="text" id="location" name="location" placeholder="Dallas, TX"
                                    value={this.state.eventLocation}
                                    onChange={(e) => this.setState({eventLocation: e.target.value})}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="categories">Categories</label>
                                <input class="form-input is-dark" type="text" id="categories" name="categories" placeholder="Food, Culture, Festival"
                                    value={this.state.eventCategories}
                                    onChange={(e) => this.setState({eventCategories: e.target.value})}
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