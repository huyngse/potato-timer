// ====== Types ======
export
    interface SuKien {
    id: string;
    tieuDe: string;
    moTa: string;
    tacDong: {
        loai: "giam_tem" | "tang_tem" | "thong_bao";
        tem?: "gao" | "vai";
        soLuong?: number;
    };
}

export interface HangCho {
    loai: string;
    soLuong: number;
    ngayNhan: number;
}

export interface NhatKy {
    thang: number;
    tuan: number;
    ngay: number;
    tieuDe: string;
    moTa: string;
}

export interface GameState {
    // Tem phiếu
    temGao: number;
    temThit: number;
    temVai: number;
    updateTem: (loai: "gao" | "thit" | "vai", amount: number) => void;
    capTemMoi: () => void;
    resetTem: () => void;

    // Mua hàng
    hangTonKho: Record<string, number>;
    hangDangCho: HangCho[];
    muaHang: (loai: "gao" | "thit" | "vai", soLuong: number) => void;
    themHangCho: (loai: string, soLuong: number) => void;
    resetHangMoiThang: () => void;

    // Thời gian
    ngay: number;
    tuan: number;
    thang: number;
    nextDay: () => void;
    resetThoiGian: () => void;

    // Trạng thái
    sucKhoe: number;
    dinhDuong: number;
    tinhThan: number;
    capNhatHangNgay: () => void;

    // Sự kiện
    suKienHomNay: SuKien | null;
    dongSuKien: () => void;

    // Nhật ký
    nhatKy: NhatKy[];
    ghiSuKien: (tieuDe: string, moTa: string) => void;
}
