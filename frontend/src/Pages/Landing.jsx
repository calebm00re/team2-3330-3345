import '../Styles/Landing.css';
import LandingImage from '../Assets/landing-image.svg'
import Typing from 'react-typing-animation';
import EventCard from './EventCard';
import EventReviews from './EventReviews';
import AppScreenshot from '../Assets/app-preview.png';

function Landing () {

    return (
        <section>
            <div className="container">
                <div className="landing-grid">
                    <div className="landing-content">
                        <h1 className="landing-title">Start your
                        <Typing className="typing-text" speed={100} hideCursor={true}>
                            <span className="text-color-red"> festival</span>
                            <Typing.Backspace count={20} delay={2000} />
                            <span className="text-color-red"> party</span>
                            <Typing.Backspace count={20} delay={2000} />
                            <span className="text-color-red"> concert</span>
                            <Typing.Backspace count={20} delay={2000} />
                            <span className="text-color-red"> hangout</span>
                            <Typing.Backspace count={20} delay={2000} />
                            <span className="text-color-red"> event</span>
                        </Typing>
                        </h1>
                        <p className="landing-subtitle">Post or browse events and meet people in your community</p>
                        <a className="button landing-button" value="Submit" href="/signup">Get Started →</a>
                    </div>
                    <img className="landing-image" alt="Party" src={LandingImage}></img>
                </div>
                <img src={AppScreenshot} className="app-preview" alt="app"/>
                <div className="landing-grid">
                    <div className="landing-visual">
                        <div className="event-carousel">
                            <EventCard />
                            <EventCard />
                        </div>
                    </div>
                    <div className="landing-content">
                        <h2 className="landing-title font-size-2">Real events from real people</h2>
                        <p className="landing-subtitle text-style-muted">You or anyone can create community events, meaning there's something for everyone</p>
                    </div>
                </div>
                <div className="landing-grid">
                    <div className="landing-content">
                        <h2 className="landing-title font-size-2">Authentic reviews and conversation</h2>
                        <p className="landing-subtitle text-style-muted">Engage with your community by sharing and reading honest reviews</p>
                    </div>
                    <div className="landing-visual">
                        <div className="event-carousel">
                            <EventReviews />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;