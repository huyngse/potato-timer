import { useState } from "react";

type Player = {
  id: number;
  name: string;
  score: number;
  roundScore: number;
};

type PlayerSetupProps = {
  onPlayersReady: (players: Player[]) => void;
};

const PlayerSetup: React.FC<PlayerSetupProps> = ({ onPlayersReady }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [name, setName] = useState("");

  const handleAddPlayer = () => {
    const trimmedName = name.trim();
    if (!trimmedName || players.length >= 3) return;

    const newPlayer: Player = {
      id: players.length,
      name: trimmedName,
      score: 0,
      roundScore: 0,
    };

    setPlayers([...players, newPlayer]);
    setName("");
  };

  const handleStartGame = () => {
    if (players.length === 3) {
      onPlayersReady(players);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md space-y-4">
      <h2 className="text-2xl font-bold text-center text-blue-600">Thêm người chơi</h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={name}
          placeholder="Nhập tên người chơi"
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg"
          disabled={players.length >= 3}
        />
        <button
          onClick={handleAddPlayer}
          disabled={!name.trim() || players.length >= 3}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Thêm
        </button>
      </div>

      <ul className="list-disc list-inside text-left text-gray-700">
        {players.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <button
        onClick={handleStartGame}
        disabled={players.length < 3}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        Bắt đầu
      </button>
    </div>
  );
};

export default PlayerSetup;
