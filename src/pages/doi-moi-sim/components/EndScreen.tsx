import { LuAward, LuGlobe, LuRotateCcw, LuTrendingUp, LuUser } from "react-icons/lu";
import { GameState } from "../types";

const EndScreen: React.FC<{ 
  gameState: GameState; 
  onRestart: () => void;
}> = ({ gameState, onRestart }) => {
  const getAverageScore = () => {
    return Math.round((gameState.economy + gameState.publicSupport + gameState.international) / 3);
  };

  const getExtremeScore = () => {
    const scores = [
      { type: "Kinh tế", value: gameState.economy },
      { type: "Niềm tin của nhân dân", value: gameState.publicSupport },
      { type: "Quốc tế", value: gameState.international },
    ];
    return scores.reduce((extreme, current) =>
      Math.abs(current.value) > Math.abs(extreme.value) ? current : extreme
    );
  };
  
  const getBadge = () => {
    const extreme = getExtremeScore();
    const val = extreme.value;
  
    if (val >= 150)
      return {
        title: "Nhà Cách Mạng Huyền Thoại",
        desc: `Bạn đã thúc đẩy ${extreme.type} phát triển vượt bậc chưa từng có!`,
        color: "text-yellow-500",
      };
    if (val >= 120)
      return {
        title: "Người Kiến Tạo Xuất Chúng",
        desc: `Bạn là biểu tượng đổi mới trong lĩnh vực ${extreme.type}.`,
        color: "text-orange-500",
      };
    if (val >= 100)
      return {
        title: "Nhà Lãnh Đạo Vĩ Đại",
        desc: `${extreme.type} của bạn đã đạt đến đỉnh cao mới.`,
        color: "text-green-600",
      };
    if (val >= 80)
      return {
        title: "Nhà Cải Cách Xuất Sắc",
        desc: `Bạn đã cải tổ ${extreme.type} rất thành công.`,
        color: "text-blue-600",
      };
    if (val <= -50 && val > -100)
      return {
        title: "Quan Liêu Bảo Thủ",
        desc: `${extreme.type} của bạn bị đình trệ nghiêm trọng do thiếu đổi mới.`,
        color: "text-gray-600",
      };
    if (val <= -100 && val > -150)
      return {
        title: "Thất Bại Thảm Hại",
        desc: `Bạn đã gây ra khủng hoảng trong lĩnh vực ${extreme.type}.`,
        color: "text-red-600",
      };
    if (val <= -150)
      return {
        title: "Kẻ Hủy Diệt",
        desc: `${extreme.type} đã bị hủy hoại hoàn toàn dưới sự lãnh đạo của bạn.`,
        color: "text-black",
      };
  
    // fallback to average-based badges if none above match
    const avg = getAverageScore();
    if (avg >= 65)
      return {
        title: "Nhà Lãnh Đạo Thực Dụng",
        desc: "Bạn đã cân bằng đổi mới và ổn định, mang lại tiến bộ đều đặn.",
        color: "text-blue-600",
      };
    if (avg >= 45)
      return {
        title: "Quan Chức Thận Trọng",
        desc: "Bạn duy trì được trật tự nhưng bỏ lỡ cơ hội cải cách lớn hơn.",
        color: "text-green-600",
      };
    return {
      title: "Quan Chức Bảo Thủ",
      desc: "Sự bảo thủ của bạn giữ gìn truyền thống nhưng cản trở tiến bộ.",
      color: "text-gray-600",
    };
  };

  const badge = getBadge();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <LuAward className={`mx-auto mb-4 ${badge.color}`} size={64} />
      <h2 className="text-3xl font-bold mb-2 text-gray-800">Kết thúc game!</h2>
      <h3 className={`text-2xl font-semibold mb-4 ${badge.color}`}>{badge.title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{badge.desc}</p>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-4">Điểm số cuối cùng</h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <LuTrendingUp className="mx-auto mb-2 text-blue-600" size={24} />
            <div className="text-2xl font-bold text-gray-800">{gameState.economy}%</div>
            <div className="text-sm text-gray-600">Kinh tế</div>
          </div>
          <div>
            <LuUser className="mx-auto mb-2 text-green-600" size={24} />
            <div className="text-2xl font-bold text-gray-800">{gameState.publicSupport}%</div>
            <div className="text-sm text-gray-600">Niềm tin của nhân dân</div>
          </div>
          <div>
            <LuGlobe className="mx-auto mb-2 text-purple-600" size={24} />
            <div className="text-2xl font-bold text-gray-800">{gameState.international}%</div>
            <div className="text-sm text-gray-600">Quan hệ quốc tế</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-xl font-bold text-gray-800">Trung bình: {getAverageScore()}%</div>
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto"
      >
        <LuRotateCcw className="mr-2" size={20} />
        Chơi lại
      </button>
    </div>
  );
};

export default EndScreen;
