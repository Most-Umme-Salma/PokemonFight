import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../styles.css';

const Chinese = () => {
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
      return poke.name.chinese === e.target.value;
     
      
    });
        setPokemonOne(selectedPokemon);

  };
  const pokemonTowSelect = (e) => {
    const selectedPokemon = pokemon.find((poke) => {
      return poke.name.chinese === e.target.value;
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
        <div >
          <select onChange={pokemonOneSelect}>
            <option value="empty">選擇你的第一個戰鬥機</option>
            {pokemon.map((poke) => {
              return <option key={poke.id}> {poke.name.chinese} </option>;
            })}
          </select>
          
        </div>
        <div >
          <select onChange={pokemonTowSelect}>
            <option value="empty">選擇你的第二個戰鬥機</option>
            {pokemon.map((poke) => {
              return <option key={poke.id}> {poke.name.chinese} </option>;
            })}
          </select>
        
        </div>
      </div>
      <button className="btn" onClick={fight}> 鬥爭 </button>
      {fightResult && <p>獲勝者是  {fightResult.name.chinese}</p>}
    </div>
  );
};

export default Chinese;
