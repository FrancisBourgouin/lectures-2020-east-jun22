import React from 'react'


// { name: "Françis", nickname: "Hawks", main: "Kirby" },

const Player = props => {

  return (
    <li>{props.name}, also known as {props.nickname}, maining {props.main}</li>
  )
}

export default Player