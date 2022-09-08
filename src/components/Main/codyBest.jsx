import React from 'react';
import Carousel from '../shared/carousel';
import dummy from "../../data/data.json";

const CodyBest = () => {
  const styleDic = {"전체":"all",
  "캐주얼":"casual","러블리":"lovely","심플베이직":"simple&basic",
  "섹시글램":"sexy","유니크":"unique","빈티지":"vintage","기타":"ect"}
  function ImgDIvi(style){
    const styles=[];
    dummy.codyImg.forEach(cody => {
      if(styleDic[style] === cody.type){
        styles.push(cody);
      }
    });
    return styles.sort(() => Math.random() - 0.5);
  }
  function RandomCody(n){
    const styles=[];
    for(let i=0; i<n; i++){
      styles.push(dummy.codyImg[Math.floor(Math.random()*dummy.codyImg.length)])
    }
    return styles;
  }

  return (
    <div className='myContainer'>
      <div className='sliderContainer'>
        <Carousel title1="AI추천 " title2='"오늘의 코디"' title3="" cody={RandomCody(8)}/>
      </div>
      <div className='sliderContainer'>
        <Carousel title1="AI추천 "  title2='"캐주얼룩"' title3="" cody={ImgDIvi("캐주얼")}/>
      </div>
      <div className='sliderContainer'>
        <Carousel title1=""  title2="좋아요 TOP8" title3="" cody={RandomCody(8)}/>
      </div>
    </div>
  );
};

export default CodyBest;