import React from 'react'
import Match from './Match'

// [
//   {
//     player1: { name: "Françis", nickname: "Hawks", main: "Kirby" },
//     player2: { name: "Alyssa", nickname: "Oh no", main: "Kirby" },
//     winner: { name: "Alyssa", nickname: "Oh no", main: "Kirby" }
//   },
//   {
//     player1: { name: "Leo", nickname: "Neon", main: "Pikachu" },
//     player2: { name: "William", nickname: "Randal", main: "Captain Falcon" },
//     winner: { name: "William", nickname: "Randal", main: "Captain Falcon" },
//   },
// ]



const MatchList = props => {
  const { matchList } = props

  const parsedMatches = matchList.map(match => (
    <Match
      player1={match.player1}
      player2={match.player2}
      winner={match.winner}
    />
  ))

  return (
    <section className="match-list">
      <h1>I AM MatchList</h1>
      {parsedMatches}
    </section>
  )
}

export default MatchList