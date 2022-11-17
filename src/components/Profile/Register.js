import React, { useState } from 'react';

import('./profile.css');

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);


  async function registerFormSubmitHandler(event) {
    event.preventDefault();

    // TODO: try to register user
    console.log("registering...");
  }


  function togglePasswordVisibility(event) {
    setPasswordVisibility(event.target.checked);
    let passwordType = document.getElementById("passwordInput");
    passwordType.type === "password" ?  passwordType.type = "text" : passwordType.type = "password";
  }


  return (
    <div className='vert-flex-container'>
      <form  onSubmit={registerFormSubmitHandler}>
        <label>Enter New Username:</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)}></input>

        <br />

        <label>Enter New Password:</label>
        <input type='password' value={password} id='passwordInput' onChange={(event) => setPassword(event.target.value)}></input>

        <div className='centered'>
          <label className='small-text'>Show Password?</label>
          <input type='checkbox' value={passwordVisibility} onChange={togglePasswordVisibility}></input>
        </div>

        <br />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register;