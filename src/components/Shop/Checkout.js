import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { viewCartFetch } from '../../api/cart';

const Checkout = () =>{
    const {cartObj:[cartData, setCartData]} = useOutletContext();
    const {userObj:{userData}} =useOutletContext();

    console.log(cartData);



    return(
        <div>
            
            
            
            Cart data goes here
            
            
           <div><button>Pay</button></div>
        </div>

        
    )
}

export default Checkout;