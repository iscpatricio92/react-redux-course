import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";
import { getPokemonDetails } from "../api";
export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetailed = await Promise.all(
      pokemons.map((pokemon) => {
        return getPokemonDetails(pokemon);
      })
    );
    dispatch(setPokemons(pokemonDetailed));
  };

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});
