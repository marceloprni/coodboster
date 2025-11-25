import { useEffect, useRef, useState } from "react"
import Header from "./componentes/Header"
import Title from "./componentes/Title"
import UserContext from "./context/UserContext"
import User from "./componentes/User"
import Input from "./componentes/Input"


function App() {
  /*
  const [counter, setCouter] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const titleOne = useRef();

  useEffect(() => {
    console.log('O valor do contador mudou: ', counter)
  }, [counter])
  
 useEffect(() => {
    console.log(titleOne.current)
  }, [])

  function handleClick(event) {
    console.log('agora foi')
    console.log(event.target.value)
  }

  function showText() {
    setIsShow(!isShow)
  }

      <h1 ref={titleOne}>Title useRef</h1>
      <Header />
      <Title title="titulo 1" />
      { isShow && <Title title="titulo 2" sub="sub titulo 2" /> }
      <p>Contador {counter}</p>
      <button onClick={handleClick}>Click aqui</button>
      <br />
      <button onClick={() => setCouter(1 + counter)}>Click aqui</button>
      <button onClick={() => setCouter(0)}>Click Zera</button>

      <br />
      <button onClick={() => setIsShow(!isShow)}>Mostrar / Esconder</button>

      <br />
      <button onClick={showText}>Mostrar / Esconder</button>

  */
  const [count, setCount] = useState(0);

  
    function Incrementar() {
       setCount(count + 1);
    }

  return (
    <div className="App">
      <UserContext.Provider value={{count, Incrementar}}>
        <User />
        <Input />
      </UserContext.Provider>
    </div>
  )
}

export default App
