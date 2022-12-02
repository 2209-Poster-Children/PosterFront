import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

import "../index.css";
import "./general.css";

import { userFetch } from "../../api/users";

const App = () => {
  const [userData, setUserData] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // Matt: i know Ian and I talked about this already but I'll comment here anyway:
  // Cart should be in a separate state variable, so that it isn't attached
  // to the userData, and then passed into context
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // check for local storage token and set user data with a user fetch
    async function checkforUser() {
      const userFetchData = await userFetch();
      if (userFetchData.user) {
        console.log("already logged in! data: ", userFetchData);
        setUserData(userFetchData);
        setLoggedIn(true);
      } else console.log("not already logged in...");
    }
    checkforUser();

    // Product Fetch
    async function fetchProductData() {
      try {
        const response = await fetch(
          "https://poster-backendapi.onrender.com/api/products/", //check URL
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const pData = await response.json();
        setProductData(pData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductData();
  }, []);

  return (
    <div>
      <header>
        <h1>Poster Children</h1>
      </header>

      <Navbar loggedIn={loggedIn} />

      <Outlet
        context={{
          userObj: { loggedIn, setLoggedIn, userData, setUserData },
          productObj: [productData, setProductData],
        }}
      />

      <footer>
        <h4>Wep App Assembled by DYMI 2209</h4>
      </footer>
    </div>
  );
};

export default App;
