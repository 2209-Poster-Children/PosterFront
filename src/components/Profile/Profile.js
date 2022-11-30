// import React from 'react';
import './profile.css';
import { useOutletContext } from "react-router-dom";

import Logout from './Logout';


const Profile = () => {

    const { userObj: {userData} } = useOutletContext();

    const greetings = ["Hi", "Hey", "Hello", "Hey there", "Howdy", "Good to see you", "Nice to see you", "It's great to see you", "Welcome", "Welcome Back"];

    return (
        <div>
            <div className='vert-flex-container'>
                {
                    <h1>{greetings[Math.floor(Math.random() * greetings.length)]}, {userData.user.username}!</h1>
                }
                <Logout />
            </div>

        </div>
    )
}

export default Profile;