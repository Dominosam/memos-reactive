import React from 'react';
import './playing-card.scss';


export default function PlayingCard(props: any){
    return(
        <div className="cardbox">
            <div className="cardimage">
                <img
                    src={props.image}
                    className="photo"
                    alt="Photo."
                />
            </div>
            <div className="card-desc">
               {props.desc}
            </div>
        </div>
    );
   
}

