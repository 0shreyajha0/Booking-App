import react from "react";
import styles from "./header.module.css";
import { DropDownButton } from "../DropDownButton/";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { HEADER_DATA } from "./header.const";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainerTop}>
        <h3 className={styles.logo}> BookUsNow</h3>
        <div className={styles.headerContainerTopInside}>
          <div className={styles.headerContainerDropDownBox}>
            <div className={styles.headerContainerDropDown}>
              <DropDownButton />
            </div>
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
            <IoPerson className={styles.headerContainerSignInIcon} />
            <button className={styles.headerContainerSignInButton}>
              {" "}
              SignIn
            </button>
          </div>
        </div>
      </div>
      <div className={styles.headerContainerBottom}>
        <div className={styles.headerContainerLocation}>
          <CiLocationOn />
          <p className={styles.headerContainerLocationText}>Location</p>
        </div>
        <div className={styles.headerContainerList}>
          {HEADER_DATA.map((item, index) => (
            <p className={styles.headerContainerListText}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
