import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductAdminFetch,
  addProductFetch,
  changeProductAdminFetch,
} from "../store/fetchs";
import { deleteProductFetch } from "../store/fetchs";
import { goodsFetch } from "../store/slices/mainGoodsSlice";
import { Table, Modal, Button } from "antd";

function Admin() {
  let dispatch = useDispatch();
  let array = useSelector((state) => state.goods.mainGoods);
  let error = useSelector((state) => state.goods.error);
  let loading = useSelector((state) => state.goods.isLoading);
  let [showChange, setShowChange] = useState(false);
  let [productState, setProduct] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    store_name: '',
    store_address: ''
  });

  let [inputName, setInputName] = useState("");
  let [inputDescription, setInputDescription] = useState("");
  let [inputPrice, setInputPrice] = useState("");
  let [inputStoreName, setInputStoreName] = useState("");
  let [inputStoreAdress, setInputStoreAdress] = useState("");

  let [inputChange, setInputChange] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    store_name: '',
    store_address: ''
  });

  let [flag, setFlag] = useState(null);

  useLayoutEffect(() => {
    dispatch(goodsFetch());
    console.log("ok");
  }, [flag]);

  const getAddingProduct = (ev) => {
    ev.preventDefault();
    let product = {
      product_name: inputName,
      product_description: inputDescription,
      product_price: inputPrice,
      store_name: inputStoreName,
      store_address: inputStoreAdress,
    };
    addProductAdminFetch(product);
    setFlag(!flag);
  };

  const saveChange = (ev) => {
    ev.preventDefault();
    let product = {...inputChange, id: productState.id}
    changeProductAdminFetch(product);
    setFlag(!flag)
    setShowChange(false)
  };

  const changeButton = (obj) => {
    setShowChange(true);
    setProduct(obj)
  };

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <>
      <form onSubmit={getAddingProduct}>
        <input
          placeholder="PRODUCT NAME"
          onInput={(ev) => setInputName(ev.target.value)}
          type="text"
        />
        <input
          placeholder="PRODUCT DESCRIPTION"
          onInput={(ev) => setInputDescription(ev.target.value)}
          type="text"
        />
        <input
          placeholder="PRODUCT PRICE"
          onInput={(ev) => setInputPrice(ev.target.value)}
          type="text"
        />
        <input
          placeholder="STORE NAME"
          onInput={(ev) => setInputStoreName(ev.target.value)}
          type="text"
        />
        <input
          placeholder="STORE ADRESS"
          onInput={(ev) => setInputStoreAdress(ev.target.value)}
          type="text"
        />
        <Button>ADD</Button>
      </form>
      <Table
        style={{ maxWidth: "70%", minWidth: "50%" }}
        dataSource={array}
        rowKey={(record) => record.id || Math.random()}
      >
        <Table.Column
          title={<div>ID</div>}
          dataIndex="id"
          sorter={(a, b) => b.id - a.id}
          sortDirections={["ascend", "descend", "ascend"]}
        />

        <Table.Column
          title={<div>product_name</div>}
          dataIndex="product_name"
          render={(text, record) => (
            <Link to={`/goods/${record.id}`} state={record}>
              {text}
            </Link>
          )}
          sorter={(a, b) => b.product_name.localeCompare(a.product_name)}
          sortDirections={["ascend", "descend", "ascend"]}
        />
        <Table.Column
          render={(text, record) => (
            <Button
              onClick={() => {
                console.log("del");
                setFlag(!flag);
                deleteProductFetch(record.id);
              }}
            >
              X
            </Button>
          )}
        />
        <Table.Column
          render={(text, record) => (
            <Button onClick={() => changeButton(record)}>CHANGE</Button>
          )}
        />
      </Table>
      <Modal
        footer={null}
        open={showChange}
        onCancel={() => {
          setShowChange(false);
        }}
      >
        <form onSubmit={saveChange}>
          <input
            placeholder="PRODUCT NAME"
            defaultValue={productState.product_name}
            onChange={(ev) => setInputChange({...inputChange, product_name:ev.target.value})}
            type="text"
          />
          <input
            placeholder="PRODUCT DESCRIPTION"
            defaultValue={productState.product_description}
            onChange={(ev) => setInputChange({...inputChange, product_description:ev.target.value})}
            type="text"
          />
          <input
            placeholder="PRODUCT PRICE"
            defaultValue={productState.product_price}
            onChange={(ev) => setInputChange({...inputChange, product_price:ev.target.value})}
            type="text"
          />
          <input
            placeholder="STORE NAME"
            defaultValue={productState.store_name}
            onChange={(ev) => setInputChange({...inputChange, store_name:ev.target.value})}
            type="text"
          />
          <input
            placeholder="STORE ADDRESS"
            defaultValue={productState.store_address}
            onChange={(ev) => setInputChange({...inputChange, store_address:ev.target.value})}
            type="text"
          />
          <Button type="submit">SAVE</Button>
        </form>
      </Modal>
      {/* {
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
      } */}
    </>
  );
}

export default Admin;
