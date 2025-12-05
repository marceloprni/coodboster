import { Link } from 'react-router-dom'

import React, { useEffect } from 'react'

const Navigation = () => {

  useEffect(() => {
    console.log('renderizou')
  }, [])

  return (
    <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/about">About</Link>
       </li>
       <li>
          <Link to="/contact">Contact</Link>
       </li>
    </ul>
  )
}

export default Navigation
