import React from 'react'
import "./Component7.css"
import { Link } from 'react-scroll';
import Contact from './Contact'
const Component7 = () => {
    return (
        <div id='contact-us' className='component7'>
            <img src="src\assets\Images\Heading.png" alt="comp7heading" className='comp7heading' />
            <Contact
                iconSrc="src\assets\Images\email.png"
                type="EMAIL"
                contactDesc1="free@psdfreebies.com"
                className="c1"
            />
            <Contact
                iconSrc="src\assets\Images\phone.png"
                type="CALL US"
                contactDesc1="+123 456 7890"
                className="c2"
            />
            <Contact
                iconSrc="src\assets\Images\address.png"
                alt="address icon"
                type="ADDRESS"
                contactDesc1="123, Main Road, New City,"
                className="c3"
            />
            <p className="copyright">
                COPYRIGHT 2019 | Designed By PSDFreebies.com
            </p>

                <Link to="home" smooth={true} duration={500} className='btm-link'><img src="src\assets\Images\bottom.png" alt="" /></Link>

        </div>
    )
}

export default Component7
