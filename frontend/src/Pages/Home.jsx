import '../Styles/Home.css';
import EventCard from './EventCard';
import React, {useEffect, useState} from 'react';
import {UserRepository} from '../api/userRepository'
import axios from 'axios';
import { isLogin, URL } from '../utils/utils';

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

  const [numEvents, setNumEvents] = useState(0)
  const [events, setEvents] = useState({});
  const [tickets, setTickets] = useState({});


  const [loaded, setLoaded] = useState(false)

  const getEvent = (i, eventIDs) => {
    let eventID = eventIDs[i].eventID
    var eventsTemp = events;

    var event;
    axios.post(`${URL}/api/Event/`, {eventID: eventID}).then(res => {
      event = res.data.data[0]
      eventsTemp[i] = event
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setEvents(eventsTemp)
      let count = numEvents + 1 + parseInt(i)
      setNumEvents(count)
    });
  }


  const getMyTickets = () => {
    axios.post(`${URL}/api/tickedEvents/`, {organizerID: user.userID}).then(res => {
      console.log(res.data.data)
      setTickets(res.data.data)
    }).catch(err => {
        console.log(err)
    }).finally(() => {
      
    });
}

  const getMyEvents = () => {
      axios.post(`${URL}/api/ownedEvents/`, {organizerID: user.userID}).then(res => {
        // console.log(res.data.data)
        let eventIDs = res.data.data;
        for (var key in eventIDs) {
          getEvent(key, eventIDs)
        }
      }).catch(err => {
          console.log(err)
      }).finally(() => {
        
      });
  }

  useEffect(() => {
    getMyEvents();
    getMyTickets();
    setTimeout(function () {
      if (events) {
        setLoaded(true)
      } else {
        console.log("taking too long to load info")
      }
  }, 500);
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
                    <div className="">
                        {
                          !loaded ?
                          <div>
                            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="50px" height="50px" alt="loading"/>
                          </div>
                          :
                          <div className="event-carousel">
                            {
                              tickets.length > 0 ?
                              Object.keys(tickets).map((x, i) => <EventCard key={x} index={x} isTicket={true} event={tickets[i]} /> )
                              :
                              <p>No tickets</p>
                            }
                            
                          </div>
                          
                        }
                    </div>
                </div>
                <div className="content-section">
                    <h2 className="section-heading">Events you posted</h2>
                    <div className="">
                        {
                          !loaded ?
                          <div>
                            <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" width="50px" height="50px" alt="loading"/>
                          </div>
                          :
                          <div className="event-carousel">
                          {
                            events ?
                            Object.keys(events).map((x, i) => <EventCard key={x} index={x} isTicket={false} event={events[i]} /> )
                            :
                            <p>No events</p>
                          }
                          </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;