import styles from "./appbar.module.css";
import location from "../images/pin.png";
import LanguageSelector from "../language-selector/LanguageSelector";
import Notification from "../notification/Notification";
import { useState } from "react";

const Appbar = () => {
  const [notification, setNotification] = useState(false);
  const handleNotifications = () => {
    setNotification((prevState) => !prevState);
  };

  return (
    <div className={styles.appbar}>
      <div className={styles.location}>
        <img src={location} alt="location-img" width={30} height={30} />
        <span>Patna</span>
      </div>
      <div className={styles.actions}>
        <LanguageSelector />
        <Notification
          notification={notification}
          handleNotifications={handleNotifications}
        />
      </div>
    </div>
  );
};

export default Appbar;
