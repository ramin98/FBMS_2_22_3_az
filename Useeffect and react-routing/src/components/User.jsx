import { useParams, useLocation,useMatch } from "react-router-dom";
import { MyApp } from "../App";
import { useContext  } from "react";

function User() {
    const { array } = useContext(MyApp);
    let {userId} = useParams()
    let userInfo = array.array.find((item) => item.id == userId)
    console.log(userId)
    console.log(array)

    let location = useLocation();
    // let match = useMatch();

    console.log(location)
    // console.log(match)



    return (
      <div>
        <h1>User</h1>
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.username}</li>
            <li>{userInfo.email}</li>
        </ul>
      </div>
    );
  }
  
  export default User;
  