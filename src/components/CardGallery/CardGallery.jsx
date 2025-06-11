import { cardsData } from "../../data";
import Card from "../Cards/Card";
import styles from "./CardGallery.module.css";

const CardGallery = () => {
  return (
    <ul className={styles.list}>
      {cardsData.map((card) => (
        <li key={card.id}>
          <Card {...card} />
        </li>
      ))}
    </ul>
  );
};

export default CardGallery;
