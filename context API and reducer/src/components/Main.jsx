import GoodsItem from "./GoodsItem";
import { useContext, useState } from "react";
import Modal from "./Modal";
import { MyApp } from "../App";

function Main() {
  const {array, dispatch, showModal } = useContext(MyApp)
  let [inputName, setInputName] = useState("");
  let [inputMail, setInputMail] = useState("");
  return (
    <main>
      <button onClick={() => dispatch({type: 'ADD', payload: {inputMail, inputName}})}>ADD</button>
      <input onInput={(ev) => setInputName(ev.target.value)} type="text" />
      <input onInput={(ev) => setInputMail(ev.target.value)} type="text" />
      {Array.isArray(array.array) ? (
        <ul>
          {array.array.map((item) => (
            <GoodsItem
              key={item.id}
              {...item}
            />
          ))}
        </ul>
      ) : (
        <p>ERROR</p>
      )}
      {showModal && <Modal/>}
    </main>
  );
}

export default Main;
