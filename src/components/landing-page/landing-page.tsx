import React, { useState } from 'react';
import TextLoop from "react-text-loop";
import './landing-page.scss'



function LandingPage(){
    const [cards, setCards] = useState(0);
    const [name, setName] = useState("");

    return (
        <div>
            <h2 className="hero-tag hero-tag--visible ">
                <div className="highlight-text">
                Memos
                </div>
                <div>
                Do you have    
                </div>
                {" "}
                <TextLoop
                springConfig={{ stiffness: 70, damping: 31 }}
                adjustingSpeed={500}
                >
                    <span className="semihighlight-text">eagle eye</span>
                    <span className="semihighlight-text">computer memory</span>
                    <span className="semihighlight-text">sharp mind</span>
                </TextLoop>
                ? 
                <div>
                You can check it right here.
                </div>
            </h2>
        </div>
    );
}

export default LandingPage;