import { Input } from "./SerachInput.styled";

export const SearchInput = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <Input
        type="search"
        placeholder="Search heroes"
        onChange={handleInputChange}
      />
    </>
  );
};
