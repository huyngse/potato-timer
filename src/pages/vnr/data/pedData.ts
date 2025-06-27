import { formatDate } from "@/utils/date";

export const ped = [
    {
        id: "ped-1",
        content: "Thời kỳ Pháp đô hộ (1858-1945)",
        start: "1858-09-01",
        end: "1945-08-19",
        style: "background: #7f1d1d;color:white;font-weight:bold;",
        type: "background",
    },
    {
        id: "ped-2",
        content: "Kháng chiến chống Pháp (1945-1954)",
        start: "1945-08-19",
        end: "1954-07-20",
        style: "background: #c2410c;color:white;font-weight:bold;",
        type: "background",
    },
    {
        id: "ped-3",
        content: "Kháng chiến chống Mỹ (1954-1975)",
        start: "1954-07-20",
        end: "1975-04-30",
        style: "background: #a21caf;color:white;font-weight:bold;",
        type: "background",
    },
    {
        id: "ped-4",
        content: "Thời kỳ hậu chiến và bao cấp (1975-1986)",
        start: "1975-04-30",
        end: "1986-12-18",
        style: "background: #a78bfa;color:white;font-weight:bold;",
        type: "background",
    },
    {
        id: "ped-5",
        content: "Thời kỳ đổi mới và hội nhập (1986 - nay)",
        start: "1986-12-18",
        end: formatDate(new Date()),
        style: "background: #60a5fa;color:white;font-weight:bold;",
        type: "background",
    },
]