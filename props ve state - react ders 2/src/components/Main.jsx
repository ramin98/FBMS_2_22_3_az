import GoodsItem from "./GoodsItem";
import { useRef, useState } from "react";

function Main() {
  let h1 = useRef(null)
  let [value, setValue] = useState([1,2,3,4,5,6,7])
  let [inputValue, setInputValue] = useState({
    value1:'',
    value2:'',
    value3:'',
  })
  
  const plusNum = () => { 
    setValue(array => [...array, array.at(-1) + 1])
    console.log(h1.current)
    h1.current.style = 'color:red'
  }
  
  return (
    <main>
      <h1 ref={h1}>MAIN</h1>
      <input onChange={(ev) => setInputValue({...inputValue,value1:ev.target.value})} type="text" />
      <input onChange={(ev) => setInputValue({...inputValue,value2:ev.target.value})} type="text" />
      <input onChange={(ev) => setInputValue({...inputValue,value3:ev.target.value})} type="text" />

      <p>{inputValue.value1}</p>
      <p>{inputValue.value2}</p>
      <p>{inputValue.value3}</p>
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

