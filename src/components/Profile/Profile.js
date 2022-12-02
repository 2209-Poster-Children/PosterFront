import React from "react";
import "./profile.css";
import { Link, useOutletContext } from "react-router-dom";

import { FaShoppingCart, FaReceipt, FaAddressCard } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import Logout from "./Logout";

const Profile = () => {
  const {
    userObj: { loggedIn, userData },
  } = useOutletContext();

  const greetings = [
    "Hi",
    "Hey",
    "Hello",
    "Hey there",
    "Howdy",
    "Good to see you",
    "Nice to see you",
    "It's great to see you",
    "Welcome",
    "Welcome Back",
  ];
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  // Matt: you could add a useEffect to check if logged in, and if not redirect to
  // the login page

  return (
    <div>
      {!loggedIn ? (
        <div>bitch who are you?</div>
      ) : (
        <div className="vert-flex-container">
          {
            <h1>
              {randomGreeting}, {userData.user.username}!
            </h1>
          }

          <div className="profile-cards-container">
            <Link to="orders" className="no-underline">
              <div className="clickable profile-card">
                <FaReceipt className="profile-card-img" />
                <h3>Orders</h3>
              </div>
            </Link>

            <Link to="reviews" className="no-underline">
              <div className="clickable profile-card">
                <AiFillStar className="profile-card-img" />
                <h3>Reviews</h3>
              </div>
            </Link>

            <Link to="addresses" className="no-underline">
              <div className="clickable profile-card">
                <FaAddressCard className="profile-card-img" />
                <h3>Addresses</h3>
              </div>
            </Link>

            <Link to="../cart" className="no-underline">
              <div className="clickable profile-card">
                <FaShoppingCart className="profile-card-img" />
                <h3>Cart</h3>
              </div>
            </Link>

            <Logout />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
