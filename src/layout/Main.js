import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            {/* Layout - similar elements */}
            <Navbar></Navbar>
            {/* Outlet - not similar elements */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;