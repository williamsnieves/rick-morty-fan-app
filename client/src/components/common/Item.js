import React from "react";
import styles from "../../styles/item.module.css";

const Item = ({ image, name, status, species }) => {
  const statusIconClass = {
    alive: styles.itemStatusIconAlive,
    dead: styles.itemStatusIconDead,
    unknown: styles.itemStatusIconUnknown,
  }[status && status.toLowerCase()];

  return (
    <React.Fragment>
      <div className={styles.item}>
        <div>
          <img className={styles.itemThumb} src={image} alt={name} />
        </div>
        <div className={styles.itemInfo}>
          <h2>{name}</h2>
          <span className={styles.itemStatus}>
            <div
              className={`${styles.itemStatusIcon} ${statusIconClass}`}
            ></div>
            <span
              className={styles.itemStatusText}
            >{`${status} - ${species}`}</span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;
