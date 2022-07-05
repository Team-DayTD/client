import React from 'react';
import { useState } from 'react';
import CodyBest from '../codyBest/codyBest';
import CodyBtn from '../codyBtn/codyBtn';
import CodyMy from '../codyMy/codyMy';

import styles from './codyRecoPage.module.css';
const CodyRecoPage = (props) => {
  const [codyContent, setCodyContent] = useState('best');

  const codyButtonSetting = content =>{
    console.log(content);
    setCodyContent(content);
  }

  const codyComponent = {
    best: <CodyBest/>,
    cody1: <CodyMy loc='cody1'/>,
    cody2: <CodyMy loc='cody2'/>,
    cody3: <CodyMy loc='cody3'/>,
  }

  if(props.reset == 'reset'){
    setCodyContent('reset');
  }

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <CodyBtn btnName='Best!' codyButtonSetting={codyButtonSetting} loc='best'/>
        <CodyBtn btnName='내 코디1' codyButtonSetting={codyButtonSetting} loc='cody1'/>
        <CodyBtn btnName='내 코디2' codyButtonSetting={codyButtonSetting} loc='cody2'/>
        <CodyBtn btnName='내 코디3' codyButtonSetting={codyButtonSetting} loc='cody3'/>
      </div>
      {codyContent && <div className={styles.content_container}>{codyComponent[codyContent]}</div>}
    </div>
  );
};

export default CodyRecoPage;