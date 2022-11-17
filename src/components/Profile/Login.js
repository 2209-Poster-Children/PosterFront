import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { BiUser, BiLockAlt } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
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


  function togglePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility);
    let passwordType = document.getElementById("passwordInput");
    passwordType.type === "password" ?  passwordType.type = "text" : passwordType.type = "password";
  }


  return (
    <div className='vert-flex-container'>
      <form  onSubmit={loginFormSubmitHandler} className='user-form'>
        <label>Enter Username:</label>
        <div className='input-container'>
          <BiUser />
          <input type='text' value={username} onChange={(event) => setUsername(event.target.value)}></input>
        </div>

        <br />

        <label>Enter Password:</label>
        <div className='input-container'>
          <BiLockAlt />
          <input type='password' value={password} id='passwordInput' onChange={(event) => setPassword(event.target.value)}></input>
          {
            passwordVisibility ? <AiOutlineEye onClick={togglePasswordVisibility} className='clickable'/> : <AiOutlineEyeInvisible onClick={togglePasswordVisibility} className='clickable'/>
          }
        </div>

        <br />

        <button type='submit' className='login-button'>Login</button>
      </form>

      <Link to="/register">Don't have an account? Click here to sign up</Link>

    </div>
  )
}

export default Login;