import React, { useState } from "react";
import styles from "../styles/character-item.module.css";
import starFullIcon from "../assets/icons/star-full.svg";
import Modal from "./common/Modal";
import CharacterDetail from "./CharacterDetail";

const CharacterItem = ({
  id,
  episode,
  gender,
  image,
  location,
  name,
  origin,
  status,
  species,
  favoritesLoading,
  favoriteAddedSucceeded,
  resetFavoriteAlert,
  addToFavorites,
}) => {
  const [showModal, setShowModal] = useState(false);
  const isFavoriteCharacter = true;

  const statusIconClass = {
    alive: styles.characterstatusIconAlive,
    dead: styles.characterstatusIconDead,
    unknown: styles.characterstatusIconUnknown,
  }[status && status.toLowerCase()];

  const openCharacterDetail = () => {
    setShowModal(true);
  };

  const onCloseCharacterDetail = () => {
    setShowModal(false);
    resetFavoriteAlert();
  };

  return (
    <React.Fragment>
      {showModal ? (
        <Modal onClose={onCloseCharacterDetail}>
          <CharacterDetail
            {...{
              image,
              name,
              species,
              status,
              gender,
              location,
              origin,
              favoritesLoading,
              addToFavorites,
              favoriteAddedSucceeded,
            }}
          />
        </Modal>
      ) : null}

      <div className={styles.characterItem} onClick={openCharacterDetail}>
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
    </React.Fragment>
  );
};

export default CharacterItem;
