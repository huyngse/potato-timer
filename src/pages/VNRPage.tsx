import { TimelineWrapper } from "@/components/TimeLine";
import { formatDate } from "@/utils/date";
import { DataSet } from "vis-timeline/standalone";
const TBT_STYLE = "font-weight: bold;background:orange;";
const VNRPage = () => {
  const ep1 = [
    {
      id: "1",
      content: "Thời kỳ Pháp đô hộ (1858-1945)",
      start: "1858-09-01",
      end: "1945-08-19",
      style: "background: blue;color: white;",
      className: "font-bold",
      group: 1,
    },
    {
      id: "1-1",
      content:
        "Liên quân Pháp - Tây Ban Nha nổ súng vào thành Đà Nẵng<br/>(9/1/1585)",
      start: "1858-09-01",
      style: "background: yellow;",
      className: "font-bold",
      group: 2,
    },
    {
      id: "1-2",
      content:
        "Thực dân Pháp hoàn thành xâm lược Việt Nam, chia nước ta thành ba kỳ<br/>(1884)",
      start: "1884-01-01",
      group: 4,
    },
    {
      id: "1-3",
      content: "Nguyễn Ái Quốc ra đi tìm đường cứu nước<br/>(5/6/1911)",
      start: "1911-06-05",
      group: 4,
    },
    {
      id: "1-4",
      content:
        "Nguyễn Ái Quốc tham gia sáng lập Đảng Cộng sản Pháp<br/>(12/1920)",
      start: "1920-12-01",
      group: 4,
    },
    {
      id: "1-5",
      content:
        "Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên<br/>(6/1925)",
      start: "1925-06-01",
      group: 4,
    },
    {
      id: "1-6",
      content: "Đảng Cộng sản Việt Nam được thành lập<br/>(3/2/1930)",
      start: "1930-02-03",
      group: 4,
    },
    {
      id: "1-7",
      content: "Phong trào Xô viết Nghệ - Tĩnh bùng nổ<br/>(1930–1931)",
      start: "1930-09-01",
      group: 4,
    },
    {
      id: "1-8",
      content: "Phong trào dân chủ 1936-1939 được Đảng lãnh đạo<br/>(1936)",
      start: "1936-01-01",
      group: 4,
    },
    {
      id: "1-9",
      content:
        "Hội nghị Trung ương 8 do Nguyễn Ái Quốc chủ trì, xác định nhiệm vụ giải phóng dân tộc<br/>(5/1941)",
      start: "1941-05-01",
      group: 4,
    },
    {
      id: "1-10",
      content: "Mặt trận Việt Minh được thành lập<br/>(19/5/1941)",
      start: "1941-05-19",
      group: 4,
    },
    {
      id: "1-11",
      content: "Nhật đảo chính Pháp ở Đông Dương<br/>(9/3/1945)",
      start: "1945-03-09",
      group: 4,
    },
    {
      id: "1-12",
      content: "Đại hội I (1935 - Ma Cao, Trung Quốc)",
      start: "1935-03-27",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
  ];
  const ep2 = [
    {
      id: "2",
      content: "Kháng chiến chống Pháp (1945-1954)",
      start: "1945-08-19",
      end: "1954-07-20",
      style: "background: blue;color: white;",
      className: "font-bold",
      group: 1,
    },
    {
      id: "2-1",
      content: "Cách mạng Tháng Tám thành công<br/>(19/8/1945)",
      start: "1945-08-10",
      style: "background: yellow;",
      className: "font-bold",
      group: 2,
    },
    {
      id: "2-2",
      content: "Nước Việt Nam Dân chủ Cộng hòa ra đời<br/>(2/9/1945)",
      start: "1945-09-02",
      style: "background: yellow;",
      className: "font-bold",
      group: 4,
    },
    {
      id: "2-3",
      content: "Toàn quốc kháng chiến chống Pháp bùng nổ<br/>(19/12/1946)",
      start: "1946-12-19",
      group: 4,
    },
    {
      id: "2-4",
      content:
        'Chiến dịch Việt Bắc thu - đông thắng lợi, phá tan kế hoạch "đánh nhanh, thắng nhanh" của Pháp<br/>(Thu - Đông 1947)',
      start: "1947-10-01",
      group: 4,
    },
    {
      id: "2-5",
      content:
        "Phát động phong trào thi đua ái quốc theo lời kêu gọi của Chủ tịch Hồ Chí Minh<br/>(11/6/1948)",
      start: "1948-06-11",
      group: 4,
    },
    {
      id: "2-6",
      content:
        "Thành lập Quân đội nhân dân Việt Nam, phong Đại tướng cho Võ Nguyên Giáp<br/>(1948)",
      start: "1948-01-01",
      group: 4,
    },
    {
      id: "2-7",
      content:
        "Chiến dịch Biên giới Thu – Đông giành thắng lợi lớn, khai thông biên giới Việt - Trung<br/>(1950)",
      start: "1950-09-01",
      group: 4,
    },
    {
      id: "2-8",
      content:
        "Chiến dịch Trung du, Đường số 18, Hà Nam Ninh... liên tiếp giành thắng lợi<br/>(1951-1952)",
      start: "1951-01-01",
      group: 4,
    },
    {
      id: "2-9",
      content:
        "Chiến dịch Tây Bắc và Thượng Lào làm tan rã nhiều vị trí địch<br/>(1952)",
      start: "1952-01-01",
      group: 4,
    },
    {
      id: "2-10",
      content:
        "Chiến dịch Điện Biên Phủ toàn thắng, kết thúc kháng chiến chống Pháp<br/>(7/5/1954)",
      start: "1954-05-07",
      group: 4,
    },
    {
      id: "2-12",
      content: "Đại hội II (1951 - Tuyên Quang)",
      start: "1951-02-11",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
  ];
  const ep3 = [
    {
      id: "3",
      content: "Kháng chiến chống Mỹ (1954-1975)",
      start: "1954-07-20",
      end: "1975-04-30",
      style: "background: blue;color: white;",
      className: "font-bold",
      group: 1,
    },
    {
      id: "3-1",
      content:
        "Hiệp định Genève được ký kết, tạm thời chia cắt đất nước tại vĩ tuyến 17<br/>(21/7/1954)",
      start: "1954-07-21",
      className: "font-bold",
      style: "background: yellow;",
      group: 2,
    },
    {
      id: "3-2",
      content:
        "Mỹ - Diệm phá hoại Hiệp định Genève, không tổ chức tổng tuyển cử thống nhất đất nước<br/>(1956)",
      start: "1956-01-01",
      group: 4,
    },
    {
      id: "3-3",
      content:
        "Phong trào 'Đồng khởi' bùng nổ ở Bến Tre, lan rộng toàn miền Nam<br/>(1/1960)",
      start: "1960-01-01",
      group: 4,
    },
    {
      id: "3-4",
      content:
        "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập<br/>(20/12/1960)",
      start: "1960-12-20",
      group: 4,
    },
    {
      id: "3-6",
      content:
        "Mỹ bắt đầu đưa quân viễn chinh và quân đội chư hầu vào miền Nam Việt Nam<br/>(1965)",
      start: "1965-01-01",
      group: 4,
    },
    {
      id: "3-7",
      content:
        "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân làm rung chuyển chính trường Mỹ<br/>(1/1968)",
      start: "1968-01-30",
      group: 4,
    },
    {
      id: "3-8",
      content:
        "Hiệp định Paris được ký kết, Mỹ rút quân khỏi Việt Nam<br/>(27/1/1973)",
      start: "1973-01-27",
      group: 4,
    },
    {
      id: "3-9",
      content:
        "Chiến dịch Hồ Chí Minh toàn thắng, giải phóng hoàn toàn miền Nam<br/>(30/4/1975)",
      start: "1975-04-30",
      group: 2,
      style: "background: yellow;",
      className: "font-bold",
    },

    {
      id: "3-10",
      content: "Đại hội III (1960 - Hà Nội)",
      start: "1960-09-05",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
  ];
  const ep4 = [
    {
      id: "4",
      content: "Thời kỳ hậu chiến và bao cấp (1975-1986)",
      start: "1975-04-30",
      end: "1986-12-18",
      style: "background: blue;color: white;",
      className: "font-bold",
      group: 1,
    },
    {
      id: "4-2",
      content:
        "Hội nghị hiệp thương chính trị Bắc – Nam thống nhất đất nước về mặt nhà nước<br/>(11/1975)",
      start: "1975-11-15",
      group: 4,
    },
    {
      id: "4-3",
      content:
        "Tổ chức Tổng tuyển cử bầu Quốc hội chung cho cả nước<br/>(25/4/1976)",
      start: "1976-04-25",
      group: 4,
    },
    {
      id: "4-4",
      content:
        "Thực hiện thống nhất đất nước về mặt nhà nước: thành lập nước Cộng hòa Xã hội Chủ nghĩa Việt Nam<br/>(2/7/1976)",
      start: "1976-07-02",
      group: 4,
    },
    {
      id: "4-5",
      content:
        "Quân tình nguyện Việt Nam giúp Campuchia lật đổ chế độ diệt chủng Pol Pot<br/>(1/1979)",
      start: "1979-01-07",
      group: 4,
    },
    {
      id: "4-6",
      content:
        "Chiến tranh biên giới phía Bắc, quân Trung Quốc xâm lược Việt Nam<br/>(17/2/1979)",
      start: "1979-02-17",
      group: 4,
    },
    {
      id: "4-7",
      content:
        "Bắt đầu các hiện tượng 'xé rào', 'khoán chui' trong cải cách nông nghiệp ở miền Bắc<br/>(cuối năm 1979)",
      start: "1979-12-01",
      group: 4,
    },
    {
      id: "4-8",
      content:
        "Khủng hoảng kinh tế – xã hội, lạm phát tăng nhanh, đời sống nhân dân khó khăn nghiêm trọng<br/>(1980–1986)",
      start: "1980-01-01",
      group: 4,
    },
    {
      id: "4-9",
      content: "Tổng Bí thư Lê Duẩn qua đời<br/>(10/7/1986)",
      start: "1986-07-10",
      group: 4,
    },
    {
      id: "4-10",
      content:
        "Đồng chí Trường Chinh được bầu làm Tổng Bí thư, chuẩn bị Đại hội VI<br/>(14/7/1986)",
      start: "1986-07-14",
      group: 4,
    },
    {
      id: "4-11",
      content: "Đại hội IV (1976 - Hà Nội)",
      start: "1976-12-14",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "4-12",
      content: "Đại hội V (1982 - Hà Nội)",
      start: "1982-03-27",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
  ];
  const ep5 = [
    {
      id: "5",
      content: "Thời kỳ đổi mới và hội nhập (1986 - nay)",
      start: "1986-12-18",
      end: formatDate(new Date()),
      style: "background: blue;color: white;",
      className: "font-bold",
      group: 1,
    },
    {
      id: "5-1",
      content:
        "Đổi mới toàn diện đất nước bắt đầu từ sau Đại hội VI<br/>(12/1986)",
      start: "1986-12-01",
      group: 4,
    },
    {
      id: "5-2",
      content: "Việt Nam bình thường hóa quan hệ với Trung Quốc<br/>(11/1991)",
      start: "1991-11-01",
      group: 4,
    },
    {
      id: "5-3",
      content:
        "Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội<br/>(1991)",
      start: "1991-06-27",
      group: 4,
    },
    {
      id: "5-4",
      content:
        "Mỹ chính thức bỏ cấm vận kinh tế đối với Việt Nam<br/>(3/2/1994)",
      start: "1994-02-03",
      group: 4,
    },
    {
      id: "5-5",
      content: "Việt Nam gia nhập ASEAN<br/>(28/7/1995)",
      start: "1995-07-28",
      group: 4,
    },
    {
      id: "5-6",
      content:
        "Việt Nam và Hoa Kỳ bình thường hóa quan hệ ngoại giao<br/>(11/7/1995)",
      start: "1995-07-11",
      group: 4,
    },
    {
      id: "5-7",
      content:
        "Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO)<br/>(11/1/2007)",
      start: "2007-01-11",
      group: 4,
    },
    {
      id: "5-8",
      content:
        "Hoàn thành phân giới cắm mốc biên giới trên đất liền Việt Nam - Trung Quốc<br/>(31/12/2008)",
      start: "2008-12-31",
      group: 4,
    },
    {
      id: "5-9",
      content: "Việt Nam tổ chức thành công Năm APEC lần thứ hai<br/>(2017)",
      start: "2017-11-01",
      group: 4,
    },
    {
      id: "5-10",
      content:
        "Việt Nam ứng phó với đại dịch COVID-19, triển khai chiến dịch tiêm chủng lớn nhất lịch sử<br/>(2020–2022)",
      start: "2020-03-01",
      group: 4,
    },
    {
      id: "5-11",
      content:
        "Việt Nam ký kết Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)<br/>(15/11/2020)",
      start: "2020-11-15",
      group: 4,
    },
    {
      id: "5-12",
      content:
        "Việt Nam trúng cử vào Hội đồng Nhân quyền Liên Hợp Quốc nhiệm kỳ 2023–2025<br/>(11/10/2022)",
      start: "2022-10-11",
      group: 4,
    },
    {
      id: "5-13",
      content: "Đại hội VI (1986 - Hà Nội)",
      start: "1986-12-15",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "5-14",
      content: "Đại hội VII (1991 - Hà Nội)",
      start: "1991-06-24",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "5-15",
      content: "Đại hội VIII (1996 - Hà Nội)",
      start: "1996-06-28",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "5-16",
      content: "Đại hội IX (2001 - Hà Nội)",
      start: "2001-04-19",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "5-17",
      content: "Đại hội X (2006 - Hà Nội)",
      start: "2006-04-18",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "5-18",
      content: "Đại hội XI (2011 - Hà Nội)",
      start: "2011-01-12",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "5-19",
      content: "Đại hội XII (2016 - Hà Nội)",
      start: "2016-01-20",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
    {
      id: "5-20",
      content: "Đại hội XIII (2021 – Hà Nội)",
      start: "2021-01-25",
      style: "background: red;color: yellow",
      className: "font-bold",
      group: 3,
    },
  ];
  const tbt = [
    {
      id: "tbt-1",
      content: "Trần Phú<br/>(27/10/1930 - 19/4/1931)",
      start: "1930-10-27",
      end: "1931-04-19",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-2",
      content: "Lê Hồng Phong<br/>(26/3/1935 - 9/7/1936)",
      start: "1935-03-26",
      end: "1936-07-09",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-3",
      content: "Hà Huy Tập<br/>(7/7/1936 - 3/1938)",
      start: "1936-07-07",
      end: "1938-03-31",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-4",
      content: "Nguyễn Văn Cừ<br/>(30/3/1938 - 9/11/1940)",
      start: "1938-03-30",
      end: "1940-11-09",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-5",
      content: "Trường Chinh<br/>(9/11/1940 - 26/10/1956)",
      start: "1940-11-09",
      end: "1956-10-26",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-6",
      content: "Hồ Chí Minh<br/>(26/10/1956 - 10/9/1960)<br/>(Chủ tịch Đảng)",
      start: "1956-10-26",
      end: "1960-09-10",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-7",
      content: "Lê Duẩn<br/>(10/9/1960 - 10/7/1986)",
      start: "1960-09-10",
      end: "1986-07-10",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-8",
      content: "Trường Chinh<br/>(14/7/1986 - 18/12/1986)",
      start: "1986-07-14",
      end: "1986-12-18",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-9",
      content: "Nguyễn Văn Linh<br/>(18/12/1986 - 28/6/1991)",
      start: "1986-12-18",
      end: "1991-06-28",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-10",
      content: "Đỗ Mười<br/>(28/6/1991 - 26/12/1997)",
      start: "1991-06-28",
      end: "1997-12-26",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-11",
      content: "Lê Khả Phiêu<br/>(26/12/1997 - 22/4/2001)",
      start: "1997-12-26",
      end: "2001-04-22",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-12",
      content: "Nông Đức Mạnh<br/>(22/4/2001 - 19/1/2011)",
      start: "2001-04-22",
      end: "2011-01-19",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-13",
      content: "Nguyễn Phú Trọng<br/>(19/1/2011 - 19/7/2024)",
      start: "2011-01-19",
      end: "2024-07-19",
      style: TBT_STYLE,
      group: 5,
    },
    {
      id: "tbt-14",
      content: "Tô Lâm<br/>(3/8/2024 - nay)",
      start: "2024-08-03",
      end: formatDate(new Date()),
      style: TBT_STYLE,
      group: 5,
    },
  ];

  const items = new DataSet([...ep1, ...ep2, ...ep3, ...ep4, ...ep5, ...tbt]);

  const groups = new DataSet([
    {
      id: 1,
      content: "Giai đoạn",
    },
    {
      id: 2,
      content: "Sự kiện then chốt",
    },
    {
      id: 5,
      content: "Tổng bí thư",
    },
    {
      id: 3,
      content: "Đại hội đại biểu toàn quốc",
    },
    {
      id: 4,
      content: "Sự kiện tiêu biểu",
    },
  ]);
  return (
    <div className="py-10">
      <TimelineWrapper
        items={items}
        groups={groups}
        onSelect={(e) => {
          console.log(e);
        }}
        options={{
          start: "2024-01-01",
          end: "2025-01-01",
        }}
      />
    </div>
  );
};

export default VNRPage;
