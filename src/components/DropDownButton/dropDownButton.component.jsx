import React from "react";
import styles from "./dropDownButton.module.css";
import { FaGripLines } from "react-icons/fa";

export const DropDownButton = (props) => {
  return (
    <div className={`${styles.dropDownButton} ${props.extraClasses}`}>
      <FaGripLines />
      <p>Categories</p>
    </div>
  );
};
