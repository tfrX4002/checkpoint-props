import React from 'react'

function handleName(props) {
  return (
    <button onClick={() => props.alertMyInput(`My name is Ryan `)}>
    ClickMe
  </button>
  )
}

export default handleName