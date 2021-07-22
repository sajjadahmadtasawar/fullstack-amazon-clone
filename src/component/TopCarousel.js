import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/carousel.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1300, min: 700 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};
function TopCarousel() {
  return (
    <Carousel
      transitionDuration={5000}
      autoPlay
      arrows={false}
      infinite
      className="sliderTop"
      responsive={responsive}
    >
      <div>
        <img
          className="sliderTop__image"
          src="https://media-eng.dhakatribune.com/uploads/2018/07/samsung-accessories-edited-1532008683956.jpg"
        />
      </div>
      <div>
        <img
          className="sliderTop__image"
          src="https://www.craftbymerlin.com/pub/media/wysiwyg/Frame_43-min_1_.jpg"
        />
      </div>
      <div>
        <img
          className="sliderTop__image"
          src="https://quotysee.com/wp-content/uploads/2020/02/Quotysee-Custom-iPhone-Case-Banner.jpg"
        />
      </div>
    </Carousel>
  );
}

export default TopCarousel;
