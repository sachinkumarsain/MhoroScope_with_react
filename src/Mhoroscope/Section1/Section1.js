import React from 'react'
import leftCover from ""
import pakeImage1 from "../images/packaes_image1.jpg"
import pakeImage2 from "../images/package-image2.jpg"
import pakeImage3 from "../images/pakage-image3.jpg"
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';


import "./Section1.css"

function Section() {
  return (
    <>
      <section>
        <div className='left'>
          <img src={leftCover}></img>
          <div className='leftCoverContant'>
            <h1>Frozen River Trek</h1>
            <p>12 Nights-07 Days</p>
          </div>
          <h2><span><WestIcon/></span><span><EastIcon/></span></h2>
        </div>
        <div className='right'>
          <div className='top'>
            <h1>Let us plan you a
              perfect<span>India Holiday</span></h1>
              <p>Personalised, well-crafted tour packages for best experiences</p>
          </div>
          <div className='bottom'>
            <div className='img-package'>
              <div className='image'>
                <img src={pakeImage1}></img>
              </div>
              <div className='packages'>
                <h2>Wildlife</h2>
                <p>70+packages</p>
              </div>
            </div>
            <div className='img-package'>
              <div className='image'>
                <img src={pakeImage2}></img>
              </div>
              <div className='packages'>
                <h2>Heritage</h2>
                <p>25+packages</p>
              </div>
            </div>
            <div className='img-package'>
              <div className='image'>
                <img src={pakeImage3}></img>
              </div>
              <div className='packages'>
                <h2>Pilgrimage</h2>
                <p>65+packages</p>
              </div>
            </div>
          </div>
          <h2 className='arrow'><span><WestIcon/></span><span><EastIcon/></span></h2>
        </div>
      </section>
    </>
  )
}

export default Section