import { FaQuoteRight } from "react-icons/fa";
import styles from "./Card.module.css";

const Card = ({ logoSrc, logoMargin, text, portraitSrc, name, position }) => {
  return (
    <div className={styles.container}>
      <img style={logoMargin} src={logoSrc} alt="logo-icon" />
      <div className={styles.textBox}>
        <p className={styles.text}>{text}</p>
        <FaQuoteRight className={styles.quotes} />
      </div>
      <div className={styles.portraitContainer}>
        <img className={styles.portrait} src={portraitSrc} alt="portrait" />
        <div className={styles.portraitBox}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
