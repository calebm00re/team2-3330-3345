import '../Styles/Home.css';
import '../Styles/Browse.css'
import 'react-pro-sidebar/dist/css/styles.css';
import EventCard from './EventCard'
import React from 'react'
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

    

    handleSearch (searchTerm) {     //search for an event
        this.setState({searchTerm})

        if (searchTerm !== "") {
            console.log(searchTerm)
        }
    }

    componentDidMount () {
        this.getEvents();
    }

    render () {
        return (
            <>
                <section className="browse">
                    <div className="container-sidebar">
                    {
                        !this.state.showPage && <>
                        <div className="browse-grid">
                            {                                   //gets all events and puts them all on the browse page
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