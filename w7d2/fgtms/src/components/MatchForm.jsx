import React from 'react'
import { useState } from 'react'

// {
//   player1: { name: "Françis", nickname: "Hawks", main: "Kirby" },
//   player2: { name: "Alyssa", nickname: "Oh no", main: "Kirby" },
//   winner: { name: "Alyssa", nickname: "Oh no", main: "Kirby" }
// },

// obj.player1
// const currentKey = "player2"
// obj["player1"]
// obj[currentKey]
// [

//   { name: "Françis", nickname: "Hawks", main: "Kirby" },
//   { name: "Alyssa", nickname: "Oh no", main: "Kirby" },
//   { name: "Leo", nickname: "Neon", main: "Pikachu" },
//   { name: "William", nickname: "Randal", main: "Captain Falcon" },
//   { name: "Francis", nickname: "Cadaei", main: "Inkling" },
// ]

const MatchForm = props => {
  const [matchFormData, setMatchFormData] = useState({
    player1: null,
    player2: null,
    winner: null
  })

  const { playerList, addNewMatch, setMatchList } = props

  const parsedPlayerList = playerList.map((player, index) => (
    <option key={player.nickname} value={index}>{player.name}</option>
  ))

  const updatePlayer1 = (event) => setMatchFormData({ ...matchFormData, player1: playerList[event.target.value] })
  const updatePlayer2 = (event) => setMatchFormData({ ...matchFormData, player2: playerList[event.target.value] })

  const updatePlayer = (event) => setMatchFormData({ ...matchFormData, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    const match = {
      player1: playerList[matchFormData.player1],
      player2: playerList[matchFormData.player2]
    }
    addNewMatch(match)
    // setMatchList(prevState => [...prevState, match])
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <select name="player1" onChange={updatePlayer} value={matchFormData.player1}>
          {parsedPlayerList}
        </select>
        <select name="player2" onChange={updatePlayer} value={matchFormData.player2}>
          {parsedPlayerList}
        </select>
        <button type="submit">Add match</button>
      </form>
    </section>
  )
}

export default MatchForm