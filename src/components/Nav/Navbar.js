import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar () {

    const navMenu = document.querySelector( '.nav-menu' );
    const [ hide, setHide ] = useState( { "display": "none" } )
    const mobileMenu = () => {
        navMenu.classList.toggle( 'active' );
    }
    return (

        <nav className="navbar">
            <div className="navbar-container">
                <div className="brand">
                    <Link to="/">Better</Link>
                </div>
                <div className="menu-toggle" id="mobile-menu" onClick={ mobileMenu }>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link"> AboutUs</Link></li>
                    <li className="nav-item"><Link to="/calculator" className="nav-link">Mortgage Calculator</Link></li>
                    <li className="nav-item"><Link to="/startpage" className="nav-link">Start Page</Link></li>

                </ul>
                <div className="nav-right">
                    <a href="tel:+1234567890" className="call-icon" onMouseEnter={ () => {
                        setHide( { "visibility": "visible" } )
                    } } onMouseLeave={ () => {
                        setHide( { "visibility": "invisible" } )
                    } }><i class="fa-solid fa-phone"></i></a>
                    <a href="#" className="sign-in-btn">Sign In</a>

                </div>
                {/* <div class="card2" style={hide}>
                    <p>Call us anytime at 415-523-8837</p>
                </div> */}
            </div>
        </nav>
    )
}
