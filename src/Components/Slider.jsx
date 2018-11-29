import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      appendArrows: '#slider-buttons',
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://registration.bcbsfl.com/ecir/images/memberIDcard.png" />
          </div>
          <div>
            <img src="https://registration.bcbsfl.com/ecir/images/DentalIDcard.png" />
          </div>
        </Slider>
      </div>
    );
  }
}