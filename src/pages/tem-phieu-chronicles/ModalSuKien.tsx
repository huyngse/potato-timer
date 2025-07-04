import { useGameStore } from "./store/useGameStore"

export function ModalSuKien() {
  const { suKienHomNay, dongSuKien } = useGameStore()

  if (!suKienHomNay) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
        <h2 className="text-xl font-bold mb-2">{suKienHomNay.tieuDe}</h2>
        <p className="text-gray-700 mb-4">{suKienHomNay.moTa}</p>
        <button
          onClick={dongSuKien}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Đóng
        </button>
      </div>
    </div>
  )
}
