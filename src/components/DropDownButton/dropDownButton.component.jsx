import React from "react";
import styles from "./dropDownButton.module.css";
import { FaGripLines } from "react-icons/fa";

export const DropDownButton = () => {
  return (
    <div className={styles.dropDownButton}>
      <FaGripLines />
      <p>Categories</p>
    </div>
  );
};
