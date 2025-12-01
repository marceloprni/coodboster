import React from 'react'

const SelectOption = () => {
  const [car, setCar] = React.useState('');

  return (
    <div>
       <select value={car} onChange={(event) => setCar(event.target.value)}>
        <option value="">Selecione um carro</option>
        <option value="Ferrari">Ferrari</option>
        <option value="Lamborghini">Lamborghini</option>
        <option value="Porche">Porche</option>
       </select>
       <br />
       {car}
    </div>
  )
}

export default SelectOption
