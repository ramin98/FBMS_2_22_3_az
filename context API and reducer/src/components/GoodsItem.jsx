import { PropTypes } from "prop-types";
import { useContext } from "react";
import { MyApp } from "../App";

function GoodsItem({ name, email, id }) {
  const {dispatch, setShowModal, setIndex } = useContext(MyApp);

  return (
    <li>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
        X
      </button>
      <button
        onClick={() => {
          setIndex(id)
          setShowModal(true);
        }}
      >
        CHANGE
      </button>
    </li>
  );
}

GoodsItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default GoodsItem;
