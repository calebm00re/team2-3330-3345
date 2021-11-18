import React from 'react'

class ProfilePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    handleClick () {
        // this.props.onCardClick(this.props.index)
    }

    render () {
        return (
            <section className="profile-page" onClick={ e => this.handleClick() } >
                <div className="container-sidebar">
                    <h1 className="landing-title">Profile</h1>
                    <h2 className="landing-subtitle">user account info</h2>
                </div>
            </section>
        )
    }
}

export default ProfilePage;