import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import dummy from "../data/data.json";
import LikeFilter from '../components/Like/likeFilter';

const Like = () => {
  return (
    <div className='like'>
      <h2 className='title'>❤️좋아요❤️</h2>
      <LikeFilter/>
      <div className='likeContainer'>
        {
          dummy.codyImg.map((cody) =>(
            <div className='imgBox'>
              <img className='codyImg' src={`${process.env.PUBLIC_URL}/images/clothes/${cody.image}`} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Like;