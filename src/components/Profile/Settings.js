import React, { useState } from "react";
import {useOutletContext} from 'react-router-dom'

import { BsSun, BsMoon } from 'react-icons/bs';


import ProfileNavbar from './ProfileNavbar';


const Settings = () => {

    const { userObj: { loggedIn, userData } } = useOutletContext();

    const [lightMode, setLightMode] = useState(false); // todo: maybe store on outlet context to save the value
    // then use a useEffect to check and set the value on refresh 

    // console.log('light mode?', lightMode);
    function handleLightModeToggle(event) {
        // console.log("light mode toggled")
        setLightMode(event.target.checked);
        var element = document.body;
        element.classList.toggle('light-mode');
    }


    return (
        <div>
            <ProfileNavbar activePage='settings' />

            {
                !loggedIn ?
                    <div>
                        bitch who are you?
                    </div>
                :
                    <div className='vert-flex-container'>
                        <h2>Settings</h2>

                        <div className="setting-container">

                            <BsMoon />
                            <h3>Dark Mode</h3>

                            <label className="switch">
                                <input type="checkbox" defaultChecked={lightMode} value={lightMode} onChange={(event) => handleLightModeToggle(event)}></input>
                                <span className="slider round"></span>
                            </label>

                            <BsSun />
                            <h3>Light Mode</h3>

                        </div>

                        
                    </div>
            }
        </div>
    )
}
        

export default Settings;