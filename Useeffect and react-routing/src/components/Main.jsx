import GoodsItem from "./GoodsItem";
import { useContext, useEffect, useState } from "react";
import ModalComponent from "./Modal";
import { MyApp } from "../App";
import { Link } from "react-router-dom";

function Main() {
  const {array, dispatch, showModal } = useContext(MyApp)
  let [inputName, setInputName] = useState("");
  let [inputMail, setInputMail] = useState("");

  const getArray = () => {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => {
          console.log(data)
          dispatch({type:'GET', payload:data})
        })
  }

  useEffect(() => {
    getArray()
  },[])
  
  return (
    <main>
      <button onClick={() => dispatch({type: 'ADD', payload: {inputMail, inputName}})}>ADD</button>
      <input onInput={(ev) => setInputName(ev.target.value)} type="text" />
      <input onInput={(ev) => setInputMail(ev.target.value)} type="text" />
      {Array.isArray(array.array) ? (
        <ul>
          {array.array.map((item) => (
            <Link onClick={() => dispatch({type: 'GET OBJ', payload: item})} to={`/user/${item.id}`}
              key={item.id}
            >
              {item.name}
              </Link>
          ))}
        </ul>
      ) : (
        <p>ERROR</p>
      )}
      <ModalComponent/>
    </main>
  );
}

export default Main;
