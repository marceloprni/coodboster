import React from 'react'

const Input = () => {
  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');

  const [errorName, setErrorName] = React.useState('');
    const [errorEmail, setErrorEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if(name === '' ) {
        setErrorName('Preencha todos os campos');
      return;
    } else if (email === '' ) {
        setErrorEmail('Preencha todos os campos');
    }

    console.log('Enviou o form', name, ' ', email);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" value={name} 
        onChange={(event) => {setName(event.target.value), setErrorName('') } } 
        onBlur={ (event) => {
          if (event.target.value === '') {
            setErrorName('Preencha seu nome');
          }
        }} // quando voce sai do campo ele aparece a mensagem
        placeholder="Digite seu nome"/>
        <h2>{name}</h2>
        {errorName}
        <br />
        <input type="email" value={email} 
        onChange={(event) => {setEmail(event.target.value), setErrorEmail('') } }
        onBlur={ (event) => {
          if (event.target.value === '') {
            setErrorEmail('Preencha seu nome');
          }
        }} // quando voce sai do campo ele aparece a mensagem
        placeholder="Digite sua senha"/>
        <h2>{email}</h2>
        {errorEmail}
        <br />
        <button type='submit'>Enviar</button>

      </form>
    </div>
  )
}

export default Input
