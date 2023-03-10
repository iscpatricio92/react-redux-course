import PokeCard from "./PokeCard";
const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokeCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={pokemon.abilities}
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(),
};
export default PokemonList;
