import { Player } from "./useGameLogic";

type GameOverProps = {
  players: Player[];
};

const GameOver = ({ players }: GameOverProps) => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-purple-800">🌸 game over!</h1>
      <p className="mb-4 text-lg text-gray-700">here are the final rankings ✨</p>
      <ol className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md space-y-3">
        {sortedPlayers.map((player, index) => (
          <li key={player.id} className="flex justify-between text-lg">
            <span>
              {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "🌼"}{" "}
              {player.name}
            </span>
            <span className="font-bold text-blue-700">${player.score}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GameOver;
