import TimeInfoPanel from "./TimeInfoPanel";
import TrangThaiSinhTon from "./TrangThaiSinhTon";
import { useGameStore } from "./store/useGameStore";

function Sidebar() {
  const { temGao, temThit, temVai } = useGameStore();

  return (
    <aside className="w-64 bg-[#ede0d4] p-4 border-r border-gray-300">
      <TrangThaiSinhTon />
      <h2 className="text-lg font-semibold mb-4">Thông tin cá nhân</h2>
      <div className="mb-2">👤 Tên: Nguyễn Văn A</div>
      <div className="mb-2">📅 Tuần: 1</div>
      <div className="mb-2">🎟️ Tem Gạo: {temGao} kg</div>
      <div className="mb-2">🍖 Tem Thịt: {temThit} kg</div>
      <div className="mb-2">🧻 Tem Vải: {temVai} m</div>
      <TimeInfoPanel />
    </aside>
  );
}
export default Sidebar;
