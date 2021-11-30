import '../Styles/Home.css';
import '../Styles/Browse.css'
import 'react-pro-sidebar/dist/css/styles.css';
import EventCard from './EventCard'
import EventPage from './EventPage';
import React from 'react'
import { Link } from 'react-router-dom';

class BrowsePage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            events: [1,2,3,4,5,6,7,8],
            searchTerm: ''
        }
    }

    getEvents () {
        // get all events and store array of events in this.state.events

        // axios.get(`http://${url}:8000/events/`, {param: param}).then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err)
        // });;
    }
    getEventsFiltered () {
        // once we have events, we can make the search more sophisticated
        let events = this.state.events;
        if (this.state.searchTerm !== "") {
            events = events.filter(i => ((i + '') === this.state.searchTerm))
        }
        return events
    }

    handleSearch (searchTerm) {
        console.log(searchTerm)
        this.setState({searchTerm})
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                    {
                        !this.state.showPage && <>
                        
                        <div className="browse-controls">
                            <input
                                type="search"
                                className="browse-input"
                                value={this.state.searchTerm}
                                placeholder="Search for an event, category, or location..."
                                onChange={ e => this.handleSearch(e.target.value) }
                            />
                            <Link to="/post" className="button no-text-wrap">Post an event</Link>
                        </div>
                        <div className="browse-grid">
                            {
                                this.getEventsFiltered().map(x => (
                                    <EventCard key={x} index={x} />
                                ))
                            }
                        </div>
                        </>
                    }
                        
                    </div>
                </section>
            </>
        );
    }
}

export default BrowsePage;