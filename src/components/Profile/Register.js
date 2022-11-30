import React, { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { BiUser, BiLockAlt, BiErrorCircle } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import('./profile.css');

import { registerFetch, userFetch } from '../../api/users';

const Register = () => {

  const { userObj: {setLoggedIn, setUserData} } = useOutletContext();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");


  async function registerFormSubmitHandler(event) {
    event.preventDefault();

    const registerFetchData = await registerFetch(username, password);

    if (registerFetchData.token) {
      console.log(registerFetchData.message);
      setLoggedIn(true);
      localStorage.setItem("token", registerFetchData.token);
      const userFetchData = await userFetch();    
      setUserData(userFetchData);
      navigate('/');
    } else {
        // problem registering
        setErrorMessage(registerFetchData.message);
    }
  }


  function togglePasswordVisibility() {
    setPasswordVisibility(!passwordVisibility);
    let passwordType = document.getElementById("passwordInput");
    passwordType.type === "password" ?  passwordType.type = "text" : passwordType.type = "password";
  }


  return (
    <div className='vert-flex-container'>
      <form  onSubmit={registerFormSubmitHandler} className='user-form'>
        <label>Enter New Username:</label>
        <div className='input-container'>
          <BiUser />
          <input type='text' value={username} onChange={(event) => setUsername(event.target.value)}></input>
        </div>

        <br />

        <label>Enter New Password:</label>
        <div className='input-container'>
          <BiLockAlt />
          <input type='password' value={password} id='passwordInput' onChange={(event) => setPassword(event.target.value)}></input>
          {
            passwordVisibility ? <AiOutlineEye onClick={togglePasswordVisibility} className='clickable'/> : <AiOutlineEyeInvisible onClick={togglePasswordVisibility} className='clickable'/>
          }
        </div>

        <br />

        {/* <label>Confirm New Password:</label>
        <div className='input-container'>
          <BiLockAlt />
          <input type='password' value={password} id='passwordInput' onChange={(event) => setPassword(event.target.value)}></input>
          {
            passwordVisibility ? <AiOutlineEye onClick={togglePasswordVisibility}/> : <AiOutlineEyeInvisible onClick={togglePasswordVisibility}/>
          }
        </div>

        <br /> */}

        <button type='submit' className='login-button'>Register</button>
      </form>
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

export default Register;