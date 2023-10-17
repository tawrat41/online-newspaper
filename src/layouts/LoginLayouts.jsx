import React from 'react';
import NavigationBar from '../pages/shared/Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayouts = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayouts;