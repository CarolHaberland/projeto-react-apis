import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { typeHandler } from "../../utils";
import Pokebola from "../../assets/pngwing 2.svg"
import { hover } from "@testing-library/user-event/dist/hover";
import { Scale } from "@mui/icons-material";

export default function PokemonCard({ name, image, id, types, color }) {

  

  

  return (
  
    <Card className="pokeCard"  sx={{boxShadow:"none", backgroundColor:color, overflow:"visible", borderRadius:"24px", color:"white", paddingTop:"-33px"}} /* sx={{  display:"flex", postion:"relative", width: "440px", height:"263px",let:"40px", top:"294"}} */>
      
      <div className="pokeCard2">
        <div>
          <div className="font1" gutterBottom component="div">
            #{id}
          </div>
          <div className="font2" gutterBottom textTransform="capitalize" component="div">
            {name}
          </div>
          <div className="font3" gutterBottom component="div">
            {typeHandler(types)}
          </div>
          <div>
            <img src={Pokebola} alt="PokebolaImg" sx={{display:"flex",position:"relative", left:"150px"}} />
          </div>
        </div>
        {/*  <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </div>
      <CardMedia className="pokemonImg" component="img" sx={{
       display:"flex", width:"190px", height:"190px",position:"absolute" ,left:"223px", top:"-61px" }} image={image} />
      {/* <div>
        <Button size="small" >Detalhes</Button>
        <Button size="small">Capturar!</Button>
      </div> */}
    </Card>
    
    
  );
}
