import { useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
}

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon | null>(null);

  const searchData = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Click");
    // fetchData();

    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then((res) => res.json())
      .then((data: Pokemon) => {
        setPokemons(data);
      });
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

      {pokemons ? (
        <div className="content">
          <div className="character-img">
            <img
              src={pokemons.sprites.front_default ?? ""}
              alt="pokemon image"
              width={120}
            />
          </div>
          <div className="character-details">
            <h1>Pokemon Details</h1>

            <p
              key={pokemons.id}
              id="character-name"
            >{`Name: ${pokemons.name}`}</p>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </main>
  );
}
