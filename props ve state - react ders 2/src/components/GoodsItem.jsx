function GoodsItem(props) {
    return (
      <li>
         <p>Name: {props.goodsName}</p>
         <p>Price: {props.goodsPrice}</p>
      </li>
    );
  }
  
  export default GoodsItem;