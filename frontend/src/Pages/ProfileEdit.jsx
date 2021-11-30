import React from 'react'
// import axios from 'axios';
// const ec2_url = ''
// const ec2 = false;
// const url = ec2 ? ec2_url : 'localhost'
import { Link } from 'react-router-dom';

class ProfileEdit extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isEditing: true,
            emoji: '',
            first: '',
            last: '',
            username: '',
            password: '',
            dob: '',
            userId: '',
        }
    }

    // getProfileInfo (e) {
    //     e.preventDefault();
    //     axios.post(`http://${url}:8000/api/login`, {userName: userName, psw: password}).then(res => {
    //         console.log(res);
    //         history.push('/home')
    //     }).catch(err => {
    //         console.log(err)
    //         document.getElementById("form-error").style.display = "block";
    //     });
    // }

    componentDidMount () {
    }

    handleClick () {
        // this.props.onCardClick(this.props.index)
    }

    setRandomEmoji () {
        let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"]
        let randomEmoji = emojies[Math.floor(Math.random()*emojies.length)];
        this.setState({emoji: randomEmoji});
    }

    render () {
        return (
            <section className="profile-page" onClick={ e => this.handleClick() } >
                <div className="container-sidebar">
                <a href={"/profile/" + 1} className="button button-secondary back-button no-text-wrap">Back to profile</a>
                <form name="loginForm" className="form is-dark">
                        <div>
                            <h1 className="mb-2">Edit profile</h1>
                        </div>
                        <p className="form-label">Profile Icon</p>
                        <div className="emoji-input-wrap">
                            <div className="emoji-output">
                                { this.state.emoji }
                            </div>
                            <div className="button button-secondary emoji-button" onClick={() => this.setRandomEmoji()}>
                                Generate random
                            </div>
                        </div>
                        <div className="double-form-field-wrap">
                            <div className="form-field">
                                <label className="form-label" for="firstName">First name</label>
                                <input class="form-input" type="text" id="firstName" name="firstName" placeholder="Johnny" 
                                        // value ={firstName}
                                        // onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="lastName">Last name</label>
                                <input class="form-input" type="text" id="lastName" name="lastName" placeholder="Appleseed" 
                                        // value={lastName}
                                        // onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="bio">Bio</label>
                            <textarea className="form-input is-dark" id="bio" name="bio" placeholder="I am a college student that likes to hangout and meet new people." 
                                // value={this.state.eventName}
                                // onChange={(e) => this.setState({eventName: e.target.value})}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="gender">Gender</label>
                            <select className="form-input is-dark" id="gender" name="gender">
                                <option value="">Select one</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Female">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="birthdate">Birthday</label>
                            {/* <div className="emojiOutput">
                                <p className="emoji-big">{text}</p>
                            </div> */}
                            
                            <input className="form-input is-dark" type="date" id="birthdate" name="birthdate"
                                // value={this.state.eventName}
                                // onChange={(e) => this.setState({eventName: e.target.value})}
                            />
                        </div>
                        <div id="form-error">Invalid info</div>
                        <Link to="/profile" type="submit" className="form-button" value="Submit">Save changes</Link>
                    </form>
                </div>
            </section>
        )
    }
}

export default ProfileEdit;