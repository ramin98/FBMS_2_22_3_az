import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { myBagGoodsFetch } from "../store/slices/myBagSlice";

function MyBag() {
  let array = useSelector((state) => state.myBag.myBagGoods);
  let error = useSelector((state) => state.myBag.error);
  let loading = useSelector((state) => state.myBag.isLoading);
  let dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(myBagGoodsFetch());
    console.log("ok");
  }, []);

  if(error){
    return <h1>ERROR</h1>
  }

  if(loading){
    return <h1>LOADING</h1>
  }

  return (
    <>
      <h1>MYBAG</h1>
      {Array.isArray(array) ? (
        <ul>
          
          {array.map((item) => (
            <li key={item.id}>
              <p>{item.product_name}</p>
              <button
                onClick={() => {
                  console.log("del");
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

export default MyBag;
