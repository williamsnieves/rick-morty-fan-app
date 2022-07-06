import { addToFavorites, getFavorites } from "../../services/favorites.js";

const favorites = async (_, res) => {
  const favoritesSnapshot = await getFavorites();
  res.json({
    data: favoritesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
  });
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
