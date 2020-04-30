import React, { useState } from 'react';
import TextLoop from "react-text-loop";
import './landing-page.scss'
import PlayingCard from '../playing-card/playing-card';
import BlankPlayingCard from "../playing-card/blank-playing-card";
import male1 from "../images/male1.png";
import male2 from "../images/male2.png";
import male4 from "../images/male4.png";
import male5 from "../images/male5.png";
import {getRandomImage} from "../../helpers/randomizer"
import { ScrollIcon } from "../../helpers/scroll-icon/scroll-icon";

function LandingPage(){
    const [cards, setCards] = useState(0);
    const [name, setName] = useState("");
    const images = [male1, male2, male4, male5];

    return (
        <div>
            <div className="main">
                <div className="main-text">
                    memos. <br/>
                    Let's check your <br/>
                    <TextLoop
                    springConfig={{ stiffness: 70, damping: 31 }}
                    adjustingSpeed={500}
                    >
                        <span className="semihighlight-text">eagle eye</span>
                        <span className="semihighlight-text">fast memory</span>
                        <span className="semihighlight-text">sharp mind</span>
                    </TextLoop>
                </div>  
                <div className="main-cards">
                        
                    <div className="cards-row">
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                    </div>
                    
                    <div className="cards-row">
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                    </div>
                    
                    <div className="cards-row">
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                            <PlayingCard image={getRandomImage(images)} desc={"Play"}/>
                    </div>
                </div>     
            </div>
            <div className="footer">
                <ScrollIcon/>
            </div>
        </div>
    );
}

export default LandingPage;