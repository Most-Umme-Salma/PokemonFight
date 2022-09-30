const express = require("express");
//==========================================================
const { allpokemonRouter } = require("../controllers/allpekemon"); 
//==========================================================
const { pokemonRouter } = require("../controllers/pokemon"); 
//==========================================================
const { pokemonBaseRouter } = require("../controllers/pokemonBase");
//==========================================================
pokemonRouter.get("/");
//=========================================
pokemonBaseRouter.get("/:id");
//=========================================
pokemonRouter.get("/:id/:info");
//=========================================

module.exports = {
    allpokemonRouter,
    pokemonRouter,
    pokemonBaseRouter
};
