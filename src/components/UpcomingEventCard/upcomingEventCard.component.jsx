import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./upcomingEventCard.module.css";

export const UpcomingEventCard = (props) => {
  console.log(props);
  return (
    <div className={styles.upcomingEventCardContainer}>
      <img
        src={props.imgUrl}
        alt="upcomingEventCard"
        className={styles.upcomingEventCardImage}
      />
      <div className={styles.upcomingEventCardContent}>
        <div className={styles.upcomingEventCardTopContent}>
          <p className={styles.name}>{props.eventName}</p>
          <p className={styles.date}>{props.date}</p>
        </div>
        <div className={styles.upcomingEventCardBottomContent}>
          <div className={styles.upcomingEventCardLocationContent}>
            <FaLocationDot className={styles.loctionIcon} />
            <p className={styles.loction}>{props.cityName}</p>
          </div>
          <div className={styles.weatherContainer}>
            <p className={styles.weather}>{props.weather}</p>
            <hr className={styles.divider} />
            <p className={styles.distance}>{props.distanceKm}km</p>
          </div>
        </div>
      </div>
    </div>
  );
};
