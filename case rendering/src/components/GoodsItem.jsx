import { PropTypes } from "prop-types";

function GoodsItem({delObject, name, email,id, setIndex, setShowModal}) {
  // if(typeof goodsName !== 'string'){
  //   throw new Error('error')
  // }
  use
    return (
      <li>
         <p>Name: {name}</p>
         <p>Email: {email}</p>
         <button onClick={() => delObject(id)}>X</button>
         <button onClick={() => {
          setIndex(id)
          setShowModal(true)
          }}>CHANGE</button>
      </li>
    );
  }

  GoodsItem.propTypes = {
    name:PropTypes.string,
    email:PropTypes.string
  }
  
  export default GoodsItem;

