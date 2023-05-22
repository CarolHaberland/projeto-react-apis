import React, { createContext, useState } from "react";
import PokemonCard from "../PokemonCards/PokemonCards";
import axios from "axios";
import { Favorite } from "@mui/icons-material";
import { Modal, ModalSoltar } from "../Modals/Modal";

export const PokedexContext = createContext(null);

const getDefaultPokemon = () => {
  let pokemon = {};
  console.log(PokemonCard.length);
  for (let i = 1; 1 < PokemonCard.length + 1; i++) {
    pokemon[i] = 0;
  }
  return pokemon;
};

export const PokedexContexProvider = (props) => {
  const [pokemonFavorite, setPokedemonFavorite] = useState([]);
  const[showModal, setShowModal] = useState(false)
  const[showModalSoltar, setModalSoltar] = useState(false)
  /* const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints);
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };
 */

  const addPokemonToPokedex = (pokemonId) => {
    if (pokemonFavorite.includes(pokemonId)) {
      return 
    }
    setPokedemonFavorite((prev) => [...prev, pokemonId]);
    console.log(pokemonFavorite);
    pokemonFavorite.filter((favorite) => favorite !== pokemonId)
    setShowModal(true)
  };

  const removePokemonFromPokedex = (pokemonId) => {
    setPokedemonFavorite(
      pokemonFavorite.filter((favorite) => favorite !== pokemonId)
    );
    setModalSoltar(true)
  };

  const contexValue = {
    pokemonFavorite,
    addPokemonToPokedex,
    removePokemonFromPokedex,
  };

  console.log(pokemonFavorite);
  return (
    <PokedexContext.Provider value={contexValue}>
      <Modal shown={showModal}
      close={()=>setShowModal(false)}/>
      <ModalSoltar shown={showModalSoltar}
      close={()=>setModalSoltar(false)}/>
      {props.children}
    </PokedexContext.Provider>
  );
};
