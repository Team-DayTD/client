import React, { useState, useEffect } from 'react';
import CodyMyFilter from './codyMyFilter';
import axios from 'axios'
import Loader from '../shared/Loader';

const CodyMy = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [cody, setCody] = useState();
    const fetchCody = async()=>{
      try{
        setLoading(true);
        const url = 'http://127.0.0.1:8000/clothes/api/clothes/'
        const response = await axios.get(url, {withCredentials:true});
        setCody(response.data);
      } catch(e){
        setError(e);
        console.log(e);
      }
      setLoading(false);
    }
    
    const [imageN,setImageN] = useState('1');

    const randomN = () => {
      const random = Math.ceil(Math.random()*14);
      setImageN(String(random));
      console.log(imageN);
    }

    useEffect(()=>{
      fetchCody();
      randomN();
      console.log(cody);
    },[props.nav])


    return (
        <div className='codyMy'>
          <h3 className='title'>오늘의 추천 {props.nav}</h3>
          <CodyMyFilter/>
          <div className='btnBox'>
            <button className='nextBtn'
              onClick={randomN}>다음 코디</button>                 
          </div>
          {/* <div className='codyBox'>
            <img className='codyImg' src={cody[0].image} alt="" />
            {loading?
            <Loader type="spin" spinColor="#175A97" fontColor="white"/>
            :<img className='codyImg' src={cody[0].image} alt="" />}
          </div> */}
          <div className='codyBox'>
              <img className='codyImg' src={`${process.env.PUBLIC_URL}/images/clothes/(${imageN}).jpg`} alt="" />
          </div>
        </div>
    );
};

export default CodyMy;