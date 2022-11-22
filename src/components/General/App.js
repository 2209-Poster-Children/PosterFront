import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../index.css';
import './general.css';

const App = () => {

    return (
        <div>
            <h1>Single Page Web App</h1>

            <Navbar />
            
            <Outlet context />
        </div>
    )
}

export default App;