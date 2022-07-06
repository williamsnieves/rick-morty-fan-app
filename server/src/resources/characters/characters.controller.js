import { getCharacters } from "../../services/morty-api.js";

const characters = async (_, res) => {
  const characters = await getCharacters();

  res.json({ data: characters.results });
};

export default { characters };
