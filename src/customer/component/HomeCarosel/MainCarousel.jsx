import React from 'react'
import { Bannerimag } from './MainCdata';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = Bannerimag.map((item) => <img className='cursor-pointer align-middle' role='presentation' src={item.image} alt="" />)
   
  return (
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite

    />
  )  
}

export default MainCarousel;