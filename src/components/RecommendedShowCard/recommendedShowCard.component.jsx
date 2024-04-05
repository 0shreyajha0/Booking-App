import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./recommendedShowCard.module.css";

export const RecommendedShowCard = (props) => {
  console.log(props);
  return (
    <div className={styles.recommendedShowCardContainer}>
      <img
        src={props.imgUrl}
        alt="recommendedShowCard"
        className={styles.recommendedShowCardImage}
      />
      <div className={styles.recommendedShowCardContent}>
        <div className={styles.recommendedShowCardTopContent}>
          <p className={styles.name}>{props.eventName}</p>
          <p className={styles.date}>{props.date}</p>
        </div>
        <div className={styles.recommendedShowCardBottomContent}>
          <div className={styles.recommendedShowCardLocationContent}>
            <FaLocationDot className={styles.loctionIcon} />
            <p className={styles.loction}>{props.cityName}</p>
          </div>
          <div className={styles.weatherContainer}>
            <p className={styles.weather}>{props.weather}</p>
            <divider className={styles.divider} />
            <p className={styles.distance}>{props.distanceKm}km</p>
          </div>
        </div>
      </div>
    </div>
  );
};
