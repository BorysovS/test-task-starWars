import { useState } from "react";
import { AppBar } from "./components/AppBar/AppBar";
import { HeroesTable } from "./components/HeroesTable/HeroesTable";
import { SearchInput } from "./components/SearchInput/SearchInput";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  console.log("first", searchQuery);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <AppBar />
      <div style={{ padding: "40px 20px" }}>
        <SearchInput onSearch={handleSearch} />
      </div>
      <HeroesTable searchQuery={searchQuery} />
    </>
  );
}

export default App;
