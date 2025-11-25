

import React from 'react'

type Props = {
  title: string
  sub?: string
}

export default function Title({title, sub = 'Sub default'}: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{sub}</p>
    </div>
  )
}
