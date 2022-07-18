import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './codyLike.module.css';
import dummy from "../../db/data.json";
import LikeFilter from '../likeFilter/likeFilter';

const CodyLike = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>❤️좋아요❤️</h2>
      <LikeFilter/>
      <div className={styles.likeContainer}>
        {
          dummy.codyImg.map((cody) =>(
            <div className={styles.imgBox}>
              <img className={styles.codyImg} src={`${process.env.PUBLIC_URL}/images/clothes/${cody.image}`} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CodyLike;