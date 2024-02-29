import { useLocation } from "react-router-dom";

function GoodsItem() {
    let location = useLocation();

    return (
      <div>
        <h1>Product</h1>
        <ul>
            <li>Name: {location.state.product_name}</li>
            <li>Description: {location.state.product_description}</li>
            <li>Price: {location.state.product_price}</li>
            <li>Store Name: {location.state.store_name}</li>
            <li>Store Adress: {location.state.store_address}</li>
        </ul>
      </div>
    );
  }
  
  export default GoodsItem;
  