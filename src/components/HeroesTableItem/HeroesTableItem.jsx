import { useState } from "react";

import { getHeroPlanets } from "../../utils/serverAPI";

import { IoClose } from "react-icons/io5";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";

import {
  PopupBtn,
  PopupText,
  PopupWrap,
  ItemWrapper,
  ItemText,
  MoreBtn,
  TextWrap,
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
        <MoreBtn type="button" onClick={handleClick}>
          {isLoading ? (
            <ThreeDots
              visible={true}
              height="20"
              width="20"
              color="#ee00ff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperClass=""
            />
          ) : (
            "More info"
          )}
          <MdKeyboardDoubleArrowRight size={24} color="white" />
        </MoreBtn>
      </div>

      {isOpen && planetInfo && (
        <PopupWrap>
          <strong style={{ margin: "0 auto" }}>Planet information</strong>
          <PopupText>
            Name: <TextWrap>{planetInfo.name}</TextWrap>
          </PopupText>
          <PopupText>
            Climate: <TextWrap>{planetInfo.climate}</TextWrap>
          </PopupText>
          <PopupText>
            Terrain: <TextWrap>{planetInfo.terrain}</TextWrap>
          </PopupText>
          <PopupText>
            Population: <TextWrap>{planetInfo.population}</TextWrap>
          </PopupText>
          <PopupBtn onClick={handleClose}>
            <IoClose size={24} color="white" />
          </PopupBtn>
        </PopupWrap>
      )}
    </ItemWrapper>
  );
};
