import React, { useState, useEffect } from 'react';
import './playing-card.scss';
import male1 from '../images/male1.png';

export default function BlankPlayingCard(){

    return(
        <div className="cardbox">
            <div className="cardimage">
                <img
                    src={male1}
                    className="photo"
                    alt="Photo."
                />
            </div>
            <div className="card-desc">
                blank
            </div>
        </div>
    );
   
}