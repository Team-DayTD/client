import React, { useState, useEffect } from 'react';
import CodyMyFilter from './codyMyFilter';
import axios from 'axios'
import Loader from '../shared/Loader';

const CodyMy = (props) => {
    const [loading, setLoading] = useState(true);
    const [filterLoading, setFilterLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cody, setCody] = useState();
    const [filterOpt, setFilterOpt] = useState();
    const userId = JSON.stringify(sessionStorage.loginId).replace(/\"/gi, "");

    const fetchCody = async()=>{
      try{
        setLoading(true);
        const url = 'http://127.0.0.1:8000/clothes/api/clothes/'
        const response = await axios.get(url,{withCredentials:true});
        setCody(response.data);
      } catch(e){
        setError(e);
        console.log(e);
      }
      setLoading(false);
    }
    const fetchFilterOpt = async()=>{
      try{
        setFilterLoading(true);
        const url = 'http://127.0.0.1:8000/clothes/api/my_location/?user_id'
        const response = await axios.get(url, {params:{user_id: userId}},{withCredentials:true});
        setFilterOpt(response.data);
      } catch(e){
        setError(e);
        console.log(e);
      }
      setFilterLoading(false);
    }

    const nextImgHandler=()=>{
      fetchCody()
    }

    useEffect(()=>{
      fetchFilterOpt();
      fetchCody();
    },[props.nav])

    return (
        <div className='codyMy'>
          <h3 className='title'>오늘의 추천 {props.nav}</h3>
          {filterLoading?<Loader type="spin" spinColor="#175A97" fontColor="#175A97"/>
            :<CodyMyFilter opt={filterOpt}/>}
          <div className='btnBox'>
            <button className='nextBtn'
              onClick={nextImgHandler}>다음 코디</button>                 
          </div>
          <div className='codyBox'>
              {loading?<Loader type="spin" spinColor="#175A97" fontColor="#175A97"/>
              :<img className='codyImg' src={`http://127.0.0.1:8000${cody[0].image}`} alt="" />}
          </div>
        </div>
    );
};

export default CodyMy;