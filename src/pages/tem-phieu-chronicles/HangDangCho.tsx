import { useGameStore } from "./useGameStore"

export function HangDangCho() {
  const hangDangCho = useGameStore((s) => s.hangDangCho)

  if (hangDangCho.length === 0) return null

  return (
    <div className="bg-white rounded p-4 shadow mt-4">
      <h3 className="text-lg font-bold mb-2">⏳ Hàng đang xếp chờ</h3>
      <ul className="text-sm space-y-2">
        {hangDangCho.map((h, i) => (
          <li key={i}>
            {h.soLuong} đơn vị {h.loai} (nhận sau ngày {h.ngayNhan})
          </li>
        ))}
      </ul>
    </div>
  )
}