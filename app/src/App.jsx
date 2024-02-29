import {useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Goods from "./components/GoodsItem";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyBag from "./components/MyBag";

function App() {
  return (
    <>
      <Header />
      <Main/>
      <Footer />
      </>
  );
}


export default App;
