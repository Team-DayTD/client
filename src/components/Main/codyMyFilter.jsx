import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const CodyMyFilter = ()=>{
  const [style, setStyles] = useState("캐주얼");
  const [ages, setAges] = useState("20");
  const [loc, setLoc] = useState("서대문구");
  const [clothe, setClothes] = useState("전체");
  const [isOpen, setToggle] = useState(false); 

  const styleList = ["캐주얼","러블리","심플베이직","섹시글램","유니크","빈티지","유니섹스","기타"]
  const clotheList = ["전체","외투","상의","하의","한벌의상"];
  const toggleBtn = () => {
    setToggle(isOpen => !isOpen); // on,off 개념 boolean
  }
  const changeStyle = (s)=>{
    setStyles(s);
  };
  const changeAges = (age)=>{
    setAges(age);
  };
  const changeClothes = (clothe)=>{
    setClothes(clothe);
  };
  const changeLoc = (l)=>{
    setLoc(l);
  };
  return (
    <div className='filterContainer'>
        <div className='showFilter'>
        <ul className='filter'>
            <li className='clotheItem active'>#{style}룩</li>
            <li className='clotheItem active'>#{clothe}</li>
            <li className='clotheItem active'>#{ages}대</li>
            <li className='clotheItem active'>#{loc}</li>
        </ul>
        <FontAwesomeIcon className={`option ${isOpen ?'option':'turn'}`} onClick={()=>toggleBtn()} icon={faChevronDown} />
        </div>
        <div className={`Hidefilter ${isOpen ?'showFilterBox':'hideFilterBox'}`}>
        <ul className='clothes'>
          {clotheList.map(c=>
          (<li onClick={()=>changeClothes(c)} className='clotheItem'>#{c}</li>))}
        </ul>
        <ul className='style'>
          {styleList.map(s=>
          (<li onClick={()=>changeStyle(s)} className='styleItem'>#{s}</li>))}
        </ul>
        </div>
    </div>
  );
};

export default CodyMyFilter;