import React from "react";
import { useOutletContext, Link } from 'react-router-dom'

const Review= ({ review })=>{
    // console.log(review);

    const { userObj: {userData } } = useOutletContext();


    return (
        <div>

            <div className='review-container'>
                {/* todo: adding photos to reviews */}
                {/* <div className="image-container">
                    <img src="https://phantom-marca.unidadeditorial.es/9539821a6a594eca33bde1994c03ecd6/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/05/16308252543285.jpg"className="image"height='200'></img>
                </div> */}

                <div className='review-title'>{review.title}</div>

                <div>@{userData.user.username}</div>

                <div className='review-description'>{review.description}</div>

                <Link to={`../shop/item/${review.productId}`}  className='review-product' >Product Id: {review.productId}</Link>
            </div>
        </div>
    )
}
        

export default Review;