import { Card } from "antd";
import StarButton from "./StarButton";
import Meta from "antd/es/card/Meta";
import "./PokemonList.css";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
const PokeCard = ({ name, image, abilities, types, id, favorite }) => {
  const dispatch = useDispatch();
  const allAbilities = abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  const typesString = types.map((elem) => elem.type.name).join(", ");
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
      <Meta description={allAbilities} />
    </Card>
  );
};
export default PokeCard;
