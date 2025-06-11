import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cardsSet } from "../../data";
import Card from "../Cards/Card";
import styles from "./CardGallery.module.css";
import clsx from "clsx";

const CardGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCardsToShow = cardsSet[currentIndex];

  const nextCards = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsSet.length);
  };

  const prevCards = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsSet.length) % cardsSet.length);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.btnLeft} onClick={prevCards}>
        <IoIosArrowBack className={styles.icon} />
      </button>
      <ul className={styles.list}>
        {currentCardsToShow.map((card) => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ul>
      <button className={styles.btnRight} onClick={nextCards}>
        <IoIosArrowForward className={styles.icon} />
      </button>
      <div className={styles.dotsContainer}>
        {cardsSet.map((_, index) => (
          <span
            className={clsx(
              styles.dot,
              index === currentIndex ? styles.activeDot : null
            )}
            key={index}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardGallery;
