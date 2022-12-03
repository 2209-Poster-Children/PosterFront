import React from "react";
import {useOutletContext} from 'react-router-dom'
import('./yeisi.css');
import { BsFillPlusSquareFill } from 'react-icons/ai';

const Review= ({review,idx})=>{
    console.log(review);
    console.log ("idx",idx);

    const { userObj: {userData } } = useOutletContext();
return (
    <div>

        <div class='review-container'>
        <button class="add-review">＋</button>

            {
                review.primaryReview
            }
             <div class ='review-element'>
                <div class = 'review-label'>User</div>
                <div class = 'review-value'>{userData.user.username}</div>
            </div>

            
            <div class="image-container">
            <div img src="https://phantom-marca.unidadeditorial.es/9539821a6a594eca33bde1994c03ecd6/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/05/16308252543285.jpg"class="shakiraimage"></div>
        
            </div>

            <div class = 'review-element'>
                <div class='review-title'></div>
                <div class ='review-value'>{review.title}</div>
            </div>

            <div class ='review-element'>
                <div class = 'review-label'></div>
                <div class = 'review-value'> {review.description}</div>
            </div>

            <div class ='review-element'>
                <div class = 'review-label'>Product Id</div>
                <div class = 'review-value'> {review.productId}</div>

            </div>
            </div>
        </div>
    
         )
     }
        

        export default Review;