

import React from 'react'

const RadioButton = () => {

    const [carro, setCarro] = React.useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCarro(event.target.value);
    }

  return (
    <div>
       <label htmlFor="">
            <input 
            type="radio" 
            name="genero" 
            value="masculino" 
            checked={carro === 'masculino'}
            onChange={handleChange}/> Masculino
            </label>
            <br />
            <label htmlFor="">
            <input 
            type="radio" 
            name="genero" 
            value="feminino"
            checked={carro === 'feminino'} 
            onChange={handleChange}/> Feminino
       </label>
         <br />
         <br />
        {carro && <h2>Genero selecionado: {carro}</h2>}
    </div>
  )
}

export default RadioButton
