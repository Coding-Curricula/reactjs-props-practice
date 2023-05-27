import React from 'react'

import VicePresident from './VicePresident'

export default function President({name}) {
  return (
    <div>
        <h1>President</h1>
        <p>{name}</p>
        <VicePresident name="Kamala Harris" />
    </div>

  )
}
