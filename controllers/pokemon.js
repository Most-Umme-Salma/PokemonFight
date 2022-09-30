const express = require("express");

const jsonData = require("../data.json");

const onePokemon = ("/:id", (req, res, next) => {
  try {
    const pokemonId = req.params.id;
    const pokemonSearch = jsonData.find((pokemon) => pokemon.id == pokemonId);
    if (!pokemonSearch) return res.status(404).send(err.message);
    res.status(200).json(pokemonSearch);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const allPokemon = ("/", (req, res) => {
    try {
    res.json(jsonData);
  console.log(jsonData);
} catch (err) {
    res.status(500).send(err.message);
  }
});

const pokemonBase = ("/:id/:info", (req, res, next) => {
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
  onePokemon,allPokemon,pokemonBase
};