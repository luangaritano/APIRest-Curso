import express from "express";
import livros from "./livrosRoutes.mjs";
import autores from "./autoresRoutes.mjs";

//ponto de entrada das rotas, também chamado de "barril"

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), livros, autores);
};

export default routes;