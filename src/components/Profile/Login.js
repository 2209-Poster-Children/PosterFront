import React, { useState } from 'react';
import { Link, useOutletContext, useNavigate } from "react-router-dom";

import { BiUser, BiLockAlt, BiErrorCircle } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import('./profile.css');

import { loginFetch, userFetch } from '../../api/users';

const Login = () => {

  const { userObj: {setLoggedIn, setUserData} } = useOutletContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");


  async function loginFormSubmitHandler(event) {
    event.preventDefault();

    const loginFetchData = await loginFetch(username, password);

    if (loginFetchData.token) {
      setLoggedIn(true);
      localStorage.setItem("token", loginFetchData.token);
      const userFetchData = await userFetch();    
      setUserData(userFetchData);
      navigate('/');
    } else {
        setErrorMessage(loginFetchData.message);
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

      <Link to='/register'>Don't have an account? Click here to sign up</Link>

      {
        errorMessage ? 
          <div className='error-container'>
            <BiErrorCircle className='error-img'/>
            <div className='error-msg'>{errorMessage}</div>
          </div>
          : null
      }

    </div>
  )
}

export default Login;