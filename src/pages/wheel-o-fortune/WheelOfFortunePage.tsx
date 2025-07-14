import Wheel from "./Wheel";
import PuzzleBoard from "./PuzzleBoard";
import Keyboard from "./Keyboard";
import PlayersPanel from "./PlayersPanel";
import PlayerSetup from "./PlayerSetup";
import { useGameLogic } from "./useGameLogic";
import GameOver from "./GameOver";
import { useEffect, useState } from "react";

const WheelOfFortunePage = () => {
  const [showRulesModal, setShowRulesModal] = useState(false);

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

  useEffect(() => {
    document.title = "Chiếc nón kỳ diệu";
  }, []);

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
      {showRulesModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full space-y-4">
            <h2 className="text-xl font-bold text-center text-blue-700">
              📜 Luật chơi 📜
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>
                Người chơi quay bánh xe để nhận số tiền thưởng hoặc hiệu ứng đặc
                biệt.
              </li>
              <li>Chọn một phụ âm để đoán, nếu đúng sẽ nhận tiền tương ứng.</li>
              <li>Có thể mua nguyên âm với giá $250.</li>
              <li>
                Nếu đoán đúng toàn bộ cụm từ, bạn sẽ qua vòng tiếp theo với 1
                cụm từ mới!
              </li>
              <li>Sau 3 vòng, người chơi với tổng số tiền lớn nhất thắng!</li>
            </ul>
            <h3 className="text-md font-semibold text-green-700 mt-4">
              💡 Gợi ý:
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Quan sát kỹ số chữ và vị trí của các ký tự đã được lật.</li>
              <li>Đoán các chữ cái phổ biến như "T", "N", "S" trước nhé!</li>
              <li>Hãy cẩn thận với "BANKRUPT" và "LOSE TURN" nhé (・・;)</li>
            </ul>
            <button
              onClick={() => setShowRulesModal(false)}
              className="block mx-auto mt-4 bg-blue-300 text-blue-900 font-bold py-2 px-4 rounded shadow hover:bg-blue-400 transition"
            >
              ❌ đóng lại
            </button>
          </div>
        </div>
      )}

      <div>
        <h1 className="text-3xl font-bold mb-6 text-center mt-10">
          🌟 Chiếc Nón Kỳ Diệu 🌟
        </h1>
        <Wheel
          onSpinResult={handleSpinResult}
          disabled={currentSpinValue != null}
        />
        {currentSpinValue && (
          <p className="text-md text-purple-700 mb-2 text-center mt-2">
            Giá trị: {currentSpinValue}
          </p>
        )}
        <button
          onClick={() => setShowRulesModal(true)}
          className="fixed bottom-0 left-2 mt-2 mb-4 bg-purple-200 text-purple-900 font-bold py-2 px-4 rounded shadow hover:bg-purple-300 transition"
        >
          📖 luật chơi & gợi ý
        </button>
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
        <div className="flex gap-3">
          {!currentSpinValue && (
            <button
              onClick={handleGuessPhrase}
              className="mt-2 mb-4 bg-green-300 text-green-900 font-bold py-2 px-4 rounded shadow hover:bg-green-400 transition"
              disabled={currentSpinValue !== null}
            >
              Đoán cụm từ
            </button>
          )}

          {canBuyVowel && canStillBuyVowel && (
            <button
              onClick={() => setBuyVowelMode(true)}
              className="mt-2 mb-4 bg-yellow-300 text-yellow-900 font-bold py-2 px-4 rounded shadow hover:bg-yellow-400 transition"
            >
              Mua nguyên âm (-$250)
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WheelOfFortunePage;
