import React, { useState } from 'react';
import {  useOutletContext } from "react-router-dom";

import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

import { getAllUsersFetch } from '../../api/users';
import User from './User';

const Admin = () => {

    const { userObj: { loggedIn, userData } } = useOutletContext();

    const [users, setUsers] = useState([]);
    const [toggleViewUsers, setToggleViewUsers] = useState(false);


    async function getUsers() {
        const result = await getAllUsersFetch();
        console.log(result);
        setUsers(result);
    }

    function handleToggleViewUsers() {
        getUsers();
        setToggleViewUsers(!toggleViewUsers);
    }


    return (
        <div>
            {
                !loggedIn || !userData.user.isAdmin ?
                    <div>
                        bitch who are you?
                    </div>
                :
                <div className='vert-flex-container'>
                    <div className='horiz-container'>
                        <MdOutlineAdminPanelSettings className='icon-bubble' />
                        <h2>{userData.user.username}'s admin page</h2>
                    </div>

                    <div className='admin-card' onClick={handleToggleViewUsers}>
                        <FaUsers className='admin-card-img' />
                        <div>All Users</div>
                    </div>

                    {
                        toggleViewUsers ? users.map((user, idx) => {
                            return <User user={user} idx={idx} key={idx} />
                        }) : null
                    }

                </div>
            }
        </div>
    )
}

export default Admin;