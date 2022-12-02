import React from 'react';
import {  useOutletContext } from "react-router-dom";

import { AiFillStar } from 'react-icons/ai';
import('./profile.css');

import ProfileNavbar from './ProfileNavbar';


const Reviews = () => {

    const { userObj: { loggedIn, userData } } = useOutletContext();


    return (
        <div>
            <ProfileNavbar activePage='reviews' />

            {
                !loggedIn ?
                    <div>
                        bitch who are you?
                    </div>
                :
                <div className='vert-flex-container'>
                    <div className='horiz-container'>
                        <AiFillStar className='icon-bubble' />
                        <h2>{userData.user.username}'s reviews</h2>
                    </div>

                    {/* map through reviews */}
                </div>
            }
        </div>
    )
}

export default Reviews;