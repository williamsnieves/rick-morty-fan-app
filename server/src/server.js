import express from "express";
import pkg from "body-parser";
import cors from "cors";
import authRouter from "./resources/auth/auth.router.js";
import charactersRouter from "./resources/characters/characters.router.js";
import favoritesRouter from "./resources/favorites/favorites.router.js";
import { PORT } from "./config/api.js";

const { json, urlencoded } = pkg;

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/characters", charactersRouter);
app.use("/api/favorites", favoritesRouter);

export const start = () => {
  app.listen(PORT, () => {
    console.log(`REST API on http://localhost:${PORT}/api`);
  });
};
