import { getFavorites } from "../../services/favorites.js";
import { getCharacters } from "../../services/morty-api.js";

const characters = async (_, res) => {
  const favorites = await getFavorites();
  const favoritesId = favorites.docs.map((doc) => doc.data().characterData.id);
  const characters = await getCharacters();

  res.json({ data: characters.results, favoritesIds: favoritesId });
};

export default { characters };
