import React, { useState } from 'react';
import { Link } from "react-router-dom";

import('./profile.css');

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);


  async function loginFormSubmitHandler(event) {
    event.preventDefault();

    // TODO: try to log user
    console.log("logging in...");
  }


  function togglePasswordVisibility(event) {
    setPasswordVisibility(event.target.checked);
    let passwordType = document.getElementById("passwordInput");
    passwordType.type === "password" ?  passwordType.type = "text" : passwordType.type = "password";
  }


  return (
    <div className='vert-flex-container'>
      <form  onSubmit={loginFormSubmitHandler}>
        <label>Enter Username:</label>
        <input type='text' value={username} onChange={(event) => setUsername(event.target.value)}></input>

        <br />

        <label>Enter Password:</label>
        <input type='password' value={password} id='passwordInput' onChange={(event) => setPassword(event.target.value)}></input>

        <div className='centered'>
          <label className='small-text'>Show Password?</label>
          <input type='checkbox' value={passwordVisibility} onChange={togglePasswordVisibility}></input>
        </div>

        <br />

        <button type='submit'>Login</button>
      </form>

      <Link to="/register">Don't have an account? Click here to sign up</Link>

    </div>
  )
}

export default Login;