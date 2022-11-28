import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Logout from '../Profile/Logout';

import '../index.css';
import './general.css';

const App = () => {

    const [ profileData, setProfileData ] = useState({});
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
                setProfileData(data);

                console.log("already logged in! user data: ", data); // TODO: fix error

                if (data.username) {
                    setProfileData(data);
                    setLoggedIn(true);
                }

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
                    console.log(productData)

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

            {
                // temp log out button, probs move somewhere better
                loggedIn ? <Logout /> : null
            }

            <Navbar />
            
            <Outlet context={{ 
                loggIngObj: [loggedIn, setLoggedIn],
                profileObj: [productData, setProductData],
                productObj: [productData, setProductData]
             }} />

            <footer>
                <h4>Wep App Assembled by DYMI 2209</h4>
            </footer>
        </div>
    )
}

export default App;