import React, { useState } from 'react';

const LikeFilter = (props) => {
  const styleList = ["전체", "캐주얼","러블리","심플베이직","섹시글램","유니크","빈티지","유니섹스","기타"]
  const clotheList = ["전체","외투","상하의","한벌의상"];


  return (
    <div className='likeFilterContainer'>
      <ul className='clothes'>
        {clotheList.map(c=>
        (<li onClick={()=>props.changeClothes(c)} className={`clotheItem ${props.clothe===c?'active':'default'}`}>#{c}</li>))}
      </ul>
      <ul className='style'>
        {styleList.map(s=>
        (<li onClick={()=>props.changeStyle(s)} className={`styleItem ${props.style===s?'active':'default'}`}>#{s}</li>))}
      </ul>
    </div>
  );
};

export default LikeFilter;