import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemon`)
      .then((res) => {
        const { data } = res;
        setPokemon(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Base</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pokemons) => {
            const { id, name, type, base } = pokemons;
            return (
              <tr key={id}>
                <td>{JSON.stringify(pokemons.id)}</td>
                <td>{JSON.stringify(pokemons.name)}</td>
                <td>{JSON.stringify(pokemons.type)}</td>
                <td>{JSON.stringify(pokemons.base)}</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
