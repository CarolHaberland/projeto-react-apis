import { type } from "@testing-library/user-event/dist/type";
import grass from "../assets/grass.svg";
import poison from "../assets/poison 1.svg";
import bug from "../assets/bug 1.svg";
import dark from "../assets/dark 1.svg";
import dragon from "../assets/dragon 1.svg";
import electric from "../assets/electric 1.svg";
import fairy from "../assets/fairy 1.svg";
import fighting from "../assets/fighting.svg";
import flying from "../assets/flying 1.svg";
import ghost from "../assets/ghost.svg";
import ground from "../assets/ground.svg";
import ice from "../assets/ice 1.svg";
import psychic from "../assets/psychic 1.svg";
import rock from "../assets/rock 1.svg";
import water from "../assets/water 1.svg";
import steel from "../assets/stell.svg";
import fire from "../assets/fire.svg";
import normal from "../assets/normal 1.svg";

export const typeHandler = (types) => {
  const typeIcons = {
    grass: {
      color: "#70B873",
      icon: grass,
    },
    poison: {
      color: "#AD61AE",
      icon: poison,
    },
    steel: {
      color: "#BBBBBB",
      icon: steel,
    },
    bug: {
      color: "#316520",
      icon: bug,
    },
    dark: {
      color: "#5C5365",
      icon: dark,
    },
    dragon: {
      color: "#0A6CBF",
      icon: dragon,
    },
    fairy: {
      color: "#EC8FE6",
      icon: fairy,
    },
    fighting: {
      color: "#CE4069",
      icon: fighting,
    },
    flying: {
      color: "#6892B0",
      icon: flying,
    },
    ghost: {
      color: "#5269AC",
      icon: ghost,
    },
    ground: {
      color: "#D97745",
      icon: ground,
    },
    ice: {
      color: "#74CEC0",
      icon: ice,
    },
    psychic: {
      color: "#F67176",
      icon: psychic,
    },
    rock: {
      color: "#C7B78B",
      icon: rock,
    },
    water: {
      color: "#33A4F5",
      icon: water,
    },
    electric: {
      color: "#F4D23B",
      icon: electric,
    },
    fire: {
      color: "#F44900",
      icon: fire,
    },
    normal: {
      color: "#8A8A8A",
      icon: normal,
    },
  };

  return types.map((type) => {
    let colorBackGround = "white";
    let iconError = steel;
    if (typeIcons[type.type.name] !== undefined) {
      colorBackGround = typeIcons[type.type.name].color;
      iconError = typeIcons[type.type.name].icon;
    }
    return (
      <span style={{ backgroundColor: colorBackGround }}>
        {" "}
        <img src={iconError} />
        {type.type.name}
      </span>
    );
  });
};
