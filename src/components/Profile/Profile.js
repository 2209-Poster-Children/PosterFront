import React from 'react';
import './profile.css';
import { Link, useOutletContext } from "react-router-dom";

import { FaShoppingCart, FaReceipt, FaAddressCard } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

import Logout from './Logout';


const Profile = () => {

    const { userObj: { loggedIn, userData } } = useOutletContext();

    const greetings = ["Hi", "Hey", "Hello", "Hey there", "Howdy", "Good to see you", "Nice to see you", "It's great to see you", "Welcome", "Welcome Back"];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];


    return (
        <div>
            { !loggedIn ? 
                <div>
                    bitch who are you?
                </div>
                :

                <div className='vert-flex-container'>
                    <div className='greeting-container'>
                    {
                        <h1>{randomGreeting}, {userData.user.username}!</h1>
                    }
                    {
                        userData.user.isAdmin ? <Link to='admin'><MdOutlineAdminPanelSettings className='admin-icon' /></Link> : null
                    }
                    </div>

                    <div className='profile-cards-container'>
                        <Link to='../cart' className='no-underline'>
                            <div className='profile-card'>
                                <FaShoppingCart className='profile-card-img' />
                                <h3>Cart</h3>
                            </div>
                        </Link>

                        <Link to='orders' className='no-underline'>
                            <div className='profile-card'>
                                <FaReceipt className='profile-card-img' />
                                <h3>Orders</h3>
                            </div>
                        </Link>

                        <Link to='reviews' className='no-underline'>
                            <div className='profile-card'>
                                <AiFillStar className='profile-card-img' />
                                <h3>Reviews</h3>
                            </div>
                        </Link>

                        <Link to='addresses' className='no-underline'>
                            <div className='profile-card'>
                                <FaAddressCard className='profile-card-img' />
                                <h3>Addresses</h3>
                            </div>
                        </Link>

                        <Link to='settings' className='no-underline'>
                            <div className='profile-card'>
                                <FiSettings className='profile-card-img' />
                                <h3>Settings</h3>
                            </div>
                        </Link>

                        <Logout />
                    </div>

                </div>
            }
        </div>
    )
}

export default Profile;