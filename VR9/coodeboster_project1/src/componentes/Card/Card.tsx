import { useState } from "react"
import { DivGeral, StylesCard } from "./styles"



const Card = () => {
  const [mudarColor, setMudarClor] = useState(false)
  return (
    <DivGeral pChange={mudarColor}>
      <StylesCard>text</StylesCard>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
      <button onClick={() => setMudarClor(!mudarColor)}>Button</button>
    </DivGeral>
  )
}

export default Card
