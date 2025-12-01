

import React from 'react'

const CheckBox = () => {

    const [termos, setTermos] = React.useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTermos(event.target.checked);
    }

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" value='Termos' checked={termos} onChange={handleChange}/>
        Aceitar termos de privacidade.
      </label>
      {termos && <h2>Termos aceitos</h2>}
    </div>
  )
}

export default CheckBox
