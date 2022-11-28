import React, { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";

import { BiUser, BiLockAlt } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import('./profile.css');

const Register = () => {

  const { setProfileData, setLoggedIn } = useOutletContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");


  async function registerFormSubmitHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://poster-backendapi.onrender.com/api/users/register',
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
      console.log("register data:", data);

      if (data.token) {
          console.log(data.message);
          setLoggedIn(true);
          localStorage.setItem("token", data.token);
          // setProfileData(data.user); // TODO: get user data sent back from /register
          navigate("/");
      } else {
          // problem registering
          setErrorMessage(data.error);
      }
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
        errorMessage ? <p>{errorMessage}</p> : null
      }
    </div>
  )
}

export default Register;