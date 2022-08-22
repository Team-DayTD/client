import React, { useState } from 'react';

const LikeFilter = () => {
  const [style, setStyles] = useState("캐주얼");
  const [clothe, setClothes] = useState("전체");
  const styleList = ["캐주얼","러블리","심플베이직","섹시글램","유니크","빈티지","유니섹스","기타"]
  const clotheList = ["전체","외투","상의","하의","한벌의상"];

  const changeStyle = (s)=>{
      setStyles(s);
  };
  const changeClothes = (clothe)=>{
      setClothes(clothe);
  };

  return (
    <div className='likeFilterContainer'>
      <ul className='clothes'>
        {clotheList.map(c=>
        (<li onClick={()=>changeClothes(c)} className={`clotheItem ${clothe===c?'active':'default'}`}>#{c}</li>))}
      </ul>
      <ul className='style'>
        {styleList.map(s=>
        (<li onClick={()=>changeStyle(s)} className={`styleItem ${style===s?'active':'default'}`}>#{s}</li>))}
      </ul>
    </div>
  );
};

export default LikeFilter;