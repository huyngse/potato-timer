import { formatDate } from "@/utils/date";
import { TBT_STYLE } from "../itemStyle";

const GROUP_ID = 5;

const getImageElement = (content: string, url: string) => {
    return `<div><img width="100" height="150" src="${url}">${content}</div>`
}

export const tbt = [
    {
        id: "tbt-1",
        content: getImageElement("Trần Phú<br/>(27/10/1930 - 19/4/1931)", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Tr%E1%BA%A7n_Ph%C3%BA.jpg/500px-Tr%E1%BA%A7n_Ph%C3%BA.jpg"),
        start: "1930-10-27",
        end: "1931-04-19",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-2",
        content: getImageElement("Lê Hồng Phong<br/>(26/3/1935 - 9/7/1936)", "https://upload.wikimedia.org/wikipedia/commons/1/16/Le_Hong_Phong.gif"),
        start: "1935-03-26",
        end: "1936-07-09",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-3",
        content: getImageElement("Hà Huy Tập<br/>(7/7/1936 - 3/1938)", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ha_Huy_Tap.jpg/500px-Ha_Huy_Tap.jpg"),
        start: "1936-07-07",
        end: "1938-03-31",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-4",
        content: getImageElement("Nguyễn Văn Cừ<br/>(30/3/1938 - 9/11/1940)", "https://upload.wikimedia.org/wikipedia/commons/0/0b/Nguy%E1%BB%85n_V%C4%83n_C%E1%BB%AB.jpg"),
        start: "1938-03-30",
        end: "1940-11-09",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-5",
        content: getImageElement("Trường Chinh<br/>(9/11/1940 - 26/10/1956)", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TruongChinh1955.jpg/500px-TruongChinh1955.jpg"),
        start: "1940-11-09",
        end: "1956-10-26",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-6",
        content: getImageElement("Hồ Chí Minh<br/>(26/10/1956 - 10/9/1960)<br/>(Chủ tịch Đảng)", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg/500px-Ho_Chi_Minh_-_1946_Portrait.jpg"),
        start: "1956-10-26",
        end: "1960-09-10",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-7",
        content: getImageElement("Lê Duẩn<br/>(10/9/1960 - 10/7/1986)", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Le_duan.png/500px-Le_duan.png"),
        start: "1960-09-10",
        end: "1986-07-10",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-8",
        content: getImageElement("Trường Chinh<br/>(14/7/1986 - 18/12/1986)", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TruongChinh1955.jpg/500px-TruongChinh1955.jpg"),
        start: "1986-07-14",
        end: "1986-12-18",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-9",
        content: getImageElement("Nguyễn Văn Linh<br/>(18/12/1986 - 28/6/1991)", "https://upload.wikimedia.org/wikipedia/vi/4/45/Nguy%E1%BB%85n_V%C4%83n_Linh.jpg"),
        start: "1986-12-18",
        end: "1991-06-28",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-10",
        content: getImageElement("Đỗ Mười<br/>(28/6/1991 - 26/12/1997)", "https://upload.wikimedia.org/wikipedia/vi/4/44/Do_Muoi_19950412.jpg"),
        start: "1991-06-28",
        end: "1997-12-26",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-11",
        content: getImageElement("Lê Khả Phiêu<br/>(26/12/1997 - 22/4/2001)", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Lekhaphieu2011.jpg/500px-Lekhaphieu2011.jpg"),
        start: "1997-12-26",
        end: "2001-04-22",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-12",
        content: getImageElement("Nông Đức Mạnh<br/>(22/4/2001 - 19/1/2011)", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nong_Duc_Manh_2010.jpg/500px-Nong_Duc_Manh_2010.jpg"),
        start: "2001-04-22",
        end: "2011-01-19",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-13",
        content: getImageElement("Nguyễn Phú Trọng<br/>(19/1/2011 - 19/7/2024)", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nguyen_Phu_Trong_HN2023.jpg/500px-Nguyen_Phu_Trong_HN2023.jpg"),
        start: "2011-01-19",
        end: "2024-07-19",
        style: TBT_STYLE,
        group: GROUP_ID,
    },
    {
        id: "tbt-14",
        content: getImageElement("Tô Lâm<br/>(3/8/2024 - nay)", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/T%C3%B4_L%C3%A2m_in_Hanoi_-_2024_%28P064238-935063%29.jpg/500px-T%C3%B4_L%C3%A2m_in_Hanoi_-_2024_%28P064238-935063%29.jpg"),
        start: "2024-08-03",
        end: formatDate(new Date()),
        style: TBT_STYLE,
        group: GROUP_ID,
    },
]