import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RecommendedShowCard } from "../RecommendedShowCard";

export const RecommendedShow = (props) => {
  return (
    <div className="recommendedShowContainer">
      <div className="recommendedShowHeader">
        <h2>Recommended Shows</h2>
        <FaLongArrowAltRight />
      </div>
      <div className="recommended-show-cards">
        {props.shows.map((show) => (
         <RecommendedShowCard key={show.id} 
         eventName={show.eventName} 
         "cityName Douglas",
         "date": "2024-03-24T00:00:00.000Z",
         "weather": "Snowy 26C",
         "distanceKm": "4264.1226847222415",
         "imgUrl":/>;
        })}
      </div>
    </div>
  );
};
