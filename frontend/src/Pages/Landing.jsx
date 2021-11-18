import '../Styles/Landing.css';
import LandingImage from '../Assets/landing-image.svg'
import Typing from 'react-typing-animation';

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
            </div>
        </section>
    );
}

export default Landing;