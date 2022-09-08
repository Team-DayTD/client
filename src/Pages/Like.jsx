import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import dummy from "../data/data.json";
import LikeFilter from '../components/Like/likeFilter';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Like = () => {
  const styleDic = {"전체":"all",
  "캐주얼":"casual","러블리":"lovely","심플베이직":"simple&basic",
  "섹시글램":"sexy","유니크":"unique","빈티지":"vintage","기타":"ect"}
  const [style, setStyles] = useState("전체");
  const [clothe, setClothes] = useState("전체");
  const navigate = useNavigate();
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
  })
  return (
    <div className='like'>
      <h2 className='title'>❤️좋아요❤️</h2>
      <LikeFilter style={style} clothe={clothe} changeStyle={changeStyle} changeClothes={changeClothes}/>
      <div className='likeContainer'>
        {
          dummy.codyImg.map((cody) =>(
            (clothe==='전체'||cody.clothe===clothe)?
            (style==="전체"||cody.type===styleDic[style])?<div className='imgBox'>
              <img className='codyImg' src={`${process.env.PUBLIC_URL}/images/clothes/${cody.image}`} alt="" />
            </div>:null: null
          ))
        }
      </div>
    </div>
  );
};

export default Like;