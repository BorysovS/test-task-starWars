import axios from "axios";
import { getRandomHero } from "./getRandomHero";

export const getFilmHeroes = async () => {
  try {
    const resp = await axios.get("https://swapi.info/api/people");
    const data = resp.data;

    const heroes = getRandomHero(data, 5);

    return heroes;
  } catch (error) {
    return console.log("Error fetching heroes:", error);
  }
};

export const getHeroPlanets = async (url) => {
  try {
    const resp = await axios.get(url);
    const data = resp.data;

    return data;
  } catch (error) {
    return console.log("Error fetching planet:", error);
  }
};
