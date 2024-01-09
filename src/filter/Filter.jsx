import styles from "./filter.module.css";
import down from "../images/down-arrow.png";
import filter from "../images/filter.png";
import up from "../images/up-arrow.png";
import { useState } from "react";

const Filter = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div
        className={styles.container}
        onClick={() => setClick((prevState) => !prevState)}
      >
        <div>
          <img src={filter} alt="filter-icon" width={30} height={30} />
          <span>Filter By</span>
        </div>
        <img src={click ? up : down} alt="down-arrow" width={20} height={20} />
      </div>
      {click && (
        <div className={styles.options}>
          <p>Low to High (Price)</p>
          <span></span>
          <p>High to Low (Price)</p>
          <span></span>
          <p>Low to High (Popularity)</p>
          <span></span>
          <p>High to Low (Popularity)</p>
        </div>
      )}
    </>
  );
};

export default Filter;
