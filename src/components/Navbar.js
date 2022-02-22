import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Navbar.css";
import Logo from '../img/Logo.png';
import {Link} from 'react-router-dom';

import {BsGithub, BsLinkedin} from 'react-icons/bs';

class Navbar extends React.Component
{
    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#home" className="navbar-brand">
                    <img src={Logo} alt="Logo" height="40" className="d-inline-block align-top Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href="#about" className="nav-link">About </a>
                    </li>
                    <li className="nav-item">
                        <a href="#my-skills" className="nav-link">My Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#work" className="nav-link">Work</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/Jack-Christopher" className="nav-link"> <BsGithub /></a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/jack-christopher-huaihua-huayhua" className="nav-link"><BsLinkedin /></a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;