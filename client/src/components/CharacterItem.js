import React, { useState } from "react";
import Modal from "./common/Modal";
import CharacterDetail from "./CharacterDetail";
import styles from "../styles/character-item.module.css";
import starFullIcon from "../assets/icons/star-full.svg";
import ItemLayout from "./common/ItemLayout";
import Item from "./common/Item";

const CharacterItem = ({
  addToFavorites,
  episode,
  favoritesLoading,
  favoriteAddedSucceeded,
  gender,
  image,
  id,
  location,
  name,
  origin,
  resetFavoriteAlert,
  status,
  species,
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
    <>
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

      <ItemLayout
        className={styles.characterItem}
        onClick={openCharacterDetail}
      >
        <Item {...{ image, name, species, status }} />
        <div className={styles.characterItemFavoriteIcon}>
          {isFavoriteCharacter ? (
            <img src={starFullIcon} width="20" height="20" alt="icon" />
          ) : null}
        </div>
      </ItemLayout>
    </>
  );
};

export default CharacterItem;
