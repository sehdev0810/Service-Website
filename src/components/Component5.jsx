import React from 'react'
import "./Component5.css"
import Testimonial from './Testimonial'
const Component5 = () => {
    return (
        <div id='testimonials' className='component5'>
            <h2 className="comp5h2">Testimonials</h2>
            <p className="comp5p">Lorem ipsum dolor</p>
            <Testimonial
                description="Lorem ipsum dolor mero moleamet, soluta euism od isea, 
                hiea unereusams ullu tpamco detore aer rper quo,utam signiferuuue uo. 
                Brute inani in prom in.Lorem ipsum dolor mero moleamet, soluta euism od"
                className="test1"
            />
            <img src="src\assets\Images\Rectangle 4 copy.png" alt="comp5img" className='comp5img' />
            <Testimonial
                description="Lorem ipsum dolor mero moleamet, soluta euism od isea, 
                hiea unereusams ullu tpamco detore aer rper quo,utam signiferuuue uo. 
                Brute inani in prom in.Lorem ipsum dolor mero moleamet, soluta euism od"
                className="test2"
            />

        </div>
    )
}

export default Component5
