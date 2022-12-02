import React from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { FiLogOut } from 'react-icons/fi';

import('./profile.css');

const Logout = () => {

  const { userObj: {setLoggedIn, setUserData} } = useOutletContext();
  const navigate = useNavigate();

  function logOutUser() {
    console.log("logging out...");
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUserData({});
    navigate('/');
  }

  return (
    <div className='clickable profile-card' onClick={logOutUser}>
      <FiLogOut className='profile-card-img' />
      <h3>Logout</h3>
    </div>
  )
}

export default Logout;