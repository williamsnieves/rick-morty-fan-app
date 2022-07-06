import styles from "../../styles/item.module.css";

const Item = ({ image, name, status, species, dataTestId }) => {
  const statusIconClass = {
    alive: styles.itemStatusIconAlive,
    dead: styles.itemStatusIconDead,
    unknown: styles.itemStatusIconUnknown,
  }[status && status.toLowerCase()];

  return (
    <>
      <div className={styles.item} data-test-id={dataTestId}>
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
    </>
  );
};

export default Item;
