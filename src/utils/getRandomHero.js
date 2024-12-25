export const getRandomHero = (array, count) => {
  return Array.from(
    { length: count },
    () => array[Math.floor(Math.random() * array.length)]
  );
};
