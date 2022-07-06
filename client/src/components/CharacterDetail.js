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
  /*return (
    <div>
      <div style={{ height: "220px" }}>
        <img
          src={image}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            objectPosition: "top",
          }}
          alt="detail img"
        />
      </div>
      <div
        style={{
          display: "flex",
          background: "#c5c3c6",
          borderTop: "2px dashed #4c5c68",
          borderLeft: "2px dashed #4c5c68",
          borderRight: "2px dashed #4c5c68",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          <li>
            <b>Name: </b>
            {name}
          </li>
          <li>
            <b>
              <b>Species: </b>
            </b>
            {species}
          </li>
          <li>
            <b>Status: </b>
            {status}
          </li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          <li>
            <b>Gender: </b>
            {gender}
          </li>
          <li>
            <b>Location: </b>
            {location.name}
          </li>
          <li>
            <b>Origin: </b>
            {origin.name}
          </li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          <li>
            <b>Episode: </b>
            pending
          </li>
        </ul>
      </div>
      {favoritesLoading ? (
        <span> Loading...</span>
      ) : (
        <div
          style={{
            background: "#c5c3c6",
            borderBottom: "2px dashed #4c5c68",
            borderLeft: "2px dashed #4c5c68",
            borderRight: "2px dashed #4c5c68",
            display: "flex",
            flexDirection: "row-reverse",
            cursor: "pointer",
          }}
          onClick={() =>
            addToFavorites({
              name,
              status,
              species,
              image,
              characterId: id,
            })
          }
        >
          <img src={bookmarkAdd} width="60" height="60" alt="icon" />
        </div>
      )}
      <Toast
        labelText="Favorite character added!"
        type="success"
        open={favoriteAddedSucceeded}
      />
    </div>
  );*/

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
                  characterId: id,
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
