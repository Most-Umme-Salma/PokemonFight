import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles.css';

const French = () => {
  const [pokemon, setPokemon] = useState([]);
  const [fightResult, setFightResult] = useState();
  const [pokemonOne, setPokemonOne] = useState();
  const [pokemonTow, setPokemonTow] = useState();
  //==================async=axios======================================
  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const res = await axios.get("http://localhost:3001/pokemon");
        const { data } = res;
        setPokemon(data);
      } catch (err) {
        console.error(err);
      }
    };
    sendGetRequest();
  }, []);
  //===================================================
  const pokemonOneSelect = (e) => {
    console.log(e)
    const selectedPokemon = pokemon.find((poke) => {
      return poke.name.french === e.target.value;
     
      
    });
        setPokemonOne(selectedPokemon);

  };
  const pokemonTowSelect = (e) => {
    const selectedPokemon = pokemon.find((poke) => {
      return poke.name.french === e.target.value;
    });
    setPokemonTow(selectedPokemon);
  };

  const fight = (e) => {
    while (true) {
      pokemonOne.base.HP -= pokemonTow.base.Attack;
      pokemonTow.base.HP -= pokemonOne.base.Attack;
      if (pokemonOne.base.hp <= 0) {
        setFightResult(pokemonTow);
        return;
      }
      if (pokemonTow.base.HP <= 0) {
        setFightResult(pokemonOne);
        return;
      }
    }
  };
  return (
    <div className="App">
      <div className="grid">
        <div className="pokemonOne">
          <select onChange={pokemonOneSelect}>
            <option value="empty">Sélectionnez votre premier combattant</option>
            {pokemon.map((poke) => {
              return <option key={poke.id}> {poke.name.french} </option>;
            })}
          </select>
          
        </div>
        <div className="pokemonTow">
          <select onChange={pokemonTowSelect}>
            <option value="empty">Sélectionnez votre deuxième combattant</option>
            {pokemon.map((poke) => {
              return <option key={poke.id}> {poke.name.french} </option>;
            })}
          </select>
        
        </div>
      </div>
      <button onClick={fight}> lutte </button>
      {fightResult && <p> le gagnant est  {fightResult.name.french}</p>}
    </div>
  );
};

export default French;
