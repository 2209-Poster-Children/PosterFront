import React, { useState } from 'react';
import { Link, useOutletContext, useNavigate } from "react-router-dom";

import { BiUser, BiLockAlt } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import('./profile.css');

const Login = () => {

  const { userObj: {setLoggedIn, setUserData} } = useOutletContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");


  async function loginFormSubmitHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch(
          'https://poster-backendapi.onrender.com/api/users/login',
          {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  username: username,
                  password: password
              })
          }
      )

      const data = await response.json();
      console.log("login data: ", data);
      if (data.token) {
          setLoggedIn(true);
          localStorage.setItem("token", data.token);
          fetchUserInfo();
      } else {
        setErrorMessage(data.error);
      }
    } catch(error) {
        console.log(error);
    }
  }


  async function fetchUserInfo() {    
    try {
        const response = await fetch(
            'https://poster-backendapi.onrender.com/api/users/me',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            
        const data = await response.json();
        console.log("user data: ", data);
        setUserData(data);
        navigate('/');
    } catch(error) {
        console.log(error);
    }
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

      {
        errorMessage ? <p>{errorMessage}</p> : null
      }

    </div>
  )
}

export default Login;