import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Pokedex } from "../../pages/Pokedex";
import { PokedexContext } from "../Context/pokedex-contex";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));  

  



export default function NavBar({ pokemonFilter, hideSearch, setFavorites,hiddenVtButton, hiddePokedex, hiddenDeleteB, pokemonIsAdded, pokemonId }) {

  const { addPokemonToPokedex, removePokemonFromPokedex } = React.useContext(PokedexContext)
  /* const favoritePickHandler = (favorites) =>{
    setFavorites(favorites)
    navigate("/Pokedex")

  } */
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "5em" }}>
      <AppBar position="static" sx={{backgroundColor:"salmon"}}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            {!hiddenVtButton && (<button className="voltarButtom" onClick={() => navigate("/")}> ↩ Todos os Pokémons </button>)} 
            <Box component="img" src="/assets/Logo-Pokemon.png" height="3em"  /* sx={ {cursor:"pointer"} } onClick={() => navigate("/")} *//>
            {!hideSearch && (
              <Search onChange={(e) => pokemonFilter(e.target.value)}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Procurando..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{fontWeight:"700"}}
                />
              </Search>
            ) }
            {!hiddePokedex && (<button className="pokedexButton" onClick={() => navigate("./Pokedex")}>PokéDex</button>)}
           {!hiddenDeleteB && (pokemonIsAdded? (<button className="pokeDelete" onClick={() => removePokemonFromPokedex(pokemonId)}>Excluir da Pokédex</button>):(<button className="pokeAdd" onClick={() => addPokemonToPokedex(pokemonId)}>Adicionar a Pokédex</button>))}
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
