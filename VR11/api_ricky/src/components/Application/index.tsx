

import React, {  useEffect } from 'react'
import axios from 'axios'
import { ContainerApp, ContectCharacters, HeaderApp, Loader } from './styles'
import CardCharacter from '../CardCharacter'
import IconLoader from '../../assets/loader.gif'

const Application = () => {

  const [ characters, setCharacters ] = React.useState([])

  const [ page, setPage ] = React.useState(1)

  const [ countPages, setCountPages ] = React.useState(0)

  const [ qtdCharacters, setQtdCharacters ] = React.useState(0)

  const [ isLoading, setIsLoading ] = React.useState(true)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => {
        console.log(response.data.info.count)
        const array = [...characters, ...response.data.results];
        setCharacters(array);
        setCountPages(response.data.info.pages);
        setQtdCharacters(response.data.info.count);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
   
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      }); 
  }, [page]);

  return (
    <>  
      { isLoading &&
        <Loader>
          <img src={IconLoader} alt="" />
        </Loader>
      }
        
        <ContainerApp>
          <HeaderApp>
              <h1>Ricky and Morty</h1>
              <span>Nª de Personagem:{qtdCharacters}</span>
          </HeaderApp>
          <ContectCharacters>
              <div>
                 {
                  characters && characters.map(({image, name, genre, species}, index) => {
                    return (
                      <CardCharacter
                        key={index}
                        image={image}
                        name={name} 
                        genre={genre}
                        specie={species}  
                      />
                    )
                  })
                }


              </div>

              {
                  (!(page === countPages)) &&  <button onClick={() => setPage(page + 1)}>Carregar mais</button>
              }
          </ContectCharacters>
        </ContainerApp>    
    </>
    
  )
}

export default Application
