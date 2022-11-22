import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Logout from '../Profile/Logout';

import '../index.css';
import './general.css';

const App = () => {

    const [ userData, setUserData ] = useState({});
    const [ loggedIn, setLoggedIn ] = useState(false);

    const [ productData, setProductData ] = useState([]);

    useEffect(() => {
        async function checkLoggedIn() {    
            try {
                const response = await fetch(
                    'https://poster-backendapi.onrender.com/api/users/me',
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        },
                    })
                    
                const data = await response.json();

                if (data.username) {
                    console.log("already logged in! user data: ", data);
                    setUserData(data);
                    setLoggedIn(true);
                } else console.log('not already logged in');

            } catch(error) {
                console.log(error);
            }
        }
        checkLoggedIn();

        // Product Fetch
        async function fetchProductData() {
            try {
                const response = await fetch(
                    'https://poster-backendapi.onrender.com/api/products/', //check URL
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                
                    const pData = await response.json();
                    setProductData(pData);

            } catch (error) {
                console.log(error)
            }
        }
        fetchProductData();

    }, []);

    return (
        <div>
            <header>
                <h1>Poster Children</h1>
            </header>

            <Navbar />
            
            <Outlet context={{ 
                userObj: {loggedIn, setLoggedIn, userData, setUserData},
                productObj: [productData, setProductData]
            }} />

            <footer>
                <h4>Wep App Assembled by DYMI 2209</h4>
            </footer>
        </div>
    )
}

export default App;