import React from "react";
import Slider from "react-slick"; 
import dummy from "../../data/data.json";

function Carousel ({ sliders }) {
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
      <div className='carouselContainer'>
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <h3 className='ageText'>많이 입는 {dummy.codyImg[0].type} 코디 추천!</h3>
        <Slider {...settings}>
          {dummy.codyImg.map((cody) =>(
            <div className='codyBox'>
              <div className='imgBox'>
                <img className='codyImg' src={`${process.env.PUBLIC_URL}/images/clothes/${cody.image}`} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
}
export default Carousel;