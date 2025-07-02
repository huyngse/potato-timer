import { useState } from "react"
import { useGameStore } from "./useGameStore"
import { HANG_HOA } from "./hangHoa"

export function CuaHang() {
  const { muaHang } = useGameStore()
  const [soLuong, setSoLuong] = useState<Record<string, number>>({})

  const handleMua = (item: (typeof HANG_HOA)[0]) => {
    const sl = soLuong[item.id] || 0
    if (sl > 0) {
      muaHang(item.loaiTem as any, sl)
    } else {
      alert("Vui lòng nhập số lượng hợp lệ!")
    }
  }

  return (
    <div className="p-4 bg-[#fffef7] rounded-xl shadow border mt-4">
      <h2 className="text-xl font-bold mb-4">🛍️ Cửa hàng tem phiếu</h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Mặt hàng</th>
            <th className="border-b p-2">Đơn giá</th>
            <th className="border-b p-2">Số lượng</th>
            <th className="border-b p-2">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {HANG_HOA.map((item) => (
            <tr key={item.id}>
              <td className="p-2">{item.ten}</td>
              <td className="p-2">{item.gia} tem / {item.donVi}</td>
              <td className="p-2">
                <input
                  type="number"
                  min={1}
                  className="w-20 border px-2 py-1 rounded"
                  value={soLuong[item.id] || ""}
                  onChange={(e) =>
                    setSoLuong({ ...soLuong, [item.id]: Number(e.target.value) })
                  }
                />
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleMua(item)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Mua
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
