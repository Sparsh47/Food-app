import styles from "./offers.module.css";
import offer from "../images/icons4.png";
import { useEffect, useState } from "react";

const Offers = () => {
  const [offerData, setOfferData] = useState(0);
  const offers = [
    "40% off on order above Rs. 600",
    "60% off on order above Rs. 1200",
  ];
  useEffect(() => {
    let intervalId = setInterval(() => {
      setOfferData((prevState) => (prevState + 1) % offers.length);
    }, 2500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className={styles.container}>
      <hr />
      <img src={offer} alt="offer-logo" width={25} height={25} />
      <p>{offers[offerData]}</p>
    </div>
  );
};

export default Offers;
