import React from 'react';
import styles from './codyBtn.module.css';
const CodyBtn = (props) => {
  const name = props.btnName;
  return (
    <div>
    <a href="#" title="CodyBtn" onClick={()=>{props.codyButtonSetting(props.loc)}}
      className={`${styles.button} ${styles.btnPush} ${styles.btnBlueGreen}`}>
      {name}</a>
    </div>
  );
};

export default CodyBtn;