const express = require("express");
const allpokemonRouter = express.Router();

const jsonData = require("../data.json");

allpokemonRouter.get("/", (req, res) => {
    try {
    res.json(jsonData);
  console.log(jsonData);
} catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = {
    allpokemonRouter,
  };