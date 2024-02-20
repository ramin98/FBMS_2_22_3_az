import { useLocation } from "react-router-dom";

function User() {
    let location = useLocation();

    return (
      <div>
        <h1>User</h1>
        <ul>
            <li>{location.state.name}</li>
            <li>{location.state.username}</li>
            <li>{location.state.email}</li>
        </ul>
      </div>
    );
  }
  
  export default User;
  