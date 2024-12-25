import { useState } from "react";

import { getHeroPlanets } from "../../utils/serverAPI";

import {
  PopupBtn,
  PopupText,
  PopupWrap,
  ItemWrapper,
  ItemText,
} from "./HeroesTableItem.styled";

export const HeroesTableItem = ({ hero }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [planetInfo, setPlanetInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  console.log("hero", hero);
  const { name, gender, birth_year, homeworld } = hero;

  const getPlanetInfo = async () => {
    try {
      setIsLoading(true);
      const data = await getHeroPlanets(homeworld);
      if (data) {
        setPlanetInfo(data);
        setIsOpen(true);
      }
    } catch (error) {
      console.error("Error fetching planet info:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    if (isOpen) {
      handleClose();
      return;
    }

    getPlanetInfo();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  console.log("planet", planetInfo);
  return (
    <ItemWrapper style={{ position: "relative" }}>
      <ItemText>{name}</ItemText>
      <ItemText>{gender}</ItemText>
      <ItemText>{birth_year}</ItemText>
      <div>
        <button type="button" onClick={handleClick}>
          {isLoading ? "Loading..." : "More info"}
        </button>
      </div>

      {isOpen && planetInfo && (
        <PopupWrap>
          <PopupText>Name:{planetInfo.name}</PopupText>
          <PopupText>Climate: {planetInfo.climate}</PopupText>
          <PopupText>Terrain: {planetInfo.terrain}</PopupText>
          <PopupText>Population: {planetInfo.population}</PopupText>
          <PopupBtn onClick={handleClose}>Close</PopupBtn>
        </PopupWrap>
      )}
    </ItemWrapper>
  );
};
