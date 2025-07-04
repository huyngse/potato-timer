import { useGameStore } from "./store/useGameStore";

function TrangThaiSinhTon() {
  const { sucKhoe, dinhDuong, tinhThan } = useGameStore();

  const bar = (label: string, value: number, color: string) => (
    <div>
      <p className="text-sm">
        {label}: {value}/100
      </p>
      <div className="w-full bg-gray-200 h-3 rounded">
        <div
          className={`h-3 rounded ${color}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h3 className="text-lg font-bold mb-2">🧍‍♂️ Trạng thái nhân vật</h3>
      <div className="space-y-2">
        {bar("❤️ Sức khỏe", sucKhoe, "bg-red-500")}
        {bar("🥣 Dinh dưỡng", dinhDuong, "bg-yellow-500")}
        {bar("😵 Tinh thần", tinhThan, "bg-blue-400")}
      </div>
    </div>
  );
}
export default TrangThaiSinhTon;