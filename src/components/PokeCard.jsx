import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import "./PokemonList.css";
const PokeCard = ({ name, image, abilities }) => {
  console.log("🚀 ~ file: PokeCard.jsx:6 ~ PokeCard ~ abilities:", abilities);
  const habili = abilities.map((data) => {
    return data.ability.name;
  });
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={"hola"} />
    </Card>
  );
};
export default PokeCard;
