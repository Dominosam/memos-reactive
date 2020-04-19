import React from 'react';
import './landing-page-header.scss'
import Img from 'gatsby-image';
import logo from "./../../images/logo.png";

function LandingPageHeader(){
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h3>Memos</h3>
        </header>   
    );
}

export default LandingPageHeader;