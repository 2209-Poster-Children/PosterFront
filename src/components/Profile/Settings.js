import React from "react";
import {useOutletContext} from 'react-router-dom'

const Settings = () => {

    const { userObj: {userData } } = useOutletContext();


    return (
        <div>
            Settings page
        </div>
    )
}
        

export default Settings;