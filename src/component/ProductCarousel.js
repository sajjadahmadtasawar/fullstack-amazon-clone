import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/productCarousel.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1300, min: 700 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};
function ProductCarousel() {
  return (
    <Carousel infinite autoPlay className="slider" responsive={responsive}>
      <div>
        <img
          className="slider__image"
          src="https://images.samsung.com/is/image/samsung/tr-uhd-tu8500-ue55tu8500uxtk-frontblack-248124510?$720_576_PNG$"
        ></img>
      </div>
      <div>
        <img
          className="slider__image"
          src="https://images.samsung.com/is/image/samsung/tr-uhd-tu8500-ue55tu8500uxtk-frontblack-248124510?$720_576_PNG$"
        ></img>
      </div>
      <div>
        <img
          className="slider__image"
          src="https://images.samsung.com/is/image/samsung/tr-uhd-tu8500-ue55tu8500uxtk-frontblack-248124510?$720_576_PNG$"
        ></img>
      </div>
      <div>
        <img
          className="slider__image"
          src="https://images.samsung.com/is/image/samsung/tr-uhd-tu8500-ue55tu8500uxtk-frontblack-248124510?$720_576_PNG$"
        ></img>
      </div>
      <div>
        <img
          className="slider__image"
          src="https://images.samsung.com/is/image/samsung/tr-uhd-tu8500-ue55tu8500uxtk-frontblack-248124510?$720_576_PNG$"
        ></img>
      </div>
      <div>
        <img
          className="slider__image"
          src="https://images.samsung.com/is/image/samsung/tr-uhd-tu8500-ue55tu8500uxtk-frontblack-248124510?$720_576_PNG$"
        ></img>
      </div>
      <div>
        <img
          className="slider__image"
          src="https://images.samsung.com/is/image/samsung/tr-uhd-tu8500-ue55tu8500uxtk-frontblack-248124510?$720_576_PNG$"
        ></img>
      </div>
    </Carousel>
  );
}

export default ProductCarousel;
