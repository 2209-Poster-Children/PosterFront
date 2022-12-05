import React from "react";
import {useOutletContext} from 'react-router-dom'
import('./yeisi.css');
import { BsFillPlusSquareFill } from 'react-icons/ai';

const Review= ({review,idx})=>{
    // console.log(review);

    const { userObj: {userData } } = useOutletContext();


    return (
        <div>

            <div className='review-container'>
                <button className="add-review">＋</button>

                <div className='review-element'>
                    <div className='review-label'>User</div>
                    <div className='review-value'>{userData.user.username}</div>
                </div>

                {/* todo: adding photos to reviews */}
                {/* <div className="image-container">
                    <img src="https://phantom-marca.unidadeditorial.es/9539821a6a594eca33bde1994c03ecd6/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/05/16308252543285.jpg"className="image"height='200'></img>
                </div> */}

                <div className='review-element'>
                    <div className='review-title'></div>
                    <div className='review-value'>{review.title}</div>
                </div>

                <div className='review-element'>
                    <div className='review-label'></div>
                    <div className='review-value'>{review.description}</div>
                </div>

                <div className='review-element'>
                    <div className='review-label'>Product Id</div>
                    <div className='review-value'>{review.productId}</div>
                </div>
            </div>
        </div>
    )
}
        

export default Review;