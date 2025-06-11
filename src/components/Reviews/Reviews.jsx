import styles from "./Reviews.module.css";
import CardGallery from "../CardGallery/CardGallery";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Voices of Success with Sales Fortuna</h1>
      <CardGallery />
    </div>
  );
};

export default Reviews;
