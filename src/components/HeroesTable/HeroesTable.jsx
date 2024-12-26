import { useEffect, useState } from "react";

import { getFilmHeroes } from "../../utils/serverAPI";

import { HeroesTableItem } from "../HeroesTableItem/HeroesTableItem";
import { TailSpin } from "react-loader-spinner";

import { Container, HeroesList } from "./HeroesTable.styled";

export const HeroesTable = ({ searchQuery }) => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        setIsLoading(true);
        const data = await getFilmHeroes();
        if (data) {
          setHeroes(data);
        }
      } catch (error) {
        console.error("Error fetching heroes:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  const filteredHeroes = heroes.filter((hero) =>
    hero.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      {isLoading ? (
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <HeroesList>
          {filteredHeroes.map((hero, index) => (
            <li key={index}>
              <HeroesTableItem hero={hero} />
            </li>
          ))}
        </HeroesList>
      )}
    </Container>
  );
};
