import { create } from "zustand";
import { SU_KIEN_NGAU_NHIEN } from "./suKien";

interface GameState {
  // Tem phiếu
  temGao: number;
  temThit: number;
  temVai: number;
  updateTem: (loai: "gao" | "thit" | "vai", amount: number) => void;
  resetTem: () => void;
  capTemMoi: () => void;

  muaHang: (loai: "gao" | "thit" | "vai", soLuong: number) => void;
  suKienHomNay: null | {
    id: string;
    tieuDe: string;
    moTa: string;
    tacDong: any;
  };
  dongSuKien: () => void;

  nhatKy: {
    thang: number;
    tuan: number;
    ngay: number;
    tieuDe: string;
    moTa: string;
  }[];
  ghiSuKien: (tieuDe: string, moTa: string) => void;
  // Thời gian
  ngay: number;
  tuan: number;
  thang: number;
  nextDay: () => void;
  resetThoiGian: () => void;

  sucKhoe: number; // max 100
  dinhDuong: number; // max 100
  tinhThan: number; // max 100
  capNhatHangNgay: () => void;

  hangTonKho: Record<string, number>; // ví dụ: { gao: 10, thit: 5 }
  hangDangCho: { loai: string; soLuong: number; ngayNhan: number }[];
  themHangCho: (loai: string, soLuong: number) => void;
  resetHangMoiThang: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  // Tem Phiếu
  temGao: 5,
  temThit: 0.5,
  temVai: 2,
  suKienHomNay: null,
  sucKhoe: 100,
  dinhDuong: 100,
  tinhThan: 80,
  nhatKy: [],
  hangTonKho: {
    gao: 10,
    thit: 5,
    vai: 3,
  },
  hangDangCho: [],
  updateTem: (loai, amount) =>
    set((state) => {
      const newState = { ...state };
      if (loai === "gao") newState.temGao += amount;
      if (loai === "thit") newState.temThit += amount;
      if (loai === "vai") newState.temVai += amount;
      return newState;
    }),
  resetTem: () => set({ temGao: 5, temThit: 0.5, temVai: 2 }),
  capTemMoi: () =>
    set({
      temGao: 5,
      temThit: 0.5,
      temVai: 2,
    }),

  muaHang: (loai, soLuong) => {
    const { hangTonKho, temGao, temThit, temVai, themHangCho } = get();

    if (!hangTonKho[loai] || hangTonKho[loai] < soLuong) {
      alert("🧃 Mặt hàng này đã hết. Vui lòng quay lại sau.");
      return;
    }

    // Trừ tem
    if (loai === "gao" && temGao < soLuong) return alert("Không đủ tem gạo.");
    if (loai === "thit" && temThit < soLuong)
      return alert("Không đủ tem thịt.");
    if (loai === "vai" && temVai < soLuong) return alert("Không đủ tem vải.");

    if (loai === "gao") set({ temGao: temGao - soLuong });
    if (loai === "thit") set({ temThit: temThit - soLuong });
    if (loai === "vai") set({ temVai: temVai - soLuong });

    // Trừ hàng kho
    set((s) => ({
      hangTonKho: {
        ...s.hangTonKho,
        [loai]: s.hangTonKho[loai] - soLuong,
      },
    }));

    // Thêm vào hàng chờ, giả sử chờ 2 ngày
    themHangCho(loai, soLuong);
  },

  themHangCho: (loai, soLuong) => {
    const { ngay } = get();
    const ngayNhan = ngay + 2;

    set((s) => ({
      hangDangCho: [...s.hangDangCho, { loai, soLuong, ngayNhan }],
    }));
  },

