import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { typeHandler } from "../../utils";
import { Typography } from "@mui/material";



export default function PokemonTable({ pokemonData }) {
  const { height, weight, types, stats } = pokemonData;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="a dense table">
        <TableBody>
          <Typography sx={{display:"flex", justifyContent:"left", margin:"10px", fontSize:"25px", fontWeight:"700"}}>Base stats</Typography>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Altura</TableCell>
            <TableCell>{height}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Peso</TableCell>
            <TableCell>{weight}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Hp</TableCell>
            <TableCell>{stats[0].base_stat}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Ataque</TableCell>
            <TableCell>{stats[1].base_stat}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Defesa</TableCell>
            <TableCell>{stats[2].base_stat}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Ataque-Especial</TableCell>
            <TableCell>{stats[3].base_stat}</TableCell>
          </TableRow>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>Defesa-Especial</TableCell>
            <TableCell>{stats[4].base_stat}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
