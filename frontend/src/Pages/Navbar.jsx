import '../Styles/Navbar.css'
import logo from '../Assets/Logo.svg'

function Navbar () {

    return (
        <section className="nav section" id="nav">
            <div className="container nav-container">
                <a id="logo" className="logo-button" href="/">
                    <img src={logo}></img>
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