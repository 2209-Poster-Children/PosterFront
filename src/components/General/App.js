import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <h1>Single Page Web App</h1>
            
            <Outlet context />
        </div>
    )
}

export default App;