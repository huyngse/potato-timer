import { useEffect, useRef } from "react";
import { useGameStore } from "./store/useGameStore";

function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>()
    useEffect(() => {
      ref.current = value
    }, [value])
    return ref.current
  }

  
function TimeInfoPanel() {
  const { ngay, tuan, thang, nextDay } = useGameStore();

  const prevThang = usePrevious(thang)

  useEffect(() => {
    if (prevThang !== undefined && thang > prevThang) {
      alert("📦 Bạn đã được cấp lại tem phiếu cho tháng mới!")
    }
  }, [thang, prevThang]);
  
  return (
    <div className="bg-[#fef6e4] p-4 rounded-xl border border-gray-300 shadow">
      <h3 className="text-lg font-bold mb-2">🕰️ Thời gian</h3>
      <p>📅 Ngày: {ngay} / 7</p>
      <p>🗓️ Tuần: {tuan} / 4</p>
      <p>🕮 Tháng: {thang}</p>
      <button
        onClick={nextDay}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        ➡️ Sang ngày tiếp theo
      </button>
    </div>
  );
}

export default TimeInfoPanel;