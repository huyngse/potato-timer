import React from "react";

type Player = {
  id: number;
  name: string;
  score: number;
  roundScore: number;
};

interface PlayersPanelProps {
  players: Player[];
  currentPlayerIndex: number;
}

const PlayersPanel: React.FC<PlayersPanelProps> = ({
  players,
  currentPlayerIndex,
}) => {
  return (
    <div className="bg-white shadow-lg p-4 w-full mx-auto mb-6 border border-yellow-300">
      <ul className="grid grid-cols-3 gap-3">
        {players.map((player, index) => (
          <li
            key={index}
            className={`p-3 rounded-lg border ${
              index === currentPlayerIndex
                ? "bg-yellow-100 border-yellow-500 font-semibold shadow-inner"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <p className="font-bold ">
              {player.name}{" "}
              <span
                className="text-zinc-500 text-center"
                style={{ fontSize: "0.7rem" }}
              >
               ({player.score})
              </span>
            </p>

            <p className="text-xl">${player.roundScore}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersPanel;
