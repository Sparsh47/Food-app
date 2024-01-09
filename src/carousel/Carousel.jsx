import { useState } from "react";
import image1 from "../images/sliders3.png";
import image2 from "../images/sliders1.png";
import image3 from "../images/sliders2.png";
import styles from "./carousel.module.css";

const Carousel = () => {
  const [image, setImage] = useState(0);
  const images = [image1, image2, image3];

  const handleImageClick = (index) => {
    setImage(index);
  };

  return (
    <div className={styles.carousel}>
      <img
        src={images[image]}
        alt={`slider-image-${image + 1}`}
        className={styles.image}
      />
      <div className={styles.pagination}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className={`${styles.paginationItem} ${
              image === index ? styles.active : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
