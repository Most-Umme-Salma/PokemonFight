const express = require("express");

const jsonData = require("../data.json");

const onePokemon =
  ("/:id",
  (req, res, next) => {
    try {
      const pokemonId = req.params.id;
      console.log(req.params)
      const pokemonSearch = jsonData.find((pokemon) => pokemon.id == pokemonId);
      if (!pokemonSearch) return res.status(404).send(err.message);
      res.status(200).json(pokemonSearch);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

const allPokemon =
  ("/",
  (req, res) => {
    try {
      res.json(jsonData);
      console.log(jsonData);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

const pokemonBase =
  ("/:id/:info",
  (req, res, next) => {
    console.log(req.params)

    try {
      const { id, info } = req.params;
      const pokemonSearch = jsonData.find((pokemon) => pokemon.id == id);
      console.log(id + " " + info);
      if (info !== "base" || info !== "name" || info !== "type")
        console.log(id + " " + info);
      res.status(200).json(id + " " + info);
      console.log(id + " " + info);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

module.exports = {
  onePokemon,
  allPokemon,
  pokemonBase,
};
