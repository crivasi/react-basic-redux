import React from "react";
import './Button.css';

export const Button = (props) => (
    <button 
        className="button action" 
        onClick={props.click ? props.click : null}
    >
        {props.title}
    </button>
);