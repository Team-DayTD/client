import React from 'react';
import styles from './likeFilter.module.css';

const LikeFilter = () => {
    return (
        <div className={styles.filterContainer}>
            <ul className={styles.clothes}>
                <li className={styles.clotheItem}>#외투</li>
                <li className={styles.clotheItem}>#상의</li>
                <li className={styles.clotheItem}>#하의</li>
                <li className={styles.clotheItem}>#한벌의상</li>
            </ul>
            <ul className={styles.style}>
                <li className={styles.styleItem}>#캐주얼</li>
                <li className={styles.styleItem}>#러블리</li>
                <li className={styles.styleItem}>#심플베이직</li>
                <li className={styles.styleItem}>#섹시글램</li>
                <li className={styles.styleItem}>#유니크</li>
                <li className={styles.styleItem}>#빈티지</li>
                <li className={styles.styleItem}>#유니섹스</li>
                <li className={styles.styleItem}>#기타</li>
            </ul>
        </div>
    );
};

export default LikeFilter;