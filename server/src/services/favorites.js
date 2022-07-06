import { firestore } from "./firebase.js";
import { collections } from "../config/firebase.js";
import { collectIdsAndDocs } from "../helpers/firebase-collections.js";

const getFavorites = () => {
  return firestore.collection(collections.favorites).get();
};

const addToFavorites = async (payload) => {
  const favoritesDocReference = await firestore
    .collection(collections.favorites)
    .add(payload);
  const doc = await favoritesDocReference.get((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return collectIdsAndDocs(doc);
};
export { addToFavorites, getFavorites };
