import React from "react";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemon`)
      .then((res) => {
        setPokemon(res.data);
        console.log(pokemon);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};
