import React from "react";
import { Link, useOutletContext } from "react-router-dom";

import { FaAddressCard } from "react-icons/fa";
import("./profile.css");

import Address from "./Address";
import ProfileNavbar from "./ProfileNavbar";

const Addresses = () => {
  const {
    userObj: { loggedIn, userData },
  } = useOutletContext();

  return (
    <div>
      <ProfileNavbar activePage="addresses" />

      {!loggedIn ? (
        <div>
          bitch who are you?
          {
            // Matt: ^ i vote to make this permanent
          }
        </div>
      ) : (
        <div className="vert-flex-container">
          <div className="horiz-container">
            <FaAddressCard className="icon-bubble" />
            <h2>{userData.user.username}'s addresses</h2>
          </div>
          {userData.addresses.length ? (
            userData.addresses.map((address, idx) => {
              return <Address address={address} idx={idx} key={idx} />;
            })
          ) : (
            <div>No addresses to display</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Addresses;
