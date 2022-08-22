import React, { useState } from 'react';
import CodyBest from './codyBest';
import CateBtn from '../shared/cateBtn';
import CodyMy from './codyMy';

const RecoCody = () => {
  const [codyContent, setCodyContent] = useState('best');

  const codyComponent = {
    best: <CodyBest/>,
    cody1: <CodyMy nav='cody1'/>,
    cody2: <CodyMy nav='cody2'/>,
    cody3: <CodyMy nav='cody3'/>,
  }

  const btnSetting = content =>{
    setCodyContent(content);
  }

  return (
    <div className='container'>
      <div className='btnContainer'>
        <CateBtn content='Best!' nav='best' btnSetting={btnSetting}/>
        <CateBtn content='내 코디1' nav='cody1' btnSetting={btnSetting}/>
        <CateBtn content='내 코디2' nav='cody2' btnSetting={btnSetting}/>
        <CateBtn content='내 코디3' nav='cody3' btnSetting={btnSetting}/>
      </div>
      {codyContent && <div className='content_container'>{codyComponent[codyContent]}</div>}
    </div>
  );
};

export default RecoCody;