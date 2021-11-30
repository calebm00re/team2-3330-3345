
import '../Styles/Form.css'

function CreateEvent () {

    const createEvent = () => {

    }

    return (
        <>
            <section className="browse">
                <div className="container-sidebar">
                    <form name="loginForm" onSubmit={createEvent} className="form is-dark">
                        <div className="form-header"><h2>Post an event</h2></div>
                        <div className="form-field">
                            <label className="form-label" for="name">Name of event</label>
                            <input class="form-input is-dark" type="text" id="name" name="name" placeholder="National Cherry Festival" 
                                // value={userName}
                                // onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label" for="description">Description</label>
                            <textarea class="form-input is-dark" type="text" id="description" name="description" placeholder="A fun filled day of cherry picking, pies, games, and so much more!" 
                                // value={userName}
                                // onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label" for="description">Date</label>
                            <input class="form-input is-dark" type="date" id="date" name="date" min="2021-12-01"
                                // value={userName}
                                // onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label" for="numTickets">Number of Tickets</label>
                            <input class="form-input is-dark" type="number" id="numTickets" name="numTickets" placeholder="50"
                                // value={userName}
                                // onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label" for="location">Location</label>
                            <input class="form-input is-dark" type="text" id="location" name="location" placeholder="Dallas, TX"
                                // value={userName}
                                // onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label" for="categories">Categories</label>
                            <input class="form-input is-dark" type="text" id="categories" name="categories" placeholder="Food, Culture, Festival"
                                // value={userName}
                                // onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div id="form-error">Invalid info</div>
                        <button type="submit" className="form-button" value="Submit">Post event</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CreateEvent;