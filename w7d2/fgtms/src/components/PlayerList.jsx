import React from 'react'
import Player from './Player'


// [
//   { name: "Françis", nickname: "Hawks", main: "Kirby" },
//   { name: "Alyssa", nickname: "Oh no", main: "Kirby" },
//   { name: "Leo", nickname: "Neon", main: "Pikachu" },
//   { name: "William", nickname: "Randal", main: "Captain Falcon" },
//   { name: "Francis", nickname: "Cadaei", main: "Inkling" },
// ]

const PlayerList = props => {

  const parsedPlayers = props.playerList ? props.playerList.map(player => (
    <Player
      name={player.name}
      nickname={player.nickname}
      main={player.main}
    />
  ))
    :
    "No players are registered"

  return (
    <section className="player-list">
      <h1>I AM PlayerList</h1>
      {parsedPlayers}
    </section>
  )
}

export default PlayerList