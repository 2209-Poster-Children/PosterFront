// import React from 'react';
import './general.css';
import HomeGallery from './HomeGallery';

const Home = () => {

    return (
        <div>
            {/* <h1>Welcome to our site</h1> */}

            <div className="home-gallery-container">
                <HomeGallery />
            </div>
            
        </div>
    )
}

export default Home;