import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect, useState } from "react";
import { myBagGoodsFetch } from "../store/slices/myBagSlice";
import { Link } from "react-router-dom";
import { Table,Button } from "antd";
import { deleteMyBagProductFetch } from "../store/fetchs";

function MyBag() {
  let array = useSelector((state) => state.myBag.myBagGoods);
  let error = useSelector((state) => state.myBag.error);
  let loading = useSelector((state) => state.myBag.isLoading);
  let [flag, setFlag] = useState(null);

  let dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(myBagGoodsFetch());
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
      <h1>MYBAG</h1>
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
            console.log("del");
            setFlag(!flag)
            deleteMyBagProductFetch(record.id)
          }}
        >
          X
        </Button>}
      />
    </Table>
    </>
  );
}

export default MyBag;
