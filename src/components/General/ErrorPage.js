// import React from 'react';
import './general.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error-return">
            <h1>Oh no, page not found! {":("}</h1>
            <Link to="/shop">Take me back!</Link>
        </div>
    )
};

export default ErrorPage; 