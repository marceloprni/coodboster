

import React from 'react'
import { ContainerCard } from './styles'

type CardCharacterProps = {
    image: string;
    name: string;
    genre: string;
    specie: string;
}

const CardCharacter = ({image, name, genre, specie}: CardCharacterProps) => {
  return (
    <ContainerCard>
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="info">
            <h3>{name}</h3>
            <ul>
                <li>Genero: {genre}</li>
                <li>Espécie: {specie}</li>
            </ul>
        </div>
    </ContainerCard>
  )
}

export default CardCharacter
