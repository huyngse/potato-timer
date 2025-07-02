import { CuaHang } from "./CuaHang";
import { HangDangCho } from "./HangDangCho";
import { ModalSuKien } from "./ModalSuKien";
import { NhatKySuKien } from "./NhatKySuKien";
import Sidebar from "./Sidebar";

function TemPhieuChronicles() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f1e9] font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#b04e4e] text-white p-4 text-center text-2xl font-bold shadow-md">
        🧧 TEM PHIẾU SỬ KÍ 🧧
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-xl font-bold mb-4">📋 Hành động trong tuần</h1>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#d4a373] hover:bg-[#bc8a5f] text-white px-4 py-2 rounded-xl shadow">
              🛒 Xếp hàng mua hàng
            </button>
            <button className="bg-[#d4a373] hover:bg-[#bc8a5f] text-white px-4 py-2 rounded-xl shadow">
              🌱 Trồng rau sau nhà
            </button>
            <button className="bg-[#d4a373] hover:bg-[#bc8a5f] text-white px-4 py-2 rounded-xl shadow">
              🔄 Đổi tem/phẩm vật
            </button>
            <button className="bg-[#d4a373] hover:bg-[#bc8a5f] text-white px-4 py-2 rounded-xl shadow">
              📖 Nhật ký
            </button>
          </div>
          <CuaHang />
          <HangDangCho />
          <NhatKySuKien />
        </main>
      </div>
      <ModalSuKien />
      {/* Footer */}
      <footer className="bg-[#b04e4e] text-white p-2 text-center text-sm">
        📢 Loa phường: “Nhớ mang tem khi đi mua hàng!”
      </footer>
    </div>
  );
}

export default TemPhieuChronicles;
