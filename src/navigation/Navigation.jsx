import styles from "./navigation.module.css";
import home from "../images/home.png";
import heart from "../images/heart.png";
import qr from "../images/qr-code.png";
import calender from "../images/calendar.png";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <img src={home} alt="home-icon" width={30} height={30} />
      <img src={heart} alt="heart-icon" width={30} height={30} />
      <img src={qr} alt="qr-icon" width={30} height={30} />
      <img src={calender} alt="calender-icon" width={30} height={30} />
    </div>
  );
};

export default Navigation;
