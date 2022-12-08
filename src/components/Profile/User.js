import React from 'react';

import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import('./profile.css');

const User = ({user, idx}) => {


    return (
        <div>
            <div className='user-container'>
                {
                    user.isAdmin ? <MdOutlineAdminPanelSettings className='user-icon' /> : <BiUser className='user-icon' />
                }
                <div className='user-element'>
                    <div className='user-label'>id</div>
                    <div className='user-value'>{user.id}</div>
                </div>
                <div className='user-element'>
                    <div className='user-label'>username</div>
                    <div className='user-value'>{user.username}</div>
                </div>
            </div>

        </div>
    )
}

export default User;