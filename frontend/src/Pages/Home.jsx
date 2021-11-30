import '../Styles/Home.css';
import EventCard from './EventCard';
import React from 'react';

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

    return (
        <section>
            <div className="container-sidebar">
                        <div className="content-section">
                            <div className="content-card">
                                <div className="event-flex-layout">
                                    <h1 className="">Welcome <span className="user-name">Thomas</span></h1>
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
                                    [1,2,3,4,5,6,7,9,10].map((x, i) => <EventCard key={x} index={x} isTicket={true} /> )
                                }
                            </div>
                        </div>
                        <div className="content-section">
                            <h2 className="section-heading">Events you posted</h2>
                            <div className="event-carousel">
                                {
                                    [1,2,3,4,5,6,7,9,10].map((x, i) => <EventCard key={x} index={x} isTicket={false} /> )
                                }
                            </div>
                        </div>
            </div>
        </section>
    );
}

export default Home;