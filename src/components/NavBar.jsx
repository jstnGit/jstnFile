import React from 'react'
import jvmLogo from '../assets/images/jvmLogoSmall.png'

import '../assets/css/style.css'

function NavBar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container-fluid flex-lg-column">
                    <a className="navbar-brand mx-lg-auto mb-lg-4" href="#home">
                        <span className="h3 fw-bold d-block d-lg-none">JstnFiles</span>
                        <img src={jvmLogo} className="d-none d-lg-block" alt=""></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">

                            <li className="nav-item nav-link">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#artdesigns">Arts/Designs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar