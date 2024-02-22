import { useLocation } from "react-router-dom";

function GoodsItem() {
    let location = useLocation();

    return (
      <div>
        <h1>Product</h1>
        <ul>
            <li>{location.state.product_name}</li>
            <li>{location.state.product_description}</li>
            <li>{location.state.product_price}</li>
        </ul>
      </div>
    );
  }
  
  export default GoodsItem;
  