import React from 'react';
import ReactLoading from 'react-loading';
function Loader({type, spinColor, fontColor}) {
  return (
    <div class="contentWrap">
      <div style={{
        position: "fixed",
        left: "50%",
        transform: "translate(-50%, 0)",
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        }}>
        <ReactLoading
          type={type}
          color={spinColor}
          height={'100%'}
          width={'100%'} />
        <p style={{color:`${fontColor}`}}>loading</p>
      </div>
    </div>
  );
}
export default Loader;