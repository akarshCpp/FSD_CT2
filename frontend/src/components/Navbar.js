import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/view">View Members</Link>
            <Link to="/add">Add Member</Link>
        </nav>
    );
};

export default Navbar;
