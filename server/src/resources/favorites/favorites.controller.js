import { addToFavorites, getFavorites } from "../../services/favorites.js";

const favorites = async (_, res) => {
  try {
    const favoritesSnapshot = await getFavorites();
    res.json({
      data: favoritesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })),
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

const addFavorites = async (req, res) => {
  const payload = { ...req.body };
  const newFavoriteCharacter = await addToFavorites(payload);

  res.json({
    data: newFavoriteCharacter,
  });
};

export default {
  favorites,
  addFavorites,
};
