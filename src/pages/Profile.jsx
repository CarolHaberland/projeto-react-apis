import React, { useContext } from "react";
import NavBar from "../components/Navbar/Navbar";
import Pokebola from "../assets/pngwing 2.svg";
import {
  Box,
  Chip,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import PokemonTable from "../components/PokemonTable/pokemontable";
import { typeHandler } from "../utils";
import { PokedexContext } from "../components/Context/pokedex-contex";


const cores = (pokemonTypes) => {
  console.log(pokemonTypes);
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

export const Profile = ({ pokemonData }) => {
  console.log(pokemonData);
  const { name, sprites, id, moves, types } = pokemonData;
  const { pokemonFavorite } = useContext(PokedexContext)

  const pokemonIsAdded = pokemonFavorite.includes(id)

  return (
    <>
      <NavBar hideSearch hiddePokedex pokemonIsAdded={pokemonIsAdded} pokemonId={id}/>
      <Typography variant="h2" display="flex" justifyContent="left" position="relative" bottom="50px" color="white" left="4.5em" fontWeight="700">Detalhes</Typography>
      <Container
        sx={{ display: "flex", justifyContent: "center", borderRadius: "20px" }}
      >
        <Paper sx={{borderRadius:"40px"}}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={5}
            backgroundColor={cores(types[0].type.name)}
            minWidth="1299px"
            height="667px"
            borderRadius="40px"
          >
            <Box
              component="img"
              src={Pokebola}
              position="absolute"
              width="53em"
              right="17em"
              top="13.5em"
            />
            <Box sx={{position:"relative", left:"15em", top:"5em"}}>
              <Typography variant="h4" color="white">
                #{id}
              </Typography>
              <Typography variant="h3" textTransform="capitalize" color="white">
                {name}
              </Typography>
              <Typography className="font3">{typeHandler(types)}</Typography>
            </Box>
            <Box
              display="flex"
              width="45em"
              margin="54px"
              gap="188px"
              left="10em"
              position="relative"
              bottom="11em"
            >
              
              <PokemonTable pokemonData={pokemonData} />
              <Box
                component="img"
                src={sprites.other["official-artwork"].front_default}
                position="relative"
                bottom="111px"
                width="250px"
                height="261px"
                left="100px"
              />
            </Box>

            <Box
              component="img"
              src={sprites.front_default}
              position="absolute"
              width="282px"
              height="282px"
              bottom="450px"
              right="1250px"
              backgroundColor="white"
              borderRadius="15px"
            />

            <Box
              component="img"
              src={sprites.back_default}
              position="absolute"
              width="282px"
              height="282px"
              right="1250px"
              bottom="120px"
              backgroundColor="white"
              borderRadius="15px"
            />

            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "13em",
                height: "18em",
                left: "250px",
                bottom: "420px",
              }}
            >
              <Divider sx={{ display: "flex",position:"relative", right:"50px",fontSize:"25px", fontWeight:"700", margin:"10px" }}>Moves:</Divider>
              <Box marginTop="10px">
                {moves.slice(0, 8).map((moveData, key) => (
                  <Chip
                    key={key}
                    sx={{ m: "7px" }}
                    label={moveData.move.name}
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
