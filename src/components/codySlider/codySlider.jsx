import React from "react";
import Slider from "react-slick"; 
import styles from './codySlider.module.css';
import dummy from "../../db/data.json";

function CodySlider ({ sliders }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0px',
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 4000, 
  }
  return(
      <div className={styles.container}>
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <h3 className={styles.ageText}>{dummy.codyImg[0].ages}들이 많이 입는 코디 추천!</h3>
        <Slider {...settings}>
          {dummy.codyImg.map((cody) =>(
            <div className={styles.codyBox}>
              <div className={styles.imgBox}>
                <img className={styles.codyImg} src={`${process.env.PUBLIC_URL}/images/clothes/${cody.image}`} alt="" />
              </div>
              <h3 className={styles.codyType}>{cody.type}</h3>
            </div>
          ))}
        </Slider>
      </div>
    );
}
export default CodySlider;