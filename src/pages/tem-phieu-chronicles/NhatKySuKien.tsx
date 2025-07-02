import { useGameStore } from "./useGameStore"

export function NhatKySuKien() {
  const nhatKy = useGameStore((s) => s.nhatKy)

  if (nhatKy.length === 0)
    return <p className="text-gray-500 italic">📭 Nhật ký chưa có gì...</p>

  return (
    <div className="bg-white p-4 rounded-xl shadow border mt-6">
      <h2 className="text-xl font-bold mb-4">📝 Nhật ký sự kiện</h2>
      <ul className="space-y-3 max-h-64 overflow-y-auto">
        {nhatKy
          .slice()
          .reverse()
          .map((item, i) => (
            <li key={i} className="border-b pb-2">
              <p className="text-sm text-gray-500">
                📅 Ngày {item.ngay} / Tuần {item.tuan} / Tháng {item.thang}
              </p>
              <p className="font-semibold">{item.tieuDe}</p>
              <p className="text-gray-700 text-sm">{item.moTa}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}
