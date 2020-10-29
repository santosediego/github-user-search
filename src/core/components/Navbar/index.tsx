import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

//ver a fonte

const Navbar = () => (
    <nav className="main-nav">

        <Link to="/" className="nav-logo">
            <h4>Bootcamp DevSuperior</h4>
        </Link>
    </nav>
    /*Tudo posso Naquele que me Fortalece*/
);

export default Navbar;