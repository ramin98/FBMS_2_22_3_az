import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductFetch } from "../store/fetchs";
import { deleteProductFetch } from "../store/fetchs";
import { goodsFetch } from "../store/slices/mainGoodsSlice";

function Admin() {
  let dispatch = useDispatch();
  let array = useSelector((state) => state.goods.mainGoods);
  let error = useSelector((state) => state.goods.error);
  let loading = useSelector((state) => state.goods.isLoading);


  let [inputName, setInputName] = useState("");
  let [inputMail, setInputMail] = useState("");
  let [flag, setFlag] = useState(null);

  useLayoutEffect(() => {
    dispatch(goodsFetch());
    console.log("ok");
  }, [flag]);

  if(error){
    return <h1>ERROR</h1>
  }

  if(loading){
    return <h1>LOADING</h1>
  }

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: "ADD", payload: { inputMail, inputName } })
        }
      >
        ADD
      </button>
      <input onInput={(ev) => setInputName(ev.target.value)} type="text" />
      <input onInput={(ev) => setInputMail(ev.target.value)} type="text" />
      {Array.isArray(array) ? (
        <ul>
          {array.map((item) => (
            <li key={item.id}>
              <Link to={`/goods/${item.id}`} state={item}>
                <p>{item.product_name}</p>
              </Link>
              <button
                onClick={() => {
                  console.log("del");
                  setFlag(!flag);
                  deleteProductFetch(item.id)
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>ERROR</p>
      )}
    </>
  );
}

export default Admin;
