import image1 from "../images/icons1.png";
import image2 from "../images/icons2.png";
import image3 from "../images/icons3.png";
import styles from "./features.module.css";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.image}>
        <img src={image1} alt="fast-delivery" width={110} height={110} />
        <span>Fast Delivery</span>
      </div>
      <div className={styles.image}>
        <img src={image2} alt="restaurant" width={110} height={110} />
        <span>Restaurant</span>
      </div>
      <div className={styles.image}>
        <img src={image3} alt="tiffin-service" width={110} height={110} />
        <span>Tiffin/Mess</span>
      </div>
    </div>
  );
};

export default Features;
