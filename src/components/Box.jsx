import React from 'react';
import "./Box.css";

const Box = ({ heading, content, buttonText, className }) => {
    return (
        <div className={`box ${className}`}>
            <h3 className='h1'>{heading}</h3>
            <p className="p1">{content}</p>
            <button className="more">{buttonText}</button>
        </div>
    );
}

export default Box;
