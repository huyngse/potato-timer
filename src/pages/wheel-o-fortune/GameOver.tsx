import { Player } from "./useGameLogic";

type GameOverProps = {
  players: Player[];
};

const GameOver = ({ players }: GameOverProps) => {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6" style={{background: 'url(http://4.bp.blogspot.com/-05kEzG2LD5Q/U5eYKnejlmI/AAAAAAAAAfc/elBdjpy7ay0/s1600/space.jpg)'}}>
      <h1 className="text-4xl font-bold mb-6 text-purple-800">🎉🎉🎉game over!🎉🎉🎉</h1>
      <p className="mb-4 text-lg text-gray-700 font-bold">
         Người chiến thắng là
      </p>
      <img
        src={`https://cataas.com/cat/cute/says/${encodeURIComponent(
          sortedPlayers[0].name
        )}?width=400&height=400`}
        alt=""
        width={200}
        height={200}
        className="rounded"
      />
      <ol className="bg-white rounded shadow-lg p-6 w-full max-w-md space-y-3 mt-2">
        {sortedPlayers.map((player, index) => (
          <li key={player.id} className="flex justify-between text-lg">
            <span>
              {index === 0
                ? "🥇"
                : index === 1
                ? "🥈"
                : index === 2
                ? "🥉"
                : "🌼"}{" "}
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
