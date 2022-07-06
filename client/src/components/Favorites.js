import React, { useEffect } from "react";
import Item from "./common/Item";
import styles from "../styles/favorites.module.css";
import Header from "./common/Header";

const Favorites = ({ loadFavorites, favorites }) => {
  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <React.Fragment>
      <Header
        pageTitle="Favorites"
        navigationName="Characters"
        navigationPage="/Characters"
      />
      <div className={styles.favoritesContainer}>
        {favorites &&
          favorites.map(
            ({
              id,
              characterData: { image, location, name, status, species },
            }) => (
              <Item key={id} {...{ image, location, name, status, species }} />
            )
          )}
      </div>
    </React.Fragment>
  );
};

export default Favorites;
