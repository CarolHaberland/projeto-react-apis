import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/Navbar/Navbar";
import { PokedexContext } from "../components/Context/pokedex-contex";
import axios from "axios";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Skeletons } from "../components/Skeletons/Skeletons";
import PokemonCard from "../components/PokemonCards/PokemonCards";
import { useNavigate } from "react-router-dom";

export const Pokedex = ({ setPokemonData }) => {
  const { pokemonFavorite, removePokemonFromPokedex } =
    useContext(PokedexContext);
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, [pokemonFavorite]);

  const getPokemons = () => {
    var endpoints = [];
    for (let i of pokemonFavorite) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints);
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/Profile");
  };
  
  const cores = (pokemonTypes) => {
    console.log(pokemonTypes)
    switch (pokemonTypes) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#004170";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#729F92";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#71C3FF";
      default:
        return "red";
    }

  };

  return (
    <>
      <NavBar hideSearch hiddenDeleteB hiddePokedex/>
      <Container maxWidth="xl">
        <Grid container columnSpacing={15} rowSpacing={2}>
          {pokemons.length === 0 ? (
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{position:"absolute", bottom:"800px", left:"400px"}}
              color="white"
            >
              Você não tem Pokémons no momento...😔
            </Typography>
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <PokemonCard
                  color={cores(pokemon.data.types[0].type.name)}
                  name={pokemon.data.name}
                  id={pokemon.data.id}
                  image={pokemon.data.sprites.other["official-artwork"].front_default}
                  types={pokemon.data.types}
                />
                <Box className="pokeButtons" sx={{display:"flex", justifyContent:"space-between"}}>
                  <Button sx={{textDecoration:"underline", color:"black", fontWeight:"700"}}
                    size="small"
                    onClick={() => pokemonPickHandler(pokemon.data)}
                  >
                    Detalhes
                  </Button>
                  <Button sx={{color:"black", fontWeight:"700", backgroundColor:"salmon", padding:"12px", borderRadius:"8px", width:"170px", height:"45px"}}
                    size="small"
                    onClick={() => removePokemonFromPokedex(pokemon.data.id)}
                  >
                    Soltar!
                  </Button>
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};
