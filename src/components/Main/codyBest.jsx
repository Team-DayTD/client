import React from 'react';
import Carousel from '../shared/carousel';

const CodyBest = () => {
  return (
    <div className='myContainer'>
      <div className='sliderContainer'>
        <Carousel title1="AI추천 " title2='"오늘의 코디"' title3="" />
      </div>
      <div className='sliderContainer'>
        <Carousel title1="AI추천 "  title2='"캐주얼룩"' title3=""/>
      </div>
      <div className='sliderContainer'>
        <Carousel title1=""  title2="좋아요 TOP8" title3=""/>
      </div>
    </div>
  );
};

export default CodyBest;