import { useContext } from "react";
import UserContext from "../context/UserContext";



const User = () => {
    const { count, Incrementar } = useContext(UserContext);


  return (
    <div>
      <h1>Contagem - {count}</h1>
      <button onClick={Incrementar}>Click aqui</button>
    </div>
  )
}

export default User
