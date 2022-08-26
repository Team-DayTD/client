import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import location from "../../data/location.json";
import axios from 'axios';
import { useEffect } from 'react';
const CodyMyFilter = (props)=>{
  const [style, setStyles] = useState("캐주얼");
  const [ages, setAges] = useState("20");
  const [loc, setLoc] = useState({
    si:'서울특별시',
    gu:'전체',
    dong:'전체'
  });
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

  const onSave = (e) => {
    const id = JSON.stringify(sessionStorage.loginId).replace(/\"/gi, "");
    const url = 'http://127.0.0.1:8000/clothes/api/my_location/post/'
    const header = {"Content-type":"application/json"}
    const data= {
      user_id: id,
      si:loc.si,
      dong: loc.dong,
      gu: loc.gu,
    }
    axios.post(url, data, header,{ withCredentials: true })
    .then(function (response) {
    console.log(response);
    if(response.status == 201){
      alert('저장 성공!')
      } else {
      let message = response.data.message;
      alert(message);
      }
      }).catch(function (error) {
        console.log(error);
      });
    
  }
  useEffect(()=>{
    setLoc({si:props.opt[0].si, 
      gu:props.opt[0].gu, 
      dong:props.opt[0].dong})
  },[props.opt])

  return (
    <div className='filterContainer'>
        <div className='showFilter'>
        <ul className='filter'>
            <li className='clotheItem active'>#{style}룩</li>
            <li className='clotheItem active'>#{clothe}</li>
            <li className='clotheItem active'>#{ages}대</li>
            <li className='clotheItem active'>#{`${loc.si} ${loc.gu} ${loc.dong}`}</li>
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
        <div className='loc'>
        <select id='location' className='select'
          value={loc.si} onChange={e =>setLoc({...loc, si:e.target.value})}>
          {Object.keys(location).map(si => (
            <option value={si} key={si}>
              {si}
            </option>
          ))}
        </select>
        <select id='location' className='select'
          
          value={loc.gu} onChange={e =>setLoc({...loc, gu:e.target.value})}>
          {Object.keys(location[loc.si]).map(gu => (
            <option value={gu} key={gu}>
              {gu}
            </option>
          ))}
        </select>
        <select id='location' className='select'
          value={loc.dong} onChange={e =>setLoc({...loc, dong:e.target.value})}>
          {location[loc.si][loc.gu].map(dong => (
            <option value={dong} key={dong}>
              {dong}
            </option>
          ))}
        </select>
        </div>
        <button onClick={onSave}>저장</button>
        </div>
    </div>
  );
};

export default CodyMyFilter;