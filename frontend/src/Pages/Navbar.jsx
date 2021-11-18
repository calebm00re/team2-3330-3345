import '../Styles/Navbar.css'
import logo from '../Assets/Logo.png'

function Navbar () {

    return (
        <section className="nav" id="nav">
            <div className="container nav-container">
                <a id="logo" className="logo-button" href="/">
                    <img className="logo" src={logo} alt="logo"></img>
                </a>
                <div className="nav-menu">
                    <a id="login-btn" className="button button-secondary" href="/login">
                        Login
                    </a>
                    <a id="signup-btn" className="button" href="/signup">
                        Sign Up
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Navbar;