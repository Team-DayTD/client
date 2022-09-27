import React from 'react';
import LikeFilter from '../components/Like/likeFilter';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const Like = () => {
  const styleDic = {"전체":"all",
  "캐주얼":"casual","러블리":"lovely","심플베이직":"simple&basic",
  "섹시글램":"sexy","유니크":"unique","빈티지":"vintage","기타":"ect"}
  const [style, setStyles] = useState("전체");
  const [clothe, setClothes] = useState("전체");
  const [likeClothes, setLikeClothes] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const userId = JSON.stringify(sessionStorage.loginId).replace(/\"/gi, "");
  const navigate = useNavigate();


  const fetchLikeClothes = async()=>{
    try{
      setLoading(true);
      const url = 'http://127.0.0.1:8000/clothes/api/likes/'
      const response = await axios.get(url,{withCredentials:true});
      setLikeClothes(response.data);
      console.log(response.data);
    } catch(e){
      setError(e);
      console.log(e);
    }
    setLoading(false);
  }

    const fetchLike = async(cody)=>{
      console.log('선택');
      const [clothes_id, like_select, style] = cody.split(',');
    try{
      const url = 'http://127.0.0.1:8000/clothes/api/likes/post/'
      const header = {"Content-type":"application/json"}
      const data= {
        like_select: true,
        user: userId,
        clothes: Number(clothes_id),
        style: style
      }
      console.log(data);
      const response = await axios.post(url, data, header,{ withCredentials: true })
      console.log(response);
    } catch(e){
      setError(e);
      console.log(e);
    }
  }

  const fetchUnlike = async(cody)=>{
    console.log('취소');
    const [clothes_id, like_select, style] = cody.split(',');
  try{
    const url = 'http://127.0.0.1:8000/clothes/api/likes/put/'
    const header = {"Content-type":"application/json"}
    const data= {
      like_select: false,
      user: userId,
      clothes: Number(clothes_id),
      style: style
    }
    console.log(data);
    const response = await axios.put(url, data, header,{ withCredentials: true })
    fetchLikeClothes()
    console.log(response);
  } catch(e){
    setError(e);
    console.log(e);
  }
}
  
  const isLogin = ()=>{
    if(!JSON.stringify(sessionStorage.loginId)){
      navigate('/');
    }
  }
  const changeStyle = (s)=>{
    setStyles(s);
  };
  const changeClothes = (clothe)=>{
      setClothes(clothe);
  };

  useEffect(()=>{
    isLogin();
    fetchLikeClothes()
  },[])
  return (
    <div className='like'>
      <h2 className='title'>❤️좋아요❤️</h2>
      <LikeFilter style={style} clothe={clothe} changeStyle={changeStyle} changeClothes={changeClothes}/>
      <div className='likeContainer'>
      {
        !loading?likeClothes.map(cody=>(
          (style==="전체"||cody.style===style)&&cody.user===userId&&cody.like_select?
            (<div className='imgBox' id={cody.clothes} name={cody.like_select} >
              <svg id={[cody.clothes, cody.like_select, cody.style]} 
                onClick={cody.like_select?(e)=>{fetchUnlike(e.target.id)}:(e)=>{fetchLike(e.target.id)}}
                className={`heart ${cody.like_select?'heartActive':''}`}  
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path id={[cody.clothes, cody.like_select, cody.style]} 
                onClick={cody.like_select?(e)=>{fetchUnlike(e.target.id)}:(e)=>{fetchLike(e.target.id)}}
                className={`heart ${cody.like_select?'heartActive':''}`} 
                d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z"></path></svg>
              <img className='codyImg' id={cody.clothes} name={cody.like_select}
                src={`${process.env.PUBLIC_URL}/media/clothes/${cody.style}/${cody.clothes}.jpg`} alt="" />
            </div>):null)):null
      }
      </div>
    </div>
  );
};

export default Like;