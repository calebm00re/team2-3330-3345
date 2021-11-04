import '../Styles/Landing.css';
import LandingImage from '../Assets/landing-image.svg'

function Landing () {

    return (
        <section>
            <div className="container">
                <div className="landing-grid">
                    <div className="landing-content">
                        <h1 className="landing-title">Start a <span className="text-color-red">festival</span></h1>
                        <p className="landing-subtitle">Post or browse events and meet people in your community</p>
                        <a className="button landing-button" value="Submit" href="/signup">Get Started →</a>
                    </div>
                    <img className="landing-image"  src={LandingImage}></img>
                </div>
            </div>
        </section>
    );
}

export default Landing;