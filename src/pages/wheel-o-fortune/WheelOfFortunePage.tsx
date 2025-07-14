import Wheel from "./Wheel";
import PuzzleBoard from "./PuzzleBoard";
import Keyboard from "./Keyboard";
import PlayersPanel from "./PlayersPanel";
import PlayerSetup from "./PlayerSetup";
import { useGameLogic } from "./useGameLogic";
import GameOver from "./GameOver";

const WheelOfFortunePage = () => {
  const {
    isGameOver,
    players,
    setPlayers,
    revealedLetters,
    usedLetters,
    puzzle,
    currentPlayerIndex,
    currentSpinValue,
    buyVowelMode,
    canBuyVowel,
    remainingVowels,
    handleGuess,
    handleGuessPhrase,
    handleSpinResult,
    setBuyVowelMode,
  } = useGameLogic();

  const canStillBuyVowel = remainingVowels.length > 0;

  if (players.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-50 p-4">
        <PlayerSetup onPlayersReady={setPlayers} />
      </div>
    );
  }

  if (isGameOver) {
    return <GameOver players={players} />;
  }

  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center mt-10">
          🌟 Wheel of Fortune 🌟
        </h1>
        <Wheel
          onSpinResult={handleSpinResult}
          disabled={currentSpinValue != null}
        />
        {currentSpinValue && (
          <p className="text-md text-purple-700 mb-2 text-center mt-2">
            🎰 Last Spin: {currentSpinValue}
          </p>
        )}
      </div>
      <div className="bg-blue-50 flex flex-col items-center">
        <PlayersPanel
          players={players}
          currentPlayerIndex={currentPlayerIndex}
        />
        <PuzzleBoard puzzle={puzzle} revealedLetters={revealedLetters} />
        <Keyboard
          onGuess={handleGuess}
          usedLetters={usedLetters}
          disabled={
            (!buyVowelMode && currentSpinValue == null) ||
            currentSpinValue === "BANKRUPT" ||
            currentSpinValue === "LOSE TURN"
          }
          buyVowelMode={buyVowelMode}
        />
        <button
          onClick={handleGuessPhrase}
          className="mt-2 mb-4 bg-green-300 text-green-900 font-bold py-2 px-4 rounded shadow hover:bg-green-400 transition"
          disabled={currentSpinValue !== null}
        >
          ✨ Guess the Phrase
        </button>
        {canBuyVowel && canStillBuyVowel && (
          <button
            onClick={() => setBuyVowelMode(true)}
            className="mt-2 mb-4 bg-yellow-300 text-yellow-900 font-bold py-2 px-4 rounded shadow hover:bg-yellow-400 transition"
          >
            🌼 Buy a Vowel (-$250)
          </button>
        )}
      </div>
    </div>
  );
};

export default WheelOfFortunePage;
