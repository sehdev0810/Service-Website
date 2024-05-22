import React from 'react';
import "./Service.css"
const Service = ({ imageSrc, heading, description, className }) => {
    return (
        <div className={`service ${className}`}>
            <img src={imageSrc} alt="" className="service-img" />
            <div className="service-content">
                <p className="service-heading">{heading}</p>
                <p className="service-desc">{description}</p>
            </div>
        </div>
    );
}

export default Service;
