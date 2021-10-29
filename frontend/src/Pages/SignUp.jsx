import '../Styles/Form.css';

function SignUp () {

    const closeModal = (props) => { return props.onClick }

  return (
    <div className="section">
        <div className="container form-container">
            <form name="signUpForm" onSubmit="" className="form">
                <div className="form-header">
                    <h2>Sign Up</h2>
                </div>
                <div className="double-form-field-wrap">
                    <div className="form-field">
                        <label className="form-label" for="firstName">First name</label>
                        <input class="form-input" type="text" id="firstName" name="firstName" placeholder="Johnny" />
                    </div>
                    <div className="form-field">
                        <label className="form-label" for="lastName">Last name</label>
                        <input class="form-input" type="text" id="lastName" name="lastName" placeholder="Appleseed" />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label" for="username">Username</label>
                    <input class="form-input" type="text" id="username" name="username" placeholder="jappleseed@yahoo.com" />
                </div>
                <div className="form-field">
                    <label className="form-label" for="password">Password</label>
                    <input class="form-input" type="password" id="password" name="password" placeholder="···" />
                </div>
                <a type="submit" className="form-button" value="Submit" href="/home">Signup</a>
            </form>
            <div className="form-tail" >
                <a className="form-tail-text-link" href="/login">Already have an account? <span className="link-color">Login</span></a>
            </div>
        </div>
    </div>
  );
}

export default SignUp;
