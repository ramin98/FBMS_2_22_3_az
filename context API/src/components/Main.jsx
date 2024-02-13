import GoodsItem from "./GoodsItem";
import { useContext, useRef, useState } from "react";
import Modal from "./Modal";
import { MyApp } from "../App";

function Main() {
  const {array, addObject, setInputMail,  setInputName, showModal } = useContext(MyApp)
  return (
    <main>
      <button onClick={addObject}>ADD</button>
      <input onInput={(ev) => setInputName(ev.target.value)} type="text" />
      <input onInput={(ev) => setInputMail(ev.target.value)} type="text" />
      {Array.isArray(array) ? (
        <ul>
          {array.map((item) => (
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
