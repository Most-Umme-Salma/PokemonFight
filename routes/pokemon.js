const express = require("express");
const pokemonRouter = express.Router();

const jsonData = require("../data.json");

pokemonRouter.get("/", (req, res) => {
  res.json(jsonData);
  console.log(jsonData);
});

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

pokemonRouter.get("/:id/:info", (req, res, next) => {
  try {
    const { id, info } = req.params;
    if (info !== "base" || info !== "name" || info !== "type")
      return res.status(400).send("Please review your search");
    res.status(200).json({ Message: "Nothing to show yet" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = {
  pokemonRouter,
};

/*

app.use((err, req, res, next) => {

})

*/
