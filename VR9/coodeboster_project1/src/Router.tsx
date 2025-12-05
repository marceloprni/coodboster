import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contatct from "./pages/Contatct"

const Router = () => {
  return (
    <div>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contatct/>}/>
       </Routes>
    </div>
  )
}

export default Router
