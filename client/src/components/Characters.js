import React, { useEffect } from "react";
import styles from "../styles/characters.module.css";
import CharacterItem from "./CharacterItem";
import Header from "./common/Header";

const Characters = ({
  characters,
  addToFavorites,
  favoritesLoading,
  favoriteAddedSucceeded,
  loadCharacter,
  resetFavoriteAlert,
}) => {
  useEffect(() => {
    loadCharacter();
  }, []);

  return (
    <>
      <Header
        pageTitle="Characters"
        navigationName="Favorites"
        navigationPage="/favorites"
      />

      <div className={styles.characters}>
        {characters &&
          characters.map((character) => (
            <CharacterItem
              key={character.id}
              {...{
                ...character,
                favoritesLoading,
                favoriteAddedSucceeded,
                resetFavoriteAlert,
                addToFavorites,
              }}
            />
          ))}
      </div>
    </>
  );
};

export default Characters;
