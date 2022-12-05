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
    const [ productData, setProductData ] = useState([]);

    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);

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
            } else console.log('not already logged in...');
        }
        checkforUser();


        // Product Fetch
        async function fetchProductData() {
            try {
                const response = await fetch(
                    'https://poster-backendapi.onrender.com/api/products/', //check URL
                    {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        // body: JSON.stringify({
                        //     page: page,
                        //     count: count
                        // })
                    })
                
                    const pData = await response.json();
                    setProductData(pData);

            } catch (error) {
                console.log(error)
            }
        }
        fetchProductData();

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
                productObj: [productData, setProductData],
                cartObj: [cartData, setCartData],
                paginateObj: {page, setPage, count, setCount}
            }} />

            <footer>
                <h4>Wep App Assembled by DYMI 2209</h4>
            </footer>
        </div>
    )
}

export default App;