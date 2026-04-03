import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarRating from '../../ui/StarRating'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/reviews")
            .then((response) => setReviews(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        <div className='min-h-screen bg-[#1b2316] py-16 px-6 text-white '>
            <h1 className='text-center'>Customer Review</h1>
            <div className='flex gap-8'>
                {
                    reviews.map((review) => (
                        <div className='gap-3 bg-[#272e22] p-8 flex flex-col justify-center items-start w-[412px] h-[300px] border-2 border-[#50564c] rounded-[77px]' key={review.id}>
                            <div className='flex gap-3 items-center'>
                                <div
                                    className="w-[71px] h-[71px] bg-center bg-cover  bg-no-repeat rounded-full"
                                    style={{ backgroundImage: `url("${review.img}")` }}
                                ></div>
                                <h2>
                                    {review.user}
                                </h2>
                            </div>
                            <div>
                                <StarRating rating={review.rating} />
                                <p>{review.review}</p>
                                <p>{review.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reviews