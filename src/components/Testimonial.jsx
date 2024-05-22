import React from 'react';
import "./Testimonial.css"
const Testimonial = ({ description, className }) => {
    return (
        <div className={`testimonial ${className}`}>
            <p className="test-desc">{description}</p>
            <button className="read-more-btn">READ MORE</button>
        </div>
    );
}

export default Testimonial;
