

import React from 'react'
import { ContainerApp, ContectCharacters, HeaderApp } from './styles'
import CardCharacter from '../CardCharacter'

const Application = () => {
  return (
    <ContainerApp>
        <HeaderApp>
            <h1>Ricky and Morty</h1>
            <span>Nª de Personagem:826</span>
        </HeaderApp>
        <ContectCharacters>
            <div>
                <CardCharacter/>
            </div>
            <button>Carregar mais</button>
        </ContectCharacters>
    </ContainerApp>
  )
}

export default Application
