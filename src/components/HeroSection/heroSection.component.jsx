import React from "react";
import styles from "./heroSection.module.css";
import banner from "../../Assest/Banner.svg";

export const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <img src={banner} className={styles.heroImage} alt="bannerImage " />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Discover Exciting Events Happening <br /> Near You - Stay Tuned for
          Updates!
        </h1>
        <div className={styles.heroSubtitleContainer}>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quis eaque atque velit voluptatem porro voluptatum, mollitia
            possimus totam tempora distinctio ad fuga architecto, magni ipsum
            odio quam consequatur necessitatibus!
          </p>
        </div>
      </div>
    </div>
  );
};
