import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Pokedex } from "../pages/Pokedex";
import { PokedexContexProvider } from "../components/Context/pokedex-contex";

export const Router = () => {
  const [pokemonData, setPokemonData] = useState();
  const [favorites, setFavorites] = useState();

  return (
    <BrowserRouter>
      <PokedexContexProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setPokemonData={setPokemonData}
                setFavorites={setFavorites}
              />
            }
          />
          <Route
            path="/Profile"
            element={<Profile pokemonData={pokemonData} />}
          />
          <Route
            path="/Pokedex"
            element={
              <Pokedex
                setFavorites={setFavorites}
                setPokemonData={setPokemonData}
              />
            }
          />
        </Routes>
      </PokedexContexProvider>
    </BrowserRouter>
  );
};
