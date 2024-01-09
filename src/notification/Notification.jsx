import notifOf from "../images/bell.png";
import notifOn from "../images/ringing.png";

const Notification = ({ notification, handleNotifications }) => {
  console.log(notification);
  return (
    <>
      <img
        src={notification ? notifOn : notifOf}
        alt="notification-off"
        width={25}
        height={25}
        onClick={handleNotifications}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default Notification;
