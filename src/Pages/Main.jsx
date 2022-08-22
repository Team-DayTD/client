import React, { useState, useEffect } from 'react';
import Weather from '../components/Main/weather';
import RecoCody from '../components/Main/RecoCody';
import axios from 'axios'

const MainPage = ()=>{
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [GPS, setGPS] = useState();
  const [lat, setLat] = useState(33.0);
  const [lon, setLon] = useState(126.0);
  
  const fetchGPS = async()=>{
    try{
      setLoading(true);
      const url = 'http://127.0.0.1:8000/our_weather/'
      const response = await axios.get(url, {params:{ lat:lat ,lon:lon}},
      {withCredentials:true});
      setGPS(response.data);
    } catch(e){
      setError(e);
      console.log(e);
    }
    setLoading(false);
  }

  const getLocation = () => {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      }, function(error) {
        console.error(error);
      }, {
        maximumAge: 0,
        enableHighAccuracy: false,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
      return;
    }
  }

  useEffect(()=>{
    setError(false);
    setLoading(true);
    getLocation();
    fetchGPS();
    console.log(lat, lon, error, loading);
  },[lat])
  
  return (
    <div>
      <Weather GPS={GPS} loading={loading}/>
      <RecoCody/>
    </div>
  );
}

export default MainPage;