
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function ReviewForm () {
    const [reviewBody, setReviewBody] = useState([]);
    const [reviewRating, setReviewRating] = useState([]);

    const handleSubmit = () => {
    }

    return (
        <>
            <div className="review-card">
                <form name="review-form" className="review-form">
                    <input className="form-input" placeholder="Had a good time? Leave a review" />

                    <select className="form-input" >
                        <option valaue="5">⭐⭐⭐⭐⭐</option>
                        <option valaue="4">⭐⭐⭐⭐</option>
                        <option valaue="3">⭐⭐⭐</option>
                        <option valaue="2">⭐⭐</option>
                        <option valaue="1">⭐</option>
                    </select>
                    <button className="button">Submit Review</button>
                </form>
            </div>
        </>
    )
}

function EventReviews (props) {
    const [reviews, setReviews] = useState([]);
    let emojies = ["🤓","😎","🥸","🤩","🥳","🤠","😈","👿","👹","👺","🤡","⚽️", "🏀", "🏈", "⚾️", "🥎", "🎾", "🏐", "🏉", "🥏","🎱","🪀","🏓"];

    const getReviews = () => {
    }

    return (
    <>
        <div className="event-page reviews-list">
            <h2>Reviews</h2>
            {
                [1,2].map((x, i) => <>
                     <div className="review-card">
                        <div className="review-header">
                            <Link className="author-wrap" to="/profile/1">
                                <div className="emoji-output emoji-small">
                                { emojies[Math.floor(Math.random()*emojies.length)] }
                                </div>
                                <span className="">Tom</span>
                            </Link>
                            <p>Posted 11/2/3 3:02pm</p>
                        </div>
                        <div className="rating">
                            {
                                [1,2,3,4,5].map((x, i) => <>
                                    ⭐
                                </>)
                            }
                        </div>
                        <p className="review-body">Review Body</p>
                    </div>
                </>)
            }
            <ReviewForm />
           
            
        </div>
    </>
    )
}

export default EventReviews;