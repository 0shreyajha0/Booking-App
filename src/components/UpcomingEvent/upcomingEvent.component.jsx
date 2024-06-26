import React, { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { UpcomingEventCard } from "../UpcomingEventCard";
import styles from "./upcomingEvent.module.css";
import moment from "moment";

export const UpcomingEvent = (props) => {
  const [recommendedList, setRecommendedList] = useState([]);
  useEffect(() => {
    try {
      fetch(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
      )
        .then((res) => res.json())
        .then((json) => {
          setRecommendedList(json.events);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formattedMomentDate = (date) => {
    return moment(date).format("MMMM DD, YYYY");
  };
  const convertUrl = (url) => {
    const pattern = /file\/d\/([^/]+)\/view/;

    const match = url.match(pattern);
    if (match) {
      const extractedString = match[1];
      return extractedString;
    } else {
      return "";
    }
  };
  return (
    <div className={styles.upcomingEventContainer}>
      <div className={styles.upcomingEventHeaderContainer}>
        <div className={styles.upcomingEventHeader}>
          <p className={styles.upcomingEventHeaderText}>
            <b>Upcominng Events </b>
          </p>
          <FaLongArrowAltRight />
        </div>
        <p className={styles.upcomingEventHeaderText}>
          <u>See all</u>
        </p>
      </div>
      <div className={styles.upcomingEventCardsContainer}>
        {recommendedList.map((events) => (
          <UpcomingEventCard
            key={events.id}
            eventName={events.eventName}
            cityName={events.cityName}
            date={formattedMomentDate(events.date)}
            weather={events.weather}
            distanceKm={Math.floor(events.distanceKm)}
            imgUrl={`https://lh3.googleusercontent.com/d/${convertUrl(
              events.imgUrl
            )}=w1000?authuser=1/view`}
          />
        ))}
      </div>
    </div>
  );
};
