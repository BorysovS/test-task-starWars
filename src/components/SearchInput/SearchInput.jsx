import { Input } from "./SerachInput.styled";

export const SearchInput = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Input
        type="search"
        placeholder="Search heroes"
        onChange={handleInputChange}
      />
    </div>
  );
};
