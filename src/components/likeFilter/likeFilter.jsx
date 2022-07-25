import React from 'react';
import { useState } from 'react';
import styles from './likeFilter.module.css';

const LikeFilter = () => {
    const [style, setStyles] = useState("캐주얼");
    const [clothes, setClothes] = useState("전체");
    const changeStyle = (s)=>{
        setStyles(s);
    };
    const changeClothes = (clothe)=>{
        setClothes(clothe);
    };
    return (
        <div className={styles.filterContainer}>
            <ul className={styles.clothes}>
            <li onClick={()=>changeClothes('전체')} className={styles.clotheItem}>#전체</li>
                <li onClick={()=>changeClothes('외투')} className={styles.clotheItem}>#외투</li>
                <li onClick={()=>changeClothes('상의')} className={styles.clotheItem}>#상의</li>
                <li onClick={()=>changeClothes('하의')} className={styles.clotheItem}>#하의</li>
                <li onClick={()=>changeClothes('한벌의상')} className={styles.clotheItem}>#한벌의상</li>
            </ul>
            <ul className={styles.style}>
                <li onClick={()=>changeStyle('캐주얼')} className={styles.styleItem}>#캐주얼</li>
                <li onClick={()=>changeStyle('러블리')} className={styles.styleItem}>#러블리</li>
                <li onClick={()=>changeStyle('심플베이직')} className={styles.styleItem}>#심플베이직</li>
                <li onClick={()=>changeStyle('섹시글램')} className={styles.styleItem}>#섹시글램</li>
                <li onClick={()=>changeStyle('유니크')} className={styles.styleItem}>#유니크</li>
                <li onClick={()=>changeStyle('빈티지')} className={styles.styleItem}>#빈티지</li>
                <li onClick={()=>changeStyle('유니섹스')} className={styles.styleItem}>#유니섹스</li>
                <li onClick={()=>changeStyle('기타')} className={styles.styleItem}>#기타</li>
            </ul>
        </div>
    );
};

export default LikeFilter;