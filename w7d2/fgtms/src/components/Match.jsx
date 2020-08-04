import React from 'react'


// {
//     player1: { name: "Françis", nickname: "Hawks", main: "Kirby" },
//     player2: { name: "Alyssa", nickname: "Oh no", main: "Kirby" },
//     winner: { name: "Alyssa", nickname: "Oh no", main: "Kirby" }
//   },

const Match = props => {
  const { player1, player2, winner } = props

  return (
    <section>
      <p>{player1.name} vs {player2.name} </p>
      <h3>Winner: {winner ? winner.name : "No winner yet"}</h3>
    </section>
  )
}

export default Match