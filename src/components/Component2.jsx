import React from 'react'
import "./Component2.css"
import Feature from './Feature'
const Component2 = () => {
  return (
    <div id='about-us' className='component2'>
          <h2 className='com2h2'>WHY CHOOSE US</h2>
          <p className="com2p2">LOREM IPSUM DOLOR</p>
          <Feature
              className='feature'
                heading="FEATURE"
                content="Lorem ipsum dolor mero moleamet, soluta
                euism od isea, hiea unereusams ullu
                tpamco detore aer rper quo,utam sig-
                niferuuue uo. Brute inani in prom"
          />
          <img src="src\assets\Images\Rectangle 4 copy.png" alt="img4" className='img4'/>
          <Feature className='feature2'
                heading="ABOUT US"
                content="Lorem ipsum dolor mero moleamet, soluta
                euism od isea, hiea unereusams ullu
                tpamco detore aer rper quo,utam sig-
                niferuuue uo. Brute inani in prom"
          />
          <button className="more2">READ MORE</button>
    </div>
  )
}

export default Component2
