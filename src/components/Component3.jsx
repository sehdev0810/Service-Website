import React from 'react'
import "./Component3.css"
import Box from './Box'
const Component3 = () => {
    return (
        <div id='blog' className='component3'>
            <img src="src\assets\Images\Portfolio2.png" alt="img5" className='img5' />
            <Box
                heading="PORTFOLIO"
                content="Lorem ipsum dolor, sit amet 
                    consectetur adipis Nihil enim minus laudantium! 
                    Vero minima fugit ea, labore rem id. Odit. Nihil enim minus laudantium!"
                buttonText="READ MORE"
                className="comp3box2"
            />
            <h3 className='comp3h4'>Lorem ipsum dolor</h3>
            <p className="comp3p">Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. At vel
                quibusdam earum illum dolore reprehenderit, possimus
                repudiandae perferendis voluptate libero iusto ducimus tempore,
                consequuntur deserunt enim sed. Accusamus libero, ex enim distinctio,
                suscipit soluta voluptate at consectetur iste aut aperiam!
                repudiandae perferendis voluptate libero iusto ducimus tempore,
                consequuntur deserunt enim sed. Accusamus libero, ex enim distinctio,
                suscipit soluta voluptate at !</p>
        </div>
    )
}

export default Component3
