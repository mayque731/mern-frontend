import React from "react";

import "./Card.css";

const Card = props => {
    return(
        <li className={`card ${props.className}`} style={props.style}>
            {props.children}
        </li>
    );
};

export default Card;