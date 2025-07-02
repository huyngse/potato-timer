import { LuGlobe, LuTrendingUp, LuUser } from "react-icons/lu";
import { GameState } from "../types";

const ScoreBoard: React.FC<{ gameState: GameState }> = ({ gameState }) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-600";
    if (score >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBar = (score: number) => {
    let colorClass = "bg-red-500";
    if (score > 100) colorClass = "bg-pink-500 animate-pulse";
    else if (score >= 70) colorClass = "bg-green-500";
    else if (score >= 40) colorClass = "bg-yellow-500";
    else if (score < 0) colorClass = "bg-gray-500 animate-pulse";

    const isOverflow = score > 100;
    const isUnderflow = score < 0;

    const barStyle = {
      width: `${Math.abs(score)}%`,
      position: "absolute" as const,
      left: isUnderflow ? `-${Math.abs(score)}%` : "0",
      right: isOverflow ? `-${score - 100}%` : "auto",
    };

    const tooltip =
      score > 100
        ? "Whoa, this is off the charts!"
        : score < 0
        ? "We're going backwards!"
        : "";

    return (
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-visible relative">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${colorClass}`}
          style={barStyle}
          title={tooltip}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Quá trình cải cách</h2>
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <LuTrendingUp className="mr-2 text-blue-600" size={20} />
              <span className="font-medium">Kinh tế</span>
            </div>
            <span className={`font-bold ${getScoreColor(gameState.economy)}`}>
              {gameState.economy}%
            </span>
          </div>
          {getScoreBar(gameState.economy)}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <LuUser className="mr-2 text-green-600" size={20} />
              <span className="font-medium">Niền tin của nhân dân</span>
            </div>
            <span
              className={`font-bold ${getScoreColor(gameState.publicSupport)}`}
            >
              {gameState.publicSupport}%
            </span>
          </div>
          {getScoreBar(gameState.publicSupport)}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <LuGlobe className="mr-2 text-purple-600" size={20} />
              <span className="font-medium">Quan hệ quốc tế</span>
            </div>
            <span
              className={`font-bold ${getScoreColor(gameState.international)}`}
            >
              {gameState.international}%
            </span>
          </div>
          {getScoreBar(gameState.international)}
        </div>
      </div>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">
          Tình huống {gameState.scenariosCompleted + 1} / 15
        </span>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${(gameState.scenariosCompleted / 15) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ScoreBoard;
