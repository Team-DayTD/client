import React, { Component } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import styles from './codyMyFilter.module.css';

const CodyMyFilter = ()=>{
    const [style, setStyles] = useState("캐주얼");
    const [ages, setAges] = useState("20");
    const [loc, setLoc] = useState("서대문구");
    const [clothes, setClothes] = useState("전체");
    const [isOpen, setToggle] = useState(false); 
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
        <div className={styles.filterContainer}>
            <div className={styles.showFilter}>
            <ul className={styles.filter}>
                <li className={styles.clotheItem}>#{style}룩</li>
                <li className={styles.clotheItem}>#{clothes}</li>
                <li className={styles.clotheItem}>#{ages}대</li>
                <li className={styles.clotheItem}>#{loc}</li>
            </ul>
            <FontAwesomeIcon className={`${styles.option}  ${isOpen ? styles.option : styles.turn }`} onClick={()=>toggleBtn()} icon={faChevronDown} />
            </div>
            <div className={`${styles.Hidefilter} ${isOpen ? styles.showFilterBox : styles.hideFilterBox}`}>
            <ul className={styles.clothes}>
                <li onClick={()=>changeClothes('전체')} className={styles.clotheItem}>#전체</li>
                <li onClick={()=>changeClothes('외투')} className={styles.clotheItem}>#외투</li>
                <li onClick={()=>changeClothes('상의')} className={styles.clotheItem}>#상의</li>
                <li onClick={()=>changeClothes('하의')} className={styles.clotheItem}>#하의</li>
                <li onClick={()=>changeClothes('한벌의상')} className={styles.clotheItem}>#한벌의상</li>
            </ul>
            <ul className={styles.style}>
                <li onClick={()=>changeStyle('캐주얼')} className={styles.styleItem}>#캐주얼</li>
                <li onClick={()=>changeStyle('러블리')}  className={styles.styleItem}>#러블리</li>
                <li onClick={()=>changeStyle('심플베이직')}  className={styles.styleItem}>#심플베이직</li>
                <li onClick={()=>changeStyle('섹시글램')}  className={styles.styleItem}>#섹시글램</li>
                <li onClick={()=>changeStyle('유니크')}  className={styles.styleItem}>#유니크</li>
                <li onClick={()=>changeStyle('빈티지')}  className={styles.styleItem}>#빈티지</li>
                <li onClick={()=>changeStyle('유니섹스')}  className={styles.styleItem}>#유니섹스</li>
                <li onClick={()=>changeStyle('기타')}  className={styles.styleItem}>#기타</li>
            </ul>
            </div>
        </div>
    );
};

export default CodyMyFilter;