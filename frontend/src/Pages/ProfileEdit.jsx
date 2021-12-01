import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { URL } from '../utils/utils';
import { UserRepository } from "../api/userRepository";
// import { useHistory } from 'react-router-dom';

// history = useHistory();
const userRepository = new UserRepository();
const user = userRepository.currentUser();

class ProfileEdit extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isEditing: true,
            emoji: '',
            first: '',
            last: '',
            dob: '',
            bio: '',
        }
    }

    getProfileInfo = () => {
        axios.post(`${URL}/api/getUser`, {userID: user.userID}).then(res => {
            const d = res.data.data;
            this.setState({bio: d[0].bio})
            this.setState({first: d[0].firstName})
            this.setState({last: d[0].lastName})
            this.setState({dob: d[0].dob})
            this.setState({bio: d[0].bio})
            console.log(d);
        }).catch(err => {
            console.log(err)
        });
    }

    updateProfile = (e) => {
        e.preventDefault();
        axios.put(`${URL}/api/editUser`, {userID: user.userID, firstName: this.state.first, lastName: this.state.last, dob: this.state.dob, bio: this.state.bio}).then(res => {
            const d = res.data.data;
            console.log(d);
            window.location.href = "/profile/1";
        }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount () {
        this.getProfileInfo();
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
                                    value ={ this.state.first }
                                    onChange={(e) => this.setState({ first: e.target.value })}
                                />
                            </div>
                            <div className="form-field">
                                <label className="form-label" for="lastName">Last name</label>
                                <input class="form-input" type="text" id="lastName" name="lastName" placeholder="Appleseed" 
                                    value ={ this.state.last }
                                    onChange={(e) => this.setState({ last: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="bio">Bio</label>
                            <textarea className="form-input is-dark" id="bio" name="bio" placeholder="I am a college student that likes to hangout and meet new people." 
                                value ={ this.state.bio }
                                onChange={(e) => this.setState({ bio: e.target.value })}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label" htmlFor="birthdate">
                                Birthday
                            </label>
                            
                            <input className="form-input is-dark" type="date" id="birthdate" name="birthdate"
                                value ={ this.state.dob }
                                onChange={(e) => this.setState({ dob: e.target.value })}
                            />
                        </div>
                        <div id="form-error">Invalid info</div>
                        <Link to="/profile/1" className="form-button" value="Submit" onClick={e => this.updateProfile(e)}>Save changes</Link>
                    </form>
                </div>
            </section>
        )
    }
}

export default ProfileEdit;