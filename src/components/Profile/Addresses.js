import { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

import { FaAddressCard } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import('./profile.css');

import Address from './Address';
import ProfileNavbar from './ProfileNavbar';
import NewAddress from './NewAddress';


const Addresses = () => {

    const { userObj: { loggedIn, userData } } = useOutletContext();

    const [toggleNewAddressForm, setToggleNewAddressForm] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Add New');
    const [buttonSign, setButtonSign] = useState('+');


    function handleToggleNewAddressForm() {
        setToggleNewAddressForm(!toggleNewAddressForm);
        if (buttonLabel === 'Add New') {
            setButtonLabel('Nevermind')
            setButtonSign('-');
        } else {
            setButtonLabel('Add New')
            setButtonSign('+');
        }
    }


    return (
        <div>

            <ProfileNavbar activePage='addresses' />

            { !loggedIn ?
                <div>
                    bitch who are you?
                </div>
                :
                <div className='vert-flex-container'>
                    <div className='horiz-container'>
                        <FaAddressCard className='icon-bubble' />
                        <h2>{userData.user.username}'s addresses</h2>
                        <button className='new-address-button' onClick={handleToggleNewAddressForm}>
                            <div className='horiz-container'>
                                <div className='new-address-button-icon'>{buttonSign}</div>
                                <div className='new-address-button-label'>{buttonLabel}</div>
                            </div>
                        </button>
                    </div>

                    {
                        toggleNewAddressForm ? <NewAddress handleToggleNewAddressForm={handleToggleNewAddressForm} /> : null
                    }

                    {
                        userData.addresses.length ? userData.addresses.map((address, idx) => {
                            return <Address address={address} idx={idx} key={idx} />
                        }) : <div>No addresses to display</div>
                    }
                </div>
            }
        </div>
    )
}

export default Addresses;