  // Thời gian
  ngay: 1,
  tuan: 1,
  thang: 1,
  nextDay: () => {
    const { ngay, hangDangCho } = get();

    // Nhận hàng về kho cá nhân (dinh dưỡng...)
    const hangNhanHomNay = hangDangCho.filter((h) => h.ngayNhan === ngay);

    hangNhanHomNay.forEach((h) => {
      if (h.loai === "gao") {
        set((s) => ({ dinhDuong: Math.min(100, s.dinhDuong + h.soLuong * 2) }));
        get().ghiSuKien(
          "Đã nhận gạo sau khi xếp hàng",
          `Nhận ${h.soLuong} đơn vị gạo.`
        );
      }

      if (h.loai === "thit") {
        set((s) => ({
          dinhDuong: Math.min(100, s.dinhDuong + h.soLuong * 4),
          tinhThan: Math.min(100, s.tinhThan + 2),
        }));
        get().ghiSuKien(
          "Đã nhận thịt sau khi xếp hàng",
          `Nhận ${h.soLuong} đơn vị thịt.`
        );
      }
    });

    // Xóa hàng đã nhận
    set((s) => ({
      hangDangCho: s.hangDangCho.filter((h) => h.ngayNhan > ngay),
    }));

    const { tuan, thang, capTemMoi, capNhatHangNgay } = get();
    capNhatHangNgay();
    // Xử lý thời gian
    if (ngay < 7) {
      set({ ngay: ngay + 1 });
    } else if (tuan < 4) {
      set({ ngay: 1, tuan: tuan + 1 });
    } else {
      capTemMoi();
      get().resetHangMoiThang();
      set({ ngay: 1, tuan: 1, thang: thang + 1 });
    }

    // Sự kiện ngẫu nhiên
    const rand = Math.random();
    if (rand < 0.25) {
      const allEvents = SU_KIEN_NGAU_NHIEN;
      const e = allEvents[Math.floor(Math.random() * allEvents.length)];

      // Áp dụng tác động nếu có
      if (e.tacDong.loai === "giam_tem") {
        const { tem, soLuong } = e.tacDong;
        if (tem === "gao")
          set((s) => ({ temGao: Math.max(0, s.temGao - soLuong) }));
        if (tem === "vai")
          set((s) => ({ temVai: Math.max(0, s.temVai - soLuong) }));
      }

      if (e.tacDong.loai === "tang_tem") {
        const { tem, soLuong } = e.tacDong;
        if (tem === "gao") set((s) => ({ temGao: s.temGao + soLuong }));
        if (tem === "vai") set((s) => ({ temVai: s.temVai + soLuong }));
      }
      get().ghiSuKien(e.tieuDe, e.moTa);
      set({ suKienHomNay: e });
    } else {
      set({ suKienHomNay: null });
    }
  },
  dongSuKien: () => set({ suKienHomNay: null }),
  resetThoiGian: () => set({ ngay: 1, tuan: 1, thang: 1 }),
  resetHangMoiThang: () => {
    set({
      hangTonKho: {
        gao: 10 + Math.floor(Math.random() * 5),
        thit: 5 + Math.floor(Math.random() * 3),
        vai: 3 + Math.floor(Math.random() * 2),
      },
    });

    get().ghiSuKien(
      "Kho hàng nhập mới",
      "Hàng hóa trong tháng mới đã được bổ sung."
    );
  },
  ghiSuKien: (tieuDe, moTa) => {
    const { thang, tuan, ngay } = get();
    set((state) => ({
      nhatKy: [
        ...state.nhatKy,
        {
          thang,
          tuan,
          ngay,
          tieuDe,
          moTa,
        },
      ],
    }));
  },
  capNhatHangNgay: () => {
    const { dinhDuong, tinhThan, sucKhoe } = get();

    const dinhDuongMoi = Math.max(0, dinhDuong - 5); // mỗi ngày mất 5 điểm
    const tinhThanMoi = Math.max(0, tinhThan - (Math.random() < 0.3 ? 2 : 0)); // ngẫu nhiên giảm

    let sucKhoeMoi = sucKhoe;
    if (dinhDuongMoi < 30) {
      sucKhoeMoi = Math.max(0, sucKhoe - 10); // thiếu ăn => giảm sức
    } else if (dinhDuongMoi > 60 && sucKhoe < 100) {
      sucKhoeMoi = Math.min(100, sucKhoe + 2); // đủ ăn hồi sức
    }

    set({
      dinhDuong: dinhDuongMoi,
      tinhThan: tinhThanMoi,
      sucKhoe: sucKhoeMoi,
    });

    if (sucKhoeMoi <= 0) {
      alert("💀 Bạn đã kiệt sức vì thiếu ăn. Trò chơi kết thúc.");
      // Optionally: reset hoặc cho restart
    }
  },
}));
