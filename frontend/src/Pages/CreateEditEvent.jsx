
import '../Styles/Form.css'
import React, { useState, useEffect } from 'react'

class CreateEditEvent extends React.Component {

    state = {
        eventName: '',
        eventDescription: '',
        eventDate: '',
        eventNumTickets: '',
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

    createEvent = () => {
        // post request to create new event
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                        {
                            this.props.isEditing ?
                            <a href={"/events/" + 1} className="button button-secondary back-button">← Back</a>
                            :
                            <></>
                        }
                        <form name="loginForm" onSubmit={this.props.isEditing ? this.editEvent : this.createEvent} className="form is-dark">
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
                                    value={this.state.eventNumTickets}
                                    onChange={(e) => this.setState({eventNumTickets: e.target.value})}
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