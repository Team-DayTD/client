import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import location from "../../data/location.json";
import axios from 'axios';
import { useEffect } from 'react';
const CodyMyFilter = memo((props)=>{
  const [style, setStyle] = useState("전체");
  const [loc, setLoc] = useState({
    si:'서울특별시',
    gu:'전체',
    dong:'전체'
  });
  const [locSave, setLocSave] = useState();
  const [styleSave, setStyleSave] = useState();
  const [error, setError] = useState(false);
  const [isOpen, setToggle] = useState(false); 
  const id = JSON.stringify(sessionStorage.loginId).replace(/\"/gi, "");
  const styleList = ["전체", "캐주얼","러블리","심플베이직","섹시글램","유니크","빈티지","기타"]
  const styleDic = {"전체":"all",
    "캐주얼":"casual","러블리":"lovely","심플베이직":"simple&basic",
    "섹시글램":"sexy","유니크":"unique","빈티지":"vintage","기타":"ect"}

  const toggleBtn = () => {
    setToggle(isOpen => !isOpen); // on,off 개념 boolean
  }

  const fetchLocSave = async()=>{
    try{
      const url = 'http://127.0.0.1:8000/clothes/api/my_location/post/'
      const header = {"Content-type":"application/json"}
      const data= {
        user_id: id,
        si:loc.si,
        dong: loc.dong,
        gu: loc.gu,
      }
      const response = await axios.post(url, data, header,{ withCredentials: true })
      setLocSave(response);
    } catch(e){
      setError(e);
      console.log(e);
    }
  }

  const fetchStyleSave = async()=>{
    try{
      const url = 'http://127.0.0.1:8000/clothes/api/my_style/post/'
      const header = {"Content-type":"application/json"}
      const data= {
        user_id: id,
        user_style: styleDic[style]
      }
      const response = await axios.post(url, data, header,{ withCredentials: true })
      setStyleSave(response);
    } catch(e){
      setError(e);
      console.log(e);
    }
  }

  const onSave = (e) => {
    fetchLocSave();
    fetchStyleSave();
    console.log(locSave, styleSave)
    if(locSave.status == 201){
      alert('저장 성공!')
      props.fetchCody()
      } else {
      let message = locSave.data.message;
      alert(message);
      }
    
  }
  useEffect(()=>{
    setLoc({si:props.locOpt.si, 
      gu:props.locOpt.gu, 
      dong:props.locOpt.dong});
    setStyle(props.styleOpt);
  },[props.locOpt])

  return (
    <div className='filterContainer'>
        <div className='showFilter'>
        <ul className='filter'>
            <li className='clotheItem active'>#{style}룩</li>
            <li className='clotheItem active locActive'>#{`${loc.si} ${loc.gu} ${loc.dong}`}</li>
        </ul>
        <FontAwesomeIcon className={`option ${isOpen ?'option':'turn'}`} onClick={()=>toggleBtn()} icon={faChevronDown} />
        </div>
        <div className={`Hidefilter ${isOpen ?'showFilterBox':'hideFilterBox'}`}>
        <ul className='style'>
          {styleList.map(s=>
          (<li onClick={()=>setStyle(s)} className='styleItem'>#{s}</li>))}
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
        <button className={`saveBtn ${isOpen ?'showSaveBtn':'hideSaveBtn'}`} onClick={onSave}>저장</button>
        </div>
    </div>
  );
});

export default CodyMyFilter;