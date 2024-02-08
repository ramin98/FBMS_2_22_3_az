import GoodsItem from "./GoodsItem";
import { useState } from "react";

function Main() {
  let [value, setValue] = useState([1,2,3,4,5,6,7])

  const plusNum = () => { 
    setValue(array => [...array, array.at(-1) + 1])
  }
  
  return (
    <main>
      <h1>MAIN</h1>
      <button onClick={() => plusNum()}>PLUS</button>
      <div>{value}</div>
      <ul>
        <GoodsItem goodsName="Koynek1" goodsPrice={30} />
        <GoodsItem goodsName="Koynek2" goodsPrice={20} />
        <GoodsItem goodsName="Koynek3" goodsPrice={50} />
        <GoodsItem goodsName="Koynek4" goodsPrice={70} />
        <GoodsItem goodsName="Koynek5" goodsPrice={10} />
      </ul>
    </main>
  );
}

export default Main;
