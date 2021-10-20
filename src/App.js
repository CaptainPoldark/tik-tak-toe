import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import checkWinner from './components/winner.js';
import Square from './components/squares.js';

function App() {

  
  //set Hooks
  const [player, setPlayer] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const [state, setState] = React.useState(Array(9).fill(null));

  // Set status message
  let status = `Player ${player + 1}`;
  if (!mounted) status = "Press Start Game To Begin!";
  let winner = checkWinner(state);
  if (winner != null) status = `Player ${winner +1} wins!`;
  if (winner != null && winner == 'Draw') status = "Draw!";

  // game play
  const newState = idOfSquare =>{

    let thePlayer = player;
    state[idOfSquare] = player; // player is present player
    setState(state); //state is array of 0 1 or null
    let nextPlayer = (player +1) % 2;
    setPlayer(nextPlayer);
    return thePlayer; // returns the present player
  }

  //create tik tak toe tiles
  function renderSquare(i){
    return <Square id={i} newState={newState}></Square>;
  }

  // mount playing tiles
  const toggle = () => {
    setMounted(!mounted);
  }

  // reset the game state back to null and clear the board
  const reRender = () => {
    setState(Array(9).fill(null))
    toggle();
    toggle();  
  }

  //create tiles in the dom show status and display the controls
  return (
    <div className="App">
      <header className="App-header">
        <div className="game-wrapper">

          <div className="game-board">
            <div className="grid-row">
              {mounted && renderSquare(0)}
              {mounted && renderSquare(1)}
              {mounted && renderSquare(2)}
            </div>
            <div className="grid-row">
              {mounted && renderSquare(3)}
              {mounted && renderSquare(4)}
              {mounted && renderSquare(5)}
            </div>
            <div className="grid-row">
              {mounted && renderSquare(6)}
              {mounted && renderSquare(7)}
              {mounted && renderSquare(8)}
            </div>
            <div id="info">
              <h1>{status}</h1>
            </div>
          </div>
        </div>
        <div className="controls">
        <button id="toggle-button" className="info-btn" onClick={toggle} disabled={mounted}>Start Game!</button>
        <button className="info-btn" onClick={reRender} disabled={!mounted}>Clear Board!</button>
        </div>
      </header>
    </div>
  );
}

export default App;
