import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles.css';

const Japanese = () => {
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
      return poke.name.japanese === e.target.value;
     
      
    });
        setPokemonOne(selectedPokemon);

  };
  const pokemonTowSelect = (e) => {
    const selectedPokemon = pokemon.find((poke) => {
      return poke.name.japanese === e.target.value;
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
            <option value="empty">最初のファイターを選択してください</option>
            {pokemon.map((poke) => {
              return <option key={poke.id}> {poke.name.japanese} </option>;
            })}
          </select>
          
        </div>
        <div className="pokemonTow">
          <select onChange={pokemonTowSelect}>
            <option value="empty">あなたの2edファイターを選択してください</option>
            {pokemon.map((poke) => {
              return <option key={poke.id}> {poke.name.japanese} </option>;
            })}
          </select>
        
        </div>
      </div>
      <button onClick={fight}> 喧嘩 </button>
      {fightResult && <p>勝者は  {fightResult.name.japanese}</p>}
    </div>
  );
};

export default Japanese;
