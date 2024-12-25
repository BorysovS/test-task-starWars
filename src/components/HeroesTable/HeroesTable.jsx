import { useEffect, useState } from "react";
import { getFilmHeroes } from "../../utils/serverAPI";
import { HeroesTableItem } from "../HeroesTableItem/HeroesTableItem";
import { HeroesList } from "./HeroesTable.styled";

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
    <div>
      {isLoading ? (
        <p>Loading heroes...</p>
      ) : (
        <HeroesList>
          {filteredHeroes.map((hero, index) => (
            <li key={index}>
              <HeroesTableItem hero={hero} />
            </li>
          ))}
        </HeroesList>
      )}
    </div>
  );
};
