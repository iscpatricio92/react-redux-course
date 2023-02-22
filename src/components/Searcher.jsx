import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter } from "../slices/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Input.Search
      onChange={handleOnchange}
      placeholder="buscar"
      style={{ marginBottom: 10 }}
    />
  );
};
export default Searcher;
