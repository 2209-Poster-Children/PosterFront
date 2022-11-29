// import React from 'react';
import './profile.css';
import { useOutletContext } from "react-router-dom";

import Logout from './Logout';


const Profile = () => {

    const { userObj: {userData} } = useOutletContext();

    return (
        <div>
            <h1>Welcome to your profile {userData.user.username}</h1>
            
            <Logout />
        </div>
    )
}

export default Profile;