import '../Styles/Home.css';
import EventCard from './EventCard';
import React, {useEffect, useState} from 'react';
import {UserRepository} from '../api/userRepository'
import axios from 'axios';
import { URL } from '../utils/utils';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }
    render() {
      return (
        <p className="App-clock">
          {this.state.time}
        </p>
      );
    }
  }
  

function Home () {

  const userRepository = new UserRepository();

  const user = userRepository.currentUser();

  const [events, setEvents] = useState({});

  const getMyTickets = () => {
    // axios.post(`${URL}/api/Tickets/`, {}).then(res => {
    //     setEvents(res.data.data)
    // }).catch(err => {
    //     console.log(err)
    // });
}

  const getEvent = (eventID) => {

    
  }
  //get event by eventID

  const loadAllEvents = (eventIDs) => {

    var eventsTemp = {}
    for (var key in eventIDs) {
      let eventID = eventIDs[key].eventID

      var event = {};
      axios.post(`${URL}/api/Event/`, {eventID: eventID}).then(res => {
          console.log(res.data.data[0]);
          event = res.data.data[0]
      }).catch(err => {
          console.log(err)
      });

      console.log(event)
    }
    console.log(eventsTemp)
    // setEvents(eventsTemp)
  }

  const getMyEvents = () => {
      axios.post(`${URL}/api/ownedEvents/`, {organizerID: user.userID}).then(res => {
        // console.log(res.data.data)
        let eventIDs = res.data.data;
        loadAllEvents(eventIDs)
      }).catch(err => {
          console.log(err)
      });
  }

  useEffect(() => {
    getMyEvents();
  }, [])

    return (
        <section>
            <div className="container-sidebar">
                        <div className="content-section">
                            <div className="content-card">
                                <div className="event-flex-layout">
                                    <h1 className="">Welcome <span className="user-name">{user.firstName}</span></h1>
                                    <Clock />
                                </div>
                                <p>
                                    
                                </p>
                            </div>
                        </div>
                        <div className="content-section">
                            <h2 className="section-heading">Events you have tickets to</h2>
                            <div className="event-carousel">
                                {
                                    Object.keys(events).map((x, i) => <EventCard key={x} index={x} isTicket={true} event={events[i]} /> )
                                }
                            </div>
                        </div>
                        <div className="content-section">
                            <h2 className="section-heading">Events you posted</h2>
                            <div className="event-carousel">
                                {
                                    Object.keys(events).map((x, i) => <EventCard key={x} index={x} isTicket={false} event={events[x]} /> )
                                }
                            </div>
                        </div>
            </div>
        </section>
    );
}

export default Home;