import { Router } from "express";
import controllers from "./favorites.controller.js";

const router = Router();
router.route("/").get(controllers.favorites);
router.route("/").post(controllers.addFavorites);

export default router;
