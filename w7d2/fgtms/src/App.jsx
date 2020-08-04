import React, { useState } from 'react';
import './App.css';
import MatchList from './components/MatchList'
import PlayerList from './components/PlayerList'
import MatchForm from './components/MatchForm';


// MatchList -> Match
// PlayerList -> Player

const playerListSource = [
  { name: "Françis", nickname: "Hawks", main: "Kirby" },
  { name: "Alyssa", nickname: "Oh no", main: "Kirby" },
  { name: "Leo", nickname: "Neon", main: "Pikachu" },
  { name: "William", nickname: "Randal", main: "Captain Falcon" },
  { name: "Francis", nickname: "Cadaei", main: "Inkling" },
]

const matchListSource = [
  {
    player1: { name: "Françis", nickname: "Hawks", main: "Kirby" },
    player2: { name: "Alyssa", nickname: "Oh no", main: "Kirby" },
    winner: { name: "Alyssa", nickname: "Oh no", main: "Kirby" }
  },
  {
    player1: { name: "Leo", nickname: "Neon", main: "Pikachu" },
    player2: { name: "William", nickname: "Randal", main: "Captain Falcon" },
  },
]
// Cadaei -> 314159 -> 3.14159 -> 3.1416

function App() {
  const [matchList, setMatchList] = useState(matchListSource)
  const [playerList, setPlayerList] = useState(playerListSource)

  const addNewMatch = (match) => {
    // setMatchList([...matchList, match])
    // setMatchList([...matchList, match])

    setMatchList(prevState => [...prevState, match])
    setMatchList(prevState => [...prevState, match])
  }

  return (
    <div className="App">
      <h1>Fighting Game Tournament Management System</h1>
      <MatchForm playerList={playerList} addNewMatch={addNewMatch} setMatchList={setMatchList} />
      <PlayerList playerList={playerList} />
      <MatchList matchList={matchList} />
    </div>
  );
}

export default App;
