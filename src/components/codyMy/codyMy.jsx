import React from 'react';
import styles from './codyMy.module.css';

const CodyMy = (props) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>오늘의 추천 {props.loc}</h3>
            <div className={styles.codyBox}>
                <img className={styles.codyImg} src={`${process.env.PUBLIC_URL}/images/clothes/ (1).jpg`} alt="" />
            </div>
        </div>
    );
};

export default CodyMy;