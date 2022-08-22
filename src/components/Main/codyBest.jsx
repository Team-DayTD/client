import React from 'react';
import Carousel from '../shared/carousel';

const CodyBest = () => {
  return (
    <div className='myContainer'>
      <div className='sliderContainer'>
        <Carousel/>
      </div>
      <div className='sliderContainer'>
        <Carousel/>
      </div>
    </div>
  );
};

export default CodyBest;