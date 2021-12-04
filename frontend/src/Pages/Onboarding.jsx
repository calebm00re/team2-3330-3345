
import '../Styles/Form.css'
import '../Styles/Onboarding.css'
import { useState, useEffect } from 'react'

function OnboardingPage (props) {
    const [ emoji, setEmoji ] = useState('')

    function setRandomEmoji () {
        let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"]
        let randomEmoji = emojies[Math.floor(Math.random()*emojies.length)];
        setEmoji(randomEmoji);
    }

    useEffect(() => {
        setRandomEmoji();


    }, [])

    return(
        <>
            <section className="">
                <div className="container container-small">

                    <form name="loginForm" className="form is-dark">
                        <div>
                            <h1 className="mb-2">Welcome <span className="user-name">Thomas</span></h1>
                            <p className="text-style-muted">Fill out your profile so people can know who you are!</p>
                        </div>
                        <p className="form-label">Profile Icon</p>
                        <div className="emoji-input-wrap">
                            <div className="emoji-output">
                                { emoji }
                            </div>
                            <div className="button button-secondary emoji-button" onClick={() => setRandomEmoji()}>
                                Generate random
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
                        <button type="submit" className="form-button button-large" value="Submit">Jump into the app!</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default OnboardingPage;