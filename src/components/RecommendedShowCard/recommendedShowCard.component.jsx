import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./recommendedShowCard.module.css";

export const RecommendedShowCard = () => {
  return (
    <div className={styles.recommendedShowCardContainer}>
      <img
        src={styles.recommendedShowCard}
        alt="recommendedShowCard"
        className={styles.recommendedShowCardImage}
      />
      <div className={styles.recommendedShowCardContent}>
        <div className={styles.recommendedShowCardTopContent}>
          <p className={styles.name}></p>
          <p className={styles.date}></p>
        </div>
        <div className={styles.recommendedShowCardBottomContent}>
          <div className={styles.recommendedShowCardLocationContent}></div>
          <FaLocationDot className={styles.loctionIcon} />
          <p className={styles.loction}></p>
          <div className={styles.weatherContainer}>
            <p className={styles.weather}></p>
            <divider className={styles.divider} />
            <p className={styles.distance}></p>
          </div>
        </div>
      </div>
    </div>
  );
};
