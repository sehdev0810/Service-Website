import React from 'react'
import "./Component1.css"
import Box from './Box'
import Box2 from './Box2'
const Component1 = () => {
    return (
        <>
            <div id="home" className="component1">
                <img src="src\assets\Images\Top Images banner.png" alt="img2" className='img2' />
                <Box
                    heading="WE ARE BEST"
                    content="Lorem ipsum dolor, sit amet consectetur adipis Nihil enim minus laudantium! Vero minima fugit ea, labore rem id. Odit."
                    buttonText="READ MORE"
                    className="box1"
                />

                <Box2 />
            </div>
        </>
    )
}

export default Component1
