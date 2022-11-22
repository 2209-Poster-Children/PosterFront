import React from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

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
    <div>
      <button onClick={logOutUser} className='login-button'>Logout</button>
    </div>
  )
}

export default Logout;