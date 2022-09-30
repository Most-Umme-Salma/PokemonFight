const express = require("express");
const pokemonRouter = express.Router();

const jsonData = require("../data.json");


pokemonRouter.get("/:id", (req, res, next) => {
  try {
    const pokemonId = req.params.id;
    const pokemonSearch = jsonData.find((pokemon) => pokemon.id == pokemonId);
    if (!pokemonSearch) return res.status(404).send(err.message);
    res.status(200).json(pokemonSearch);
  } catch (err) {
    res.status(500).send(err.message);
  }
});



module.exports = {
  pokemonRouter,
};

