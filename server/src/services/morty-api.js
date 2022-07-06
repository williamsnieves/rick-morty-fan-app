import fetch from "node-fetch";
import { RICK_MORTY_API_MAIN_URL } from "../config/api.js";

const getCharacters = async () => {
  const character = await fetch(`${RICK_MORTY_API_MAIN_URL}/character`);
  const characterJson = await character.json();

  return characterJson;
};

export { getCharacters };
