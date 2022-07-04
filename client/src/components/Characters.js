import React, { useEffect, useCallback } from "react";
import styles from "../styles/characters.module.css";
import CharacterItem from "./CharacterItem";

const Characters = ({ characters, loadCharacter }) => {
  useEffect(() => {
    loadCharacter();
  }, []);

  console.log("characters---", characters);

  return (
    <div className={styles.characters}>
      {characters &&
        characters.map((character) => (
          <CharacterItem key={character.id} {...character} />
        ))}
    </div>
  );
};

export default Characters;
