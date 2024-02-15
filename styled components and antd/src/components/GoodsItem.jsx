import { PropTypes } from "prop-types";
import { useContext } from "react";
import { MyApp } from "../App";
import styled from "styled-components";
import {Button} from 'antd'


function GoodsItem({ name, email, id }) {
  const { dispatch, setShowModal, setIndex } = useContext(MyApp);

  return (
    <ListItem>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Button type="primary" danger onClick={() => dispatch({ type: "DELETE", payload: id })}>
        X
      </Button>
      <Button
      type="primary"
        onClick={() => {
          setIndex(id);
          setShowModal(true);
        }}
      >
        CHANGE
      </Button>
    </ListItem>
  );
}

GoodsItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default GoodsItem;

const ListItem = styled.li`
  border: 2px solid black;
  padding: 10px;
`;


