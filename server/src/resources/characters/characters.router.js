import { Router } from "express";
import controllers from "./characters.controller.js";

const router = Router();
router.route("/").get(controllers.characters);

export default router;
