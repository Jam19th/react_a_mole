// Import Dependencies
import './App.css';
import MoleContainer from './components/MoleContainer';
import { useEffect, useState } from 'react';
import moleImg from './mole.png';

function App() {
  let [gameOn, setGameOn] = useState(false);
  let [score, setScore] = useState(0);
  let [pause, setPause] = useState(true);
  let [timer, setTimer] = useState(15);

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score}
          pause={pause}
        />
      )
    }

    return (<div>{hills}</div>)
  }

  // Start Game
  const startGame = () => {
    setGameOn(true);
    setScore(0);
    setTimer(15);
    setPause(false);
  }

  // Pause Game and Timer
  useEffect(() => {
    let intervalId;

    if (!pause && gameOn) {
      intervalId = setInterval(() => {
        moveMolesRandomly();
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          endGame()
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  });

  // End Game
  const endGame = () => {
    setGameOn(false);
    setPause(true);
    alert(`Game Over! You scored ${score} points!`);
  }

  // Move Moles Randomly
  const moveMolesRandomly = () => { }

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      {gameOn ? (
        <div>
          <h2>Time Remaining: {timer}</h2>
          <h2>Score: {score}</h2>
          <button onClick={() => setPause(!pause)}>
            {pause ? 'Resume' : 'Pause'}</button>
          {createMoleHill()}
        </div>
      ) : (
        <div>
          <h2>Click Start to Play!</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button onClick={startGame}>Start</button>
            <img
              src={moleImg} alt="Mole" style={{ width: '95vw', position: 'center' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
