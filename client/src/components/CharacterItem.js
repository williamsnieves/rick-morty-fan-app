import React from "react";
import styles from "../styles/character-item.module.css";
import starFullIcon from "../assets/icons/star-full.svg";

const CharacterItem = ({ image, name, status, species }) => {
  const isFavoriteCharacter = true;

  const statusIconClass = {
    alive: styles.characterstatusIconAlive,
    dead: styles.characterstatusIconDead,
    unknown: styles.characterstatusIconUnknown,
  }[status && status.toLowerCase()];
  return (
    <div className={styles.characterItem}>
      <div>
        <img className={styles.characterItemThumb} src={image} alt={name} />
      </div>
      <div className={styles.characterItemInfo}>
        <h2>{name}</h2>
        <span className={styles.charactersStatus}>
          <div
            className={`${styles.characterstatusIcon} ${statusIconClass}`}
          ></div>
          <span
            className={styles.charactersStatusText}
          >{`${status} - ${species}`}</span>
        </span>
      </div>

      <div className={styles.characterItemFavoriteIcon}>
        {isFavoriteCharacter ? (
          <img src={starFullIcon} width="20" height="20" alt="icon" />
        ) : null}
      </div>
    </div>
  );
};

export default CharacterItem;
