import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
const PokeCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
export default PokeCard;
