import { useContext, useState } from "react";
import { MyApp } from "../App";

function Modal() {
    const {dispatch, setShowModal, index} = useContext(MyApp)
    
    let [changeInputName, setChangeInputName] = useState("");
    let [changeInputMail, setChangeInputMail] = useState("");
    return (
        <div className="modal-container">
        <form onSubmit={(ev) => {
          ev.preventDefault()
          dispatch({ type: "CHANGE", payload: {changeInputName, changeInputMail, index} })
          setShowModal(false)
        }} className="modal">
          <input
            onInput={(ev) => setChangeInputName(ev.target.value)}
            type="text"
            required
          />
          <input
            onInput={(ev) => setChangeInputMail(ev.target.value)}
            type="email"
            required
          />
          <button type="submit">OK</button>
        </form>
      </div>
    );
  }
  
  export default Modal;
  