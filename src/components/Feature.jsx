import React from 'react'
import "./Feature.css"
const Feature = ({ heading, content,className }) => {
    return (
        <div className={className}>
            <p className="feature-heading">{heading}</p>
            <p className="feature-content">{content}</p>
        </div>
    );
}

export default Feature
