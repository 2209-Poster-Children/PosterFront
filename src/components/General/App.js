import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../index.css';
import './general.css';

const App = () => {

    return (
        <div>
            <header>
                <h1>Poster Children</h1>
            </header>

            <Navbar />
            
            <Outlet context />

            <footer>
                <h4>Wep App Assembled by DYMI 2209</h4>
            </footer>
        </div>
    )
}

export default App;