// import React from 'react';

import('./profile.css');

const Logout = () => {

  function logOutUser() {
    console.log("logging out...");
  }

  return (
    <div>
      <button onClick={logOutUser}>Logout</button>
    </div>
  )
}

export default Logout;