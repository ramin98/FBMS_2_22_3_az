import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArray } from "../store/reducer";

function Main() {
  
  let dispatch = useDispatch()
  let array = useSelector(state => state)

  let [inputName, setInputName] = useState("");
  let [inputMail, setInputMail] = useState("");

  useEffect(() => {
    dispatch(getArray())
  },[])
  
  return (
    <main>
      <button onClick={() => dispatch({type: 'ADD', payload: {inputMail, inputName}})}>ADD</button>
      <input onInput={(ev) => setInputName(ev.target.value)} type="text" />
      <input onInput={(ev) => setInputMail(ev.target.value)} type="text" />
      {Array.isArray(array.array) ? (
        <ul>
          {array.array.map((item) => (
            <Link to={`/user/${item.id}`}
            state={item}
              key={item.id}
            >
              {item.name}
              </Link>
          ))}
        </ul>
      ) : (
        <p>ERROR</p>
      )}
    </main>
  );
}

export default Main;
