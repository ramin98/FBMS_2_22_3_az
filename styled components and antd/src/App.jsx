import { createContext, useState, useReducer } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { initialState, reducer } from "./reducer";

export const MyApp = createContext();

function App() {
  let [array, dispatch] = useReducer(reducer, initialState);

  let [index, setIndex] = useState(null);
  let [showModal, setShowModal] = useState(false);

 
  return (
    <MyApp.Provider
      value={{
        dispatch,
        array,
        index,
        setIndex,
        showModal,
        setShowModal,
      }}
    >
      <Header />
      <Main />
      <Footer />
    </MyApp.Provider>
  );
}

export default App;
