import React, { useState, useEffect } from 'react';
import './playing-card.scss';
import 'font-awesome/css/font-awesome.min.css';
import test from '../images/test.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


const PlayingCard = () => {
    const [author, setAuthor] = useState("");
    const [img, setImage] = useState("")
    const [instagram, setInstagram] = useState("TestingDutyDoodler");
    return(
        <div className="cardbox">
            <div className="cardimage">
                <img
                    src={test}
                    className="photo"
                    alt="Photo."
                    className="image"
                />
            </div>
            <div className="card-desc">
                <div className="insta-logo">
                
                <FontAwesomeIcon icon={faFacebook} className="ilogo"/>
                </div>
                <div className="insta-link">
                    <a href={`http://instagram.com/${instagram}`} className="link">{"@" + instagram}</a>
                </div>
            </div>
        </div>
    );
}

export default PlayingCard;
