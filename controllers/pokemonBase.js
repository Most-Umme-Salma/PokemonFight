const express = require("express");
const pokemonBaseRouter = express.Router();
const jsonData = require("../data.json");


pokemonBaseRouter.get("/:id/:info", (req, res, next) => {
  try {
    const { id, info } = req.params;
    const pokemonSearch = jsonData.find((pokemon) => pokemon.id == id);

    if (info !== "base" || info !== "name" || info !== "type")
    console.log(id + " " + info);

      //return res.status(400).send("Please review your search");
      res.status(200).json(id + " " + info);
    } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = {
  pokemonBaseRouter,
};

