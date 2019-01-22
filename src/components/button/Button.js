import React from "react";
import './Button.css';

export const Button = (props) => (
    <button
        className="button action" 
        onClick={props.actionButton}
    >
        {props.title}
    </button>
);