import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RecommendedShowCard } from "../RecommendedShowCard";
import styles from "./recommendedShow.module.css";

export const RecommendedShow = (props) => {
  const [recommendedList, setRecommendedList] = useState([]);
  useEffect(() => {
    try {
      fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      )
        .then((res) => res.json())
        .then((json) => {
          setRecommendedList(json.events);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={styles.recommendedShowContainer}>
      <div className={styles.recommendedShowHeader}>
        <h2>Recommended Shows</h2>
        <FaLongArrowAltRight />
      </div>
      <div className={styles.recommendedShowCardsContainer}>
        {recommendedList.map((events) => (
          <RecommendedShowCard
            key={events.id}
            eventName={events.eventName}
            cityName={events.cityName}
            date={events.date}
            weather={events.weather}
            distanceKm={events.distanceKm}
            imgUrl={events.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};
