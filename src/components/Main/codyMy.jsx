import React from 'react';
import CodyMyFilter from './codyMyFilter';

const CodyMy = (props) => {
    return (
        <div className='codyMy'>
            <h3 className='title'>오늘의 추천 {props.nav}</h3>
            <CodyMyFilter/>
            <div className='codyBox'>
                <img className='codyImg' src={`${process.env.PUBLIC_URL}/images/clothes/(1).jpg`} alt="" />
            </div>
        </div>
    );
};

export default CodyMy;