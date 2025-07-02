import { LuPlay, LuTrophy } from "react-icons/lu";

const StartScreen: React.FC<{
  nickname: string;
  setNickname: (nickname: string) => void;
  onStart: () => void;
  onShowLeaderboard: () => void;
}> = ({ nickname, setNickname, onStart, onShowLeaderboard }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Vietnam's Path to Reform
          </h1>
          <p className="text-gray-600">
            Navigate the challenges of Doi Moi as a Vietnamese official in the
            late 1980s
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="nickname"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter your nickname
          </label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your nickname"
            maxLength={20}
          />
        </div>

        <div className="space-y-3">
          <button
            onClick={onStart}
            disabled={!nickname.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <LuPlay className="mr-2" size={20} />
            Start Game
          </button>

          <button
            onClick={onShowLeaderboard}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <LuTrophy className="mr-2" size={20} />
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
