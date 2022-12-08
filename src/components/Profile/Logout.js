import React from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { FiLogOut } from 'react-icons/fi';

import('./profile.css');

const Logout = () => {

  const { userObj: {setLoggedIn, setUserData} } = useOutletContext();
  const { cartObj: [cartData,setCartData ]} = useOutletContext();
  const navigate = useNavigate();

  function logOutUser() {
    console.log("logging out...");
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUserData({});
    localStorage.getItem("cart")?setCartData(JSON.parse(localStorage.getItem("cart"))): setCartData({})
    toast("Successfully logged out")
    navigate('/');
  }

  return (
    <div className='profile-card' onClick={logOutUser}>
      <ToastContainer 
        theme="dark"/>
      <FiLogOut className='profile-card-img' />
      <h3>Logout</h3>
    </div>
  )
}

export default Logout;