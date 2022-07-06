import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/navigation-button.module.css";

const NavigationButton = ({ name, page }) => {
  return (
    <Link className={styles.navigationButton} to={page}>
      {name}
    </Link>
  );
};

export default NavigationButton;
