import React from 'react';

import { AiOutlineStar } from 'react-icons/ai';
import('./profile.css');

const Address = ({address, idx}) => {


    return (
        <div>
            <div className='address-container'>
                {
                    // todo: maybe add back in after updating primaryAddress stuff
                    // address.primaryAddress ? <div className='address-number'><AiOutlineStar className='primary-address' /></div> : <div className='address-number'>{idx + 1}</div>
                    <div className='address-number'>{idx + 1}</div>
                }
                
                <div className='address-element'>
                    <div className='address-label'>Street</div>
                    <div className='address-value'>{address.address}</div>
                </div>,
                <div className='address-element'>
                    <div className='address-label'>City</div>
                    <div className='address-value'>{address.city}</div>
                </div>,
                <div className='address-element'>
                    <div className='address-label'>State</div>
                    <div className='address-value'>{address.state}</div>
                </div>,
                <div className='address-element'>
                    <div className='address-label'>Zipcode</div>
                    <div className='address-value'>{address.zipcode}</div>
                </div>
            </div>

        </div>
    )
}

export default Address;