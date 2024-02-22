import { Routes, Route } from "react-router-dom";
import MyBag from "./MyBag";
import GoodsPage from "./GoodsPage";
import GoodsItem from "./GoodsItem";
import Admin from "./Admin";


function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<GoodsPage />}/>
        <Route path="/my-bag" element={<MyBag/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/goods/:goodsId" element={<GoodsItem/>}/>
      </Routes>
    </main>
  );
}

export default Main;
