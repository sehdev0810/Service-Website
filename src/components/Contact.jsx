import React from 'react';
import "./Contact.css"
const Contact = ({ iconSrc, type, contactDesc1, className }) => {
    return (
        <div className={`contact-options ${className}`}>
            <img src={iconSrc} alt="" className='contact-icon' />
            <div className="contact-content">
                <p className="type">{type}</p>
                <p className="contact-desc">{contactDesc1}</p>
                <p className="contact-desc">{contactDesc1}</p>
            </div>
        </div>
    );
}

export default Contact;
