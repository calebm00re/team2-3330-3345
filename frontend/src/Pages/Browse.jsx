import '../Styles/Home.css';
import '../Styles/Browse.css'
import 'react-pro-sidebar/dist/css/styles.css';
import EventCard from './EventCard'
import EventPage from './EventPage';
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../utils/utils';

class BrowsePage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            events: {},
            searchTerm: ''
        }
    }

    getEvents () {
        axios.post(`${URL}/api/Events/`, {}).then(res => {
            this.setState({events: res.data.data})
            console.log(this.state.events)
        }).catch(err => {
            console.log(err)
        });

    }

    filterEvents () {
        // once we have events, we can make the search more sophisticated
        // let events = this.state.events;
        // events = Object.values(events).filter(i => ((i + '') === this.state.searchTerm))
        
        // this.setState({events})
    }

    handleSearch (searchTerm) {
        this.setState({searchTerm})

        if (searchTerm !== "") {
            console.log(searchTerm)
            this.filterEvents();
        }
    }

    componentDidMount () {
        this.getEvents();
        this.filterEvents();
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                    {
                        !this.state.showPage && <>
                        
                        {/* <div className="browse-controls">
                            <input
                                type="search"
                                className="browse-input"
                                value={this.state.searchTerm}
                                placeholder="Search for an event, category, or location..."
                                onChange={ e => this.handleSearch(e.target.value) }
                            />
                            <Link to="/post" className="button no-text-wrap">Search</Link>
                        </div> */}
                        <div className="browse-grid">
                            {
                                Object.keys(this.state.events).map((x, i) => (
                                    <EventCard key={x} index={i} event={this.state.events[i]}/>
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