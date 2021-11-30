import '../Styles/Home.css';
import EventCard from './EventCard';


function Home () {

    return (
        <section>
            <div className="container-sidebar">
                <div className="landing-grid">
                    <div className="landing-content">
                        <div className="content-section">
                            <h2 className="section-heading">Events you have tickets to</h2>
                            <div className="event-carousel">
                                {
                                    [1,2,3,4,5].map((x, i) => <>
                                        <EventCard key={x} index={x} isTicket={true} />
                                    </>)
                                }
                            </div>
                        </div>
                        <div className="content-section">
                            <h2 className="section-heading">Events you posted</h2>
                            <div className="event-carousel">
                                {
                                    [1,2,3,4,5,6,7,9,10].map((x, i) => <>
                                        <EventCard key={x} index={x} />
                                    </>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;