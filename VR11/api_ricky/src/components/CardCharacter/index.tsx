

import React from 'react'
import { ContainerCard } from './styles'

const CardCharacter = () => {
  return (
    <ContainerCard>
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="className">
            <h3>Rick Sanchez</h3>
            <ul>
                <li>Genero: Male</li>
                <li>Espécie: Humano</li>
            </ul>
        </div>
    </ContainerCard>
  )
}

export default CardCharacter
