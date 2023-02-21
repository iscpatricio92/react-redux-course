import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { Col, Spin } from "antd";
import "./App.css";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";
import { getPokemonWithDetails, setLoading } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonRes));
      dispatch(setLoading(false));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large"></Spin>
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
