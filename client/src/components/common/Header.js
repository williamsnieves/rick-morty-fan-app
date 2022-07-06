import NavigationButton from "./NavigationButton";
import styles from "../../styles/header.module.css";

const Header = ({ pageTitle, navigationName, navigationPage }) => {
  return (
    <div className={styles.header}>
      <h2>Rick morty fan app {`(${pageTitle})`}</h2>
      <NavigationButton name={navigationName} page={navigationPage} />
    </div>
  );
};

export default Header;
