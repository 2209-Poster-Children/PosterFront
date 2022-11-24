import React from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import('./profile.css');

const Logout = () => {

  const { setProfileData, setLoggedIn } = useOutletContext();
  const navigate = useNavigate();

  function logOutUser() {
    console.log("logging out...");
    localStorage.removeItem('token');
    setProfileData({});
    setLoggedIn(false);
    navigate('/');
  }

  return (
    <div>
      <button onClick={logOutUser}>Logout</button>
    </div>
  )
}

export default Logout;