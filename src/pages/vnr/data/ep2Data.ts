// Kháng chiến chống Pháp (1945-1954)

import { IMP_STYLE } from "../itemStyle";
import { getImageElement } from "../utils";

const GROUP_ID = 4;

export const ep2 = [
    {
        id: "ep2-1",
        content: getImageElement("Cách mạng Tháng Tám thành công<br>(19/8/1945)", "https://statics.vinpearl.com/quang-truong-cach-mang-thang-tam-3_1681024730.jpg"),
        start: "1945-08-10",
        style: "background: yellow;",
        className: "font-bold",
        group: GROUP_ID,
    },
    {
        id: "ep2-2",
        content: getImageElement("Nước Việt Nam Dân chủ Cộng hòa ra đời<br>(2/9/1945)", "https://noichinh.vn/dataimages/202208/original/images723848_BNCTW.jpg"),
        start: "1945-09-02",
        style: "background: yellow;",
        className: "font-bold",
        group: GROUP_ID,
    },
    {
        id: "ep2-3",
        content: "Toàn quốc kháng chiến chống Pháp bùng nổ<br>(19/12/1946)",
        start: "1946-12-19",
        group: GROUP_ID,
    },
    {
        id: "ep2-4",
        content:
            'Chiến dịch Việt Bắc thu - đông thắng lợi,<br> phá tan kế hoạch "đánh nhanh, thắng nhanh" của Pháp<br>(Thu - Đông 1947)',
        start: "1947-10-01",
        group: GROUP_ID,
    },
    {
        id: "ep2-5",
        content:
            "Phát động phong trào thi đua ái quốc<br> theo lời kêu gọi của Chủ tịch Hồ Chí Minh<br>(11/6/1948)",
        start: "1948-06-11",
        group: GROUP_ID,
    },
    {
        id: "ep2-6",
        content:
            getImageElement("Thành lập Quân đội nhân dân Việt Nam,<br> phong Đại tướng cho Võ Nguyên Giáp<br>(1948)", "https://eahleo.daklak.gov.vn/uploads/eahleo/tin-tuc/nam-2022/thang12/ngay19/lich%20su%20va%20y%20nghia%20ngay%20thanh%20lap%20quan%20doi%20nhan%20dan%20Viet%20Nam.png"),
        start: "1948-01-01",
        group: GROUP_ID,
    },
    {
        id: "ep2-7",
        content:
            "Chiến dịch Biên giới Thu - Đông giành thắng lợi lớn,<br> khai thông biên giới Việt - Trung<br>(1950)",
        start: "1950-09-01",
        group: GROUP_ID,
    },
    {
        id: "ep2-8",
        content:
            "Chiến dịch Trung du, Đường số 18, Hà Nam Ninh...<br> liên tiếp giành thắng lợi<br>(1951-1952)",
        start: "1951-01-01",
        group: GROUP_ID,
    },
    {
        id: "ep2-9",
        content:
            "Chiến dịch Tây Bắc và Thượng Lào<br> làm tan rã nhiều vị trí địch<br>(1952)",
        start: "1952-01-01",
        group: GROUP_ID,
    },
    {
        id: "ep2-10",
        content:
            getImageElement("Chiến dịch Điện Biên Phủ toàn thắng,<br> kết thúc kháng chiến chống Pháp<br>(7/5/1954)", "http://nguoikesu.com/images/wiki/chien-dich-dien-bien-phu/f3425a16b729011017e470b500257bd7.jpg"),
        start: "1954-05-07",
        style: IMP_STYLE,
        group: GROUP_ID,
    },
];