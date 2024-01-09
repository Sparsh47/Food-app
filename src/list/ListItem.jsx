import styles from "./listItem.module.css";
import heart from "../images/hollow-heart.png";
import menu from "../images/hamburger.png";
import timer from "../images/history.png";
import map from "../images/map.png";
import star from "../images/star.png";
import nonVeg from "../images/non-veg.png";

const ListItem = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.image} alt="restaurant" className={styles.logo} />
      <img
        src={nonVeg}
        alt="non-veg"
        width={15}
        height={15}
        className={styles.nonVeg}
      />
      <img
        src={heart}
        alt="heart"
        width={15}
        height={15}
        className={styles.heart}
      />
      <img
        src={menu}
        alt="menu-icon"
        width={20}
        height={20}
        className={styles.menu}
      />
      <div className={styles.content}>
        <h3>{props.name}</h3>
        <p className={styles.time}>
          <img src={timer} alt="time" width={15} height={15} />
          <span>{props.time} min</span>
        </p>
        <span className={styles.desc}>{props.desc}</span>
        <p>
          <span>
            <img src={star} alt="star" width={15} height={15} />
            <span>{props.rating}</span>
          </span>
          <span>
            <img src={map} alt="star" width={15} height={15} />
            <span>{props.distance} KM</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ListItem;
