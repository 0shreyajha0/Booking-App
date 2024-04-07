import React from "react";
import { Header } from "../components/Header";
import { RecommendedShow } from "../components/RecommendedShow";
import { UpcomingEvent } from "../components/UpcomingEvent";

// import { UpcomingShows } from "../components/UpcomingShows";
import { HeroSection } from "../components/HeroSection";
import { useState, useEffect } from "react";

export const Dashboard = () => {
  // const [recommendedList, setRecommendedList] = useState([]);
  // useEffect(() => {
  //   try {
  //     fetch(
  //       "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
  //     )
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setRecommendedList(json);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // const [showList, setShowList] = useState([]);
  // useEffect(() => {
  //   try {
  //     fetch(
  //       "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
  //     )
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setRecommendedList(json);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RecommendedShow />
      <UpcomingEvent />
    </div>
  );
};
