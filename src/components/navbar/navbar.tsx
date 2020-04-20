import React, { Component } from "react";
import logo from "../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.scss'
interface Props {
    
}

const Navbar: React.FC<Props> = (props) => {
    return(
        <nav className="nav" id="navbar">
            <div className="nav-content">
                <div className="header-logo">
                <img
                    src={logo}
                    className="nav-logo"
                    alt="Logo."
                    onClick={() => scroll.scrollToTop()}
                />
                <h3 className="header-name">Memos</h3>
                </div>
                
                <ul>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="manual"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={"header-link"}
                        >
                            Manuals
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="game"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={"header-link highlight-text"}
                        >
                            Game
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;