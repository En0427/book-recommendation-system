import React from "react";
import styles from "./Carousel.module.css"
import { Image, Carousel as AntCarousel } from "antd"

import carouselImage1 from "../../assets/images/carousel_11.png";
import carouselImage2 from "../../assets/images/carousel_12.png";
import carouselImage3 from "../../assets/images/carousel_13.png";
import carouselImage4 from "../../assets/images/carousel_14.png";

export const Carousel : React.FC = () => {
  return (
    <AntCarousel autoplay autoplaySpeed={6000} className={styles.Slider}>
      <Image src={carouselImage1} />
      <Image src={carouselImage2} />
      <Image src={carouselImage3} />
      <Image src={carouselImage4} />
    </AntCarousel>
  );
}