import Toast from "./common/Toast";
import bookmarkAdd from "../assets/icons/bookmark-add.svg";
import styles from "../styles/character-detail.module.css";

const CharacterDetail = ({
  addToFavorites,
  favoritesLoading,
  favoriteAddedSucceeded,
  gender,
  id,
  image,
  location,
  name,
  origin,
  species,
  status,
}) => {
  return (
    <>
      <div className={styles.characterDetailContainer}>
        <div className={styles.detailImageWrapper}>
          <img className={styles.detailImage} src={image} alt="detail img" />
        </div>
        <div className={styles.detailInfo}>
          <div>
            <span className={styles.detailTextBlock}>
              <b>Name:</b>
              {name}
            </span>
          </div>
          <div>
            <span className={styles.detailTextBlock}>
              <b>Species:</b>
              {species}
            </span>
          </div>
          <div>
            <span className={styles.detailTextBlock}>
              <b>Status:</b>
              {status}
            </span>
          </div>
          <div>
            <span className={styles.detailTextBlock}>
              <b>Gender:</b>
              {gender}
            </span>
          </div>
          <div>
            <span className={styles.detailTextBlock}>
              <b>Location:</b>
              {location.name}
            </span>
          </div>
          <div>
            <span className={styles.detailTextBlock}>
              <b>Origin:</b>
              {origin.name}
            </span>
          </div>
          <div className={styles.divider}></div>
          <div>
            <span className={styles.detailTextBlock}>
              <b>Last seen on: Pending</b>
            </span>
          </div>
          {favoritesLoading ? (
            <span className={styles.loader}> Loading...</span>
          ) : (
            <div
              className={styles.favoritesButton}
              onClick={() =>
                addToFavorites({
                  name,
                  status,
                  species,
                  image,
                  id,
                })
              }
            >
              <img src={bookmarkAdd} width="60" height="60" alt="icon" />
            </div>
          )}
        </div>
      </div>
      <Toast
        labelText="Favorite character added!"
        type="success"
        open={favoriteAddedSucceeded}
      />
    </>
  );
};

export default CharacterDetail;
