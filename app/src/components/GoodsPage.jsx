import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { goodsFetch } from "../store/slices/mainGoodsSlice";
import {  Table,Button } from "antd";
import { addProductFetch } from "../store/fetchs";

function GoodsPage() {
  let dispatch = useDispatch();
  let array = useSelector((state) => state.goods.mainGoods);
  let error = useSelector((state) => state.goods.error);
  let loading = useSelector((state) => state.goods.isLoading);

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
     <Table
      style={{ maxWidth: "70%", minWidth: "50%" }}
      dataSource={array}
      rowKey={(record) => record.id || Math.random()}
    >
      <Table.Column
        title={
          <div>
            ID
          </div>
        }
        dataIndex="id"
        sorter={(a, b) => b.id - a.id}
        sortDirections={["ascend", "descend", "ascend"]}
      />

      <Table.Column
        title={
          <div>
            product_name
          </div>
        }
        dataIndex="product_name"
        render={(text, record) => <Link to={`/goods/${record.id}`} state={record}>{text}</Link>}
        sorter={(a, b) => b.product_name.localeCompare(a.product_name)}
        sortDirections={["ascend", "descend", "ascend"]}
      />

<Table.Column
        render={(text, record) => <Button
          onClick={() => {
            addProductFetch(record)
          }}
        >
          ADD
        </Button>}
      />
  
    </Table>
      {/* {Array.isArray(array) ? (
        <ul>
          {array.map((item) => (
            <li key={item.id}>
              <Link to={`/goods/${item.id}`} state={item}>
                <p>{item.product_name}</p>
              </Link>
              <button
                onClick={() => {
                  addProductFetch(item)
                }}
              >
                ADD
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>ERROR</p>
      )} */}
    </>
  );
}

export default GoodsPage;
