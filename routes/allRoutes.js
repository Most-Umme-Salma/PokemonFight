const express = require("express");
//==========================================================
const {
  allPokemon,
  onePokemon,
  pokemonBase,
} = require("../controllers/pokemon");
//==========================================================
const pokemonRouter = express.Router();

pokemonRouter.route("/").get(allPokemon);
pokemonRouter.route("/:id").get(onePokemon);
pokemonRouter.route("/:id/:info").get(pokemonBase);


module.exports = pokemonRouter;
