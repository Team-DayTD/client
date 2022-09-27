import React, { useState } from 'react';
import Carousel from '../shared/carousel';
import dummy from "../../data/data.json";
import axios from "axios";
import Loader from '../shared/Loader';
import { useEffect } from 'react';

const CodyBest = () => {
  const [mainCody, setMainCody] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // 스타일 불러오기
  const fetchFilterStyleOpt = async()=>{
    try{
      setLoading(true);
      const url = 'http://127.0.0.1:8000/clothes/api/main/'
      const response = await axios.get(url, {withCredentials:true});
      setMainCody(response.data);
      console.log(response.data);
    } catch(e){
      setError(e);
      console.log(e);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchFilterStyleOpt();
  },[])
  return (
    <>
    {loading ? 
      <Loader type="spin" spinColor="#175A97" fontColor="#175A97" 
      minHeight="600px" message="AI가 코디를 추천하고 있어요!"/>
    :(<div className='myContainer'>
      <div className='sliderContainer'>
        <Carousel title1="AI추천 " title2='"오늘의 코디"' title3="" cody={mainCody.today}/>
      </div>
      <div className='sliderContainer'>
        <Carousel title1="AI추천 "  title2='"캐주얼룩"' title3="" cody={mainCody.my}/>
      </div>
      <div className='sliderContainer'>
        <Carousel title1=""  title2="좋아요 TOP8" title3="" cody={mainCody.ran}/>
      </div>
    </div>)}
    </>
  );
};

export default CodyBest;