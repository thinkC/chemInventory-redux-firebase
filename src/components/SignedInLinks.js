import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul>
            <li><NavLink to="/create">Create Inventory</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/">TO</NavLink></li>
        </ul>
    )
}


export default SignedInLinks;