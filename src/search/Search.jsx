import styles from "./search.module.css";
import search from "../images/search-interface-symbol.png";

const Search = () => {
  return (
    <>
      <input
        type="text"
        placeholder="chiken tikka masala"
        className={styles.search}
      />
      <img
        src={search}
        alt="search-icon"
        width={25}
        height={25}
        className={styles.icon}
      />
    </>
  );
};

export default Search;
