import React from 'react'
import "./Component4.css"
import Service from './Service'
const Component4 = () => {
    return (
        <div id='services' className='component4'>
            <h2 className="comp4h2">How it works?</h2>
            <p className="comp4p">Lorem ipsum dolor</p>
            <Service
                imageSrc="src\assets\Images\01.png"
                heading="LOREM IPSUM DOLOR"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                className="service1"
            />
            <img src="src\assets\Images\Rectangle 4 copy.png" alt="comp4i1" className='comp4i1'/>
            <Service
                imageSrc="src\assets\Images\02.png"
                heading="LOREM IPSUM DOLOR"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                className="service2"
            />
            <img src="src\assets\Images\Rectangle 4 copy.png" alt="comp4i2" className='comp4i2'/>
            <Service
                imageSrc="src\assets\Images\03.png"
                heading="LOREM IPSUM DOLOR"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                className="service3"
            />
        </div>
    )
}

export default Component4
