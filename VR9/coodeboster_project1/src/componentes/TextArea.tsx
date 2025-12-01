import React from 'react'



const TextArea = () => {
    const [message, setMessage] = React.useState('');

  return (
    <div>
      <textarea 
      value={message} 
      onChange={(event) => setMessage(event.target.value)}
      cols={10} rows={10}
      >
      </textarea>
      <br />
    <h2>{message}</h2>
    </div>
  )
}

export default TextArea
