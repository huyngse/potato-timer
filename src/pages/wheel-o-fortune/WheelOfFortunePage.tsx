import { useState } from "react";
import PuzzleBoard from "./PuzzleBoard";
import Keyboard from "./Keyboard";
import PlayerSetup from "./PlayerSetup";
import Wheel from "./Wheel";

type Player = {
  id: number;
  name: string;
  score: number;
  roundScore: number;
};

const WheelOfFortunePage = () => {
  const [revealedLetters, setRevealedLetters] = useState(["L", "O"]);
  const [usedLetters, setUsedLetters] = useState<string[]>([]);
  const [players, setPlayers] = useState<Player[] | null>([
    {
      id: 1,
      name: "Player 1",
      score: 0,
      roundScore: 0,
    },
    {
      id: 1,
      name: "Player 2",
      score: 0,
      roundScore: 0,
    },
    {
      id: 1,
      name: "Player 3",
      score: 0,
      roundScore: 0,
    },
  ]);

  const puzzle = "HELLO WORLD";
  const handleGuess = (letter: string) => {
    setUsedLetters([...usedLetters, letter]);

    if (puzzle.includes(letter)) {
      setRevealedLetters([...revealedLetters, letter]);
    }
  };

  if (!players) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-4">
        <PlayerSetup onPlayersReady={setPlayers} />
      </div>
    );
  }

  const handleSpinResult = (value: string) => {
    console.log("Wheel landed on:", value);
  };

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center mt-10">🌟 Wheel of Fortune 🌟</h1>
        <Wheel onSpinResult={handleSpinResult} />
      </div>
      <div className=" bg-blue-50 flex flex-col items-center justify-center">
        <PuzzleBoard puzzle={puzzle} revealedLetters={revealedLetters} />
        <Keyboard onGuess={handleGuess} usedLetters={usedLetters} />
      </div>
    </div>
  );
};

export default WheelOfFortunePage;
