import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cardsData } from "../../data";
import Card from "../Cards/Card";
import styles from "./CardGallery.module.css";
import clsx from "clsx";

const CardGallery = () => {
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const getCardsPerPage = () => {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 1280) {
      return 2;
    } else {
      return 3;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const getDisplayedCards = () => {
    const displayed = [];
    for (let i = 0; i < cardsPerPage; i++) {
      displayed.push(cardsData[(currentStartIndex + i) % cardsData.length]);
    }
    return displayed;
  };

  const displayedCards = getDisplayedCards();
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);
  const currentPage = Math.floor(currentStartIndex / cardsPerPage);

  const nextCards = () => {
    setCurrentStartIndex((prev) => {
      const nextIndex = prev + cardsPerPage;
      return nextIndex >= cardsData.length ? 0 : nextIndex;
    });
  };

  const prevCards = () => {
    setCurrentStartIndex((prev) => {
      const prevIndex = prev - cardsPerPage;
      return prevIndex < 0
        ? Math.floor((cardsData.length - 1) / cardsPerPage) * cardsPerPage
        : prevIndex;
    });
  };

  useEffect(() => {
    setCurrentStartIndex(0);
  }, [cardsPerPage]);

  return (
    <div className={styles.wrapper}>
      <button className={styles.btnLeft} onClick={prevCards}>
        <IoIosArrowBack />
      </button>
      <ul className={styles.list}>
        {displayedCards.map((card) => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ul>
      <button className={styles.btnRight} onClick={nextCards}>
        <IoIosArrowForward />
      </button>
      <div className={styles.dotsContainer}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            className={clsx(
              styles.dot,
              index === currentPage ? styles.activeDot : null
            )}
            key={index}
            onClick={() => setCurrentStartIndex(index * cardsPerPage)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardGallery;
