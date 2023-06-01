import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import PokemonCard from "./components/PokemonCards/PokemonCards";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Router } from "./router/routes";

function App() {
  return (
    <Router />
  );
}

export default App;
