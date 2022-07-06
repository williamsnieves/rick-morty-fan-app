import { Router } from "express";
import controllers from "./auth.controller.js";

const router = Router();
router.route("/").post(controllers.authorization);

export default router;
