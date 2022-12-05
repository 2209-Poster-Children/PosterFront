import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

import { newAddressFetch, getAddressesFetch } from '../../api/address';
import { userFetch } from '../../api/users';

const NewAddress = ({handleToggleNewAddressForm}) => {

    const { userObj: { userData, setUserData } } = useOutletContext();

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [primaryAddress, setPrimaryAddress] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const states = ['', 'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];

    async function newAddressFormSubmitHandler(event) {
        event.preventDefault();

        const newAddressFetchData = await newAddressFetch(userData.user.id, address, city, state, zipcode, primaryAddress);
        if (newAddressFetchData.address) {
            handleToggleNewAddressForm();
            // const getAddressesFetchData = await getAddressesFetch();
            // console.log("getAddressesFetchData", getAddressesFetchData);
            const userFetchData = await userFetch();   
            setUserData(userFetchData);
        }

    }

    return (
        <div className='vert-flex-container'>

            <form onSubmit={newAddressFormSubmitHandler} className='address-form'>
                <label>Street Address:</label>
                <input type="text" value={address} onChange={(event) => setAddress(event.target.value)}></input>

                <br/>

                <div className='horiz-flex-container'>
                    <div>
                        <label>City:</label>
                        <input type="text" value={city} onChange={(event) => setCity(event.target.value)}></input>
                    </div>
                    <div className='address-input-container'>
                        <label>State:</label>
                        <select value={state} className='address-state-select' onChange={(event) => setState(event.target.value)}>
                            {
                                states.map((state, idx) => {
                                    return <option key={idx} value={state}>{state}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Zipcode:</label>
                        <input type="text" value={zipcode} onChange={(event) => setZipcode(event.target.value)} className='address-zipcode-input'></input>
                    </div>
                </div>

                <br/>

                <div className='horiz-flex-container'>
                    <div className='address-input-container'>
                        <label>Make primary address?</label>
                        <input type='checkbox' value={primaryAddress} onChange={(event) => setPrimaryAddress(event.target.checked)}></input>
                    </div>
                    <button type="submit" className='add-address-button'>Add</button>
                </div>

            </form>
            {
                errorMessage ? <p>{errorMessage}</p> : null
            }

        </div>
    )
};

export default NewAddress;