import { create } from "zustand";
import { SU_KIEN_NGAU_NHIEN } from "../suKien";
import { GameState, HangCho, SuKien } from "../types";

// ====== Helpers ======

const applyEventEffect = (event: SuKien, set: any, get: any) => {
  const { tem, soLuong } = event.tacDong;
  if (!soLuong) return;

  if (event.tacDong.loai === "giam_tem") {
    if (tem === "gao")
      set((s: GameState) => ({ temGao: Math.max(0, s.temGao - soLuong) }));
    if (tem === "vai")
      set((s: GameState) => ({ temVai: Math.max(0, s.temVai - soLuong) }));
  }

  if (event.tacDong.loai === "tang_tem") {
    if (tem === "gao") set((s: GameState) => ({ temGao: s.temGao + soLuong }));
    if (tem === "vai") set((s: GameState) => ({ temVai: s.temVai + soLuong }));
  }

  get().ghiSuKien(event.tieuDe, event.moTa);
  set({ suKienHomNay: event });
};

const handleHangNhan = (hangNhan: HangCho[], set: any, get: any) => {
  hangNhan.forEach((h) => {
    if (h.loai === "gao") {
      set((s: GameState) => ({
        dinhDuong: Math.min(100, s.dinhDuong + h.soLuong * 2),
      }));
      get().ghiSuKien(
        "Đã nhận gạo sau khi xếp hàng",
        `Nhận ${h.soLuong} đơn vị gạo.`
      );
    }

    if (h.loai === "thit") {
      set((s: GameState) => ({
        dinhDuong: Math.min(100, s.dinhDuong + h.soLuong * 4),
        tinhThan: Math.min(100, s.tinhThan + 2),
      }));
      get().ghiSuKien(
        "Đã nhận thịt sau khi xếp hàng",
        `Nhận ${h.soLuong} đơn vị thịt.`
      );
    }
  });
};

// ====== Store ======

export const useGameStore = create<GameState>((set, get) => ({
  // Tem Phiếu
  temGao: 5,
  temThit: 0.5,
  temVai: 2,
  updateTem: (loai, amount) =>
    set((state) => ({
      ...state,
      [`tem${loai.charAt(0).toUpperCase() + loai.slice(1)}`]:
        (state as any)[`tem${loai.charAt(0).toUpperCase() + loai.slice(1)}`] +
        amount,
    })),
  capTemMoi: () => set({ temGao: 5, temThit: 0.5, temVai: 2 }),
  resetTem: () => get().capTemMoi(),

  // Hàng hóa
  hangTonKho: { gao: 10, thit: 5, vai: 3 },
  hangDangCho: [],
  themHangCho: (loai, soLuong) => {
    const { ngay } = get();
    set((s) => ({
      hangDangCho: [...s.hangDangCho, { loai, soLuong, ngayNhan: ngay + 2 }],
    }));
  },
  muaHang: (loai, soLuong) => {
    const { hangTonKho, temGao, temThit, temVai } = get();
    const temMap = { gao: temGao, thit: temThit, vai: temVai };

    if (!hangTonKho[loai] || hangTonKho[loai] < soLuong)
      return alert("🧃 Mặt hàng này đã hết. Vui lòng quay lại sau.");
    if (temMap[loai] < soLuong) return alert(`Không đủ tem ${loai}.`);

    // Trừ tem và hàng tồn
    set((s) => ({
      [`tem${loai.charAt(0).toUpperCase() + loai.slice(1)}`]:
        (s as any)[`tem${loai.charAt(0).toUpperCase() + loai.slice(1)}`] -
        soLuong,
      hangTonKho: { ...s.hangTonKho, [loai]: s.hangTonKho[loai] - soLuong },
    }));

    get().themHangCho(loai, soLuong);
  },
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

  // Thời gian
  ngay: 1,
  tuan: 1,
  thang: 1,
  nextDay: () => {
    const { ngay, tuan, thang, hangDangCho, capTemMoi, capNhatHangNgay } =
      get();
    const hangNhan = hangDangCho.filter((h) => h.ngayNhan === ngay);
    handleHangNhan(hangNhan, set, get);

    set((s) => ({
      hangDangCho: s.hangDangCho.filter((h) => h.ngayNhan > ngay),
    }));
    capNhatHangNgay();

    if (ngay < 7) {
      set({ ngay: ngay + 1 });
    } else if (tuan < 4) {
      set({ ngay: 1, tuan: tuan + 1 });
    } else {
      capTemMoi();
      get().resetHangMoiThang();
      set({ ngay: 1, tuan: 1, thang: thang + 1 });
    }

    if (Math.random() < 0.25) {
      const event =
        SU_KIEN_NGAU_NHIEN[
          Math.floor(Math.random() * SU_KIEN_NGAU_NHIEN.length)
        ];
      applyEventEffect(event, set, get);
    } else {
      set({ suKienHomNay: null });
    }
  },
  resetThoiGian: () => set({ ngay: 1, tuan: 1, thang: 1 }),

  // Trạng thái
  sucKhoe: 100,
  dinhDuong: 100,
  tinhThan: 80,
  capNhatHangNgay: () => {
    const { dinhDuong, tinhThan, sucKhoe } = get();
    const dinhDuongMoi = Math.max(0, dinhDuong - 5);
    const tinhThanMoi = Math.max(0, tinhThan - (Math.random() < 0.3 ? 2 : 0));

    let sucKhoeMoi = sucKhoe;
    if (dinhDuongMoi < 30) {
      sucKhoeMoi = Math.max(0, sucKhoe - 10);
    } else if (dinhDuongMoi > 60 && sucKhoe < 100) {
      sucKhoeMoi = Math.min(100, sucKhoe + 2);
    }

    set({
      dinhDuong: dinhDuongMoi,
      tinhThan: tinhThanMoi,
      sucKhoe: sucKhoeMoi,
    });

    if (sucKhoeMoi <= 0) {
      alert("💀 Bạn đã kiệt sức vì thiếu ăn. Trò chơi kết thúc.");
    }
  },

  // Sự kiện
  suKienHomNay: null,
  dongSuKien: () => set({ suKienHomNay: null }),

  // Nhật ký
  nhatKy: [],
  ghiSuKien: (tieuDe, moTa) => {
    const { ngay, tuan, thang } = get();
    set((s) => ({
      nhatKy: [...s.nhatKy, { ngay, tuan, thang, tieuDe, moTa }],
    }));
  },
}));
