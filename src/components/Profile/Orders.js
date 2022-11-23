import React from 'react';
import {  useOutletContext } from "react-router-dom";

import { FaReceipt } from 'react-icons/fa';
import('./profile.css');

import ProfileNavbar from './ProfileNavbar';


const Orders = () => {

    const { userObj: { loggedIn, userData } } = useOutletContext();

    return (
        <div>
            <ProfileNavbar activePage='orders' />

            {
                !loggedIn ?
                    <div>
                        bitch who are you?
                    </div>
                :
                <div className='vert-flex-container'>
                    <div className='horiz-container'>
                        <FaReceipt className='icon-bubble' />
                        <h2>{userData.user.username}'s orders</h2>
                    </div>

                    {/* map through orders */}
                </div>
            }
        </div>
    )
}

export default Orders;