import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CodyMyFilter from './codyMyFilter';
import axios from 'axios'
import Loader from '../shared/Loader';

const CodyMy = (props) => {
    const [loading, setLoading] = useState(true);
    const [locFilterLoading, setLocFilterLoading] = useState(true);
    const [styleFilterLoading, setStyleFilterLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cody, setCody] = useState();
    const [locFilterOpt, setLocFilterOpt] = useState();
    const [styleFilterOpt, setStyleFilterOpt] = useState('전체');
    const [isHeart, setIsHeart] = useState(false);
    const userId = JSON.stringify(sessionStorage.loginId).replace(/\"/gi, "");
    
    const codyName = {
      cody1: "코디1",
      cody2: "코디2",
      cody3: "코디3",
    }
    const styleDic = {"all":"전체",
    "casual":"캐주얼","lovely":"러블리","simple&basic":"심플베이직",
    "sexy":"섹시글램","unique":"유니크","vintage":"빈티지","ect":"기타"}

    const fetchCody = async()=>{
      try{
        setLoading(true);
        const url = 'http://127.0.0.1:8000/clothes/api/clothes/'
        const response = await axios.get(url,{withCredentials:true});
        setCody(response.data);
        setIsHeart(false);
      } catch(e){
        setError(e);
        console.log(e);
      }
      setLoading(false);
    }
    const fetchFilterLocOpt = async()=>{
      try{
        fetchFilterStyleOpt();
        setLocFilterLoading(true);
        const url = 'http://127.0.0.1:8000/clothes/api/my_location/'
        const response = await axios.get(url, {params:{user_id: userId}},{withCredentials:true});
        setLocFilterOpt(response.data);
      } catch(e){
        setError(e);
        console.log(e);
      }
      setLocFilterLoading(false);
    }
    const fetchFilterStyleOpt = async()=>{
      try{
        setStyleFilterLoading(true);
        const url = 'http://127.0.0.1:8000/clothes/api/my_style/'
        const response = await axios.get(url, {params:{user_id: userId}},{withCredentials:true});
        setStyleFilterOpt(styleDic[response.data.user_style]);
        // setStyleFilterOpt(response.data);
      } catch(e){
        setError(e);
        console.log(e);
      }
      setStyleFilterLoading(false);
    }

    const nextImgHandler=()=>{
      fetchCody()
      setIsHeart(false)
    }
    const ClickHeart=()=>{
      setIsHeart(!isHeart)
    }
    useEffect(()=>{
      fetchFilterLocOpt();
      fetchCody();
    },[props.nav])

    return (
        <div className='codyMy'>
          <h3 className='title'>오늘의 추천 {codyName[props.nav]}</h3>
          {locFilterLoading?
            <Loader type="spin" spinColor="#175A97" fontColor="#175A97"/>
            :<CodyMyFilter locOpt={locFilterOpt} styleOpt={styleFilterOpt} fetchCody={fetchCody}/>}
          <div className='btnBox'>
            <button className='nextBtn'
              onClick={nextImgHandler}>다음 코디</button>                 
          </div>
          <div className='codyBox'>
            <FontAwesomeIcon icon={faHeart} onClick={ClickHeart} 
              className={`heart ${isHeart?'heartActive':null}`} />
            {loading?<Loader type="spin" spinColor="#175A97" fontColor="#175A97"/>
            :<img className='codyImg' src={`http://127.0.0.1:8000${cody[0].image}`} alt="" />}
          </div>
        </div>
    );
};

export default CodyMy;