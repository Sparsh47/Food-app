import styles from "./languageSelector.module.css";
import translate from "../images/translate.png";
import down from "../images/down-arrow.png";
import up from "../images/up-arrow.png";
import { useState } from "react";

const LanguageSelector = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div
        className={styles.container}
        onClick={() => setClick((prevState) => !prevState)}
      >
        <img src={translate} alt="translation-logo" width={20} height={20} />
        <span className={styles.language}>En</span>
        <img
          src={click ? up : down}
          alt="translation-logo"
          width={18}
          height={18}
        />
      </div>
      {click && (
        <div className={styles.options}>
          <span className={styles.language}>Hn</span>
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
