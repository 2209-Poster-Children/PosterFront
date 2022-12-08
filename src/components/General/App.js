import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

import '../index.css';
import './general.css';

import { userFetch } from '../../api/users';
import {viewCartFetch} from '../../api/cart';

const App = () => {

    const [ userData, setUserData ] = useState({});
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ cartData, setCartData] = useState({});

    useEffect(() => {
        // check for local storage token and set user data with a user fetch
        async function checkforUser() {
            const userFetchData = await userFetch();
            if (userFetchData.user) {
                console.log("already logged in! data: ", userFetchData);
                setUserData(userFetchData);
                setLoggedIn(true);
                const cart = await viewCartFetch()
                console.log(cart);
                setCartData(cart);
            } else { // this is guest cart, it will set a guest if it doesn't exist.
                console.log('not already logged in...');
                const guestCart = JSON.parse(localStorage.getItem("cart"));
                if(guestCart){
                    setCartData(guestCart);
                }else{
                    localStorage.setItem("cart",JSON.stringify({totalPrice:0, products:[]}))
                    setCartData(JSON.parse(localStorage.getItem("cart")));
                }
            }
        }
        checkforUser();


    }, []);
    // fetch cart data? state variable to be passed around as context separate
    // active cart from the userobj
    return (
        <div>
            <header>
                <h1>Poster Children</h1>
            </header>

            <Navbar loggedIn={loggedIn}/>
            
            <Outlet context={{ 
                userObj: {loggedIn, setLoggedIn, userData, setUserData},
                cartObj: [cartData, setCartData],
            }} />

            <footer>
                <h4>Wep App Assembled by DYMI 2209</h4>
            </footer>
        </div>
    )
}

export default App;