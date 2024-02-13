import { useContext } from "react";
import { MyApp } from "../App";

function Modal() {
    const {changeObject, setChangeInputName, setChangeInputMail} = useContext(MyApp)
    return (
        <div className="modal-container">
        <form onSubmit={changeObject} className="modal">
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
  