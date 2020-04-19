import React from 'react';
import './landing-page-header.scss'
import logo from "./../../images/logo.png";

function LandingPageHeader(){
    return (
        <div className="header-container">
            <div className="max-width header-flex">
                <div className="header-logo">
                    <img className="logo" src={logo} alt="Logo" />
                    <h3 className="header-name">Memos</h3>
                </div>
                <ul className="header-links">
                    <li>Manual</li>
                    <li className="highlight-text">GAME</li>
                </ul>
            </div>
        </div>
    );
}

export default LandingPageHeader;