import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <Link to="/" className="nav-brand">DROIDBOTS</Link>
            <div className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/view" className={location.pathname === '/view' ? 'active' : ''}>Team</Link>
                <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>Add Member</Link>
            </div>
        </nav>
    );
};

export default Navbar;

