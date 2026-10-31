import { useState } from "react";

interface Pokemon {
  id: number;
  name: string;
}

export default function HomePage() {
  const [inputValue, setInputValue] = useState<Pokemon | null>(null);
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`,
      );
      if (!response.ok) {
        console.log("Can't fetch data");
      }

      const data = await response.json();

      setPokemons({
        id: data.id,
        name: data.name
      });
      
    } catch {
      console.error("Error");
    }
  }

  const searchData = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Click");
    fetchData();
  };

  return (
    <main>
      <div className="search-bar">
        <form onSubmit={searchData}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="content">
        <div className="character-img">
          <span></span>
        </div>
        <div className="character-details">
          <h1>Pokemon Details</h1>
          {/* {pokemons.map((pokemon) => (
              <p key={pokemon.id} id="character-name">{`Name: ${pokemon.name}`}</p>
          ))} */}
        </div>
      </div>
    </main>
  );
}
