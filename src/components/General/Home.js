// import React from 'react';
import './general.css';
import ErrorPage from './ErrorPage'

const Home = () => {

    return (
        <div>
            <h1>Welcome to our site</h1>

            {/* remove below when done testing */}
            <p> -------------testing ErrorPage style below:-------------</p>
            <ErrorPage />
            {/* remove above when done testing */}
            
        </div>
    )
}

export default Home;