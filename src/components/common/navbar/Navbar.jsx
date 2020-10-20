import React from 'react';
import './Navbar.css';


function Navbar () {
    return (
        <section className="navbar">
            <a href="/" className="navbar-item">Home</a>
            <a href="/reports" className="navbar-item">Reports</a>
            <a href="/population" className="navbar-item">Population</a>
            <a href="/holidays" className="navbar-item">Holiday</a>
        </section>
    )
}

export default Navbar;
