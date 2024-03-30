import react from "react";
import styles from "./header.module.css";
import { DropDownButton } from "../DropDownButton/";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { HEADER_DATA } from "./header.const";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainerTop}>
        <h3 className={styles.logo}> BookUsNow</h3>
        <div className={styles.headerContainerTopInside}>
          <div className={styles.headerContainerDropDownBox}>
            <DropDownButton />
            <div className={styles.headerContainerSearchBox}>
              <input
                type="search"
                placeholder="Search Here..."
                className={styles.headerContainerSearch}
              />
              <CiSearch className={styles.headerContainerSearchIcon} />
            </div>
          </div>
          <div className={styles.headerContainerButtonBox}>
            <FaHeart />
            <p className={styles.headerContainerButtonBoxText}>Favorites</p>
            <button className={styles.headerContainerButton}> SignIn</button>
          </div>
        </div>
      </div>
      <div className={styles.headerContainerBottom}>
        <div className={styles.headerContainerLocation}>
          <CiLocationOn />
          <p>Location</p>
        </div>
        <div className={styles.headerContainerList}>
          {HEADER_DATA.map((item, index) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
