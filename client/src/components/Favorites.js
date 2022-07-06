import React, { useEffect } from "react";
import Item from "./common/Item";
import styles from "../styles/favorites.module.css";
import Header from "./common/Header";
import ItemLayout from "./common/ItemLayout";

const Favorites = ({ loadFavorites, favorites }) => {
  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <>
      <Header
        pageTitle="Favorites"
        navigationName="Characters"
        navigationPage="/Characters"
      />
      <ItemLayout className={styles.favoritesContainer}>
        {favorites &&
          favorites.map(
            ({
              id,
              characterData: { image, location, name, status, species },
            }) => (
              <Item key={id} {...{ image, location, name, status, species }} />
            )
          )}
      </ItemLayout>
    </>
  );
};

export default Favorites;
