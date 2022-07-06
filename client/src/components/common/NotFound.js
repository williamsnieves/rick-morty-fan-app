import NotFound404 from "../../assets/gif/404.gif";
import styles from "../../styles/not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src={NotFound404} alt="404"></img>
    </div>
  );
};

export default NotFound;
