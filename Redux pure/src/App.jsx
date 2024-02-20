import {useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import User from "./components/User";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyBag from "./components/MyBag";

function App() {

  let [index, setIndex] = useState(null);
  let [showModal, setShowModal] = useState(false);
  let navigate = useNavigate()

  useEffect(() => {
     function showKey(ev){
      if(ev.key === 'Enter'){
        navigate('/my-bag')
      }
     }
     document.addEventListener('keypress', showKey)

     return () => {
      document.removeEventListener('keypress', showKey)
     }
  },[])

 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/my-bag" element={<MyBag/>}/>
        <Route path="/user/:userId" element={<User/>}/>

      </Routes>
      
      <Footer />
      </>
  );
}

export default App;
