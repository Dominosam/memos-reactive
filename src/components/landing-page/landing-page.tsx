import React, { useState } from 'react';
import TextLoop from "react-text-loop";
import './landing-page.scss'
import LandingPageHeader from "./header";

function LandingPage(){
    const [cards, setCards] = useState(0);
    const [name, setName] = useState("");

    return (
        <div>
            <LandingPageHeader />
            <h1 className="highlight-text">Memos</h1>
            <h2>
                Do you have
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