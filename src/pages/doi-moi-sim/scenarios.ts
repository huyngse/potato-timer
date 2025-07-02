import { Scenario } from "./types";

export const scenarios: Scenario[] = [
    {
        id: 1,
        title: "Lương Thực Khó Khăn",
        description: "Thưa đồng chí, dân làng tôi không còn đủ gạo ăn. Nếu không cho phép tự do mua bán, chúng tôi e là sẽ đói.",
        choices: [
            {
                text: "Cho phép nông dân tự bán phần lúa dư ngoài kế hoạch nhà nước.",
                effects: { economy: 10, publicSupport: 15, international: 5 },
            },
            {
                text: "Giữ nguyên cơ chế phân phối tập trung, tăng giám sát thu hoạch.",
                effects: { economy: -5, publicSupport: -15, international: 0 },
            },
            {
                text: "Thử nghiệm mô hình khoán sản phẩm tại một vài hợp tác xã.",
                effects: { economy: 5, publicSupport: 5, international: 2 },
            },
        ],
    },
    {
        id: 2,
        title: "Doanh Nghiệp Nhà Nước Thua Lỗ",
        description: "Báo cáo đồng chí, một số xí nghiệp nhà nước đang làm ăn thua lỗ trầm trọng. Có nên để tư nhân vào không ạ?",
        choices: [
            {
                text: "Cho phép liên doanh tư nhân với doanh nghiệp nhà nước.",
                effects: { economy: 12, publicSupport: 8, international: 10 },
            },
            {
                text: "Tiếp tục bao cấp, giữ vững vai trò chủ đạo của nhà nước.",
                effects: { economy: -10, publicSupport: -5, international: -5 },
            },
            {
                text: "Tạm thời đóng cửa xí nghiệp yếu kém, tái cơ cấu dần.",
                effects: { economy: 3, publicSupport: -10, international: 2 },
            },
        ],
    },
    {
        id: 3,
        title: "Kiều Hối và Ngoại Tệ",
        description: "Thưa đồng chí, nhiều Việt kiều muốn gửi tiền về giúp người thân, nhưng luật pháp hiện tại cấm nhận ngoại tệ.",
        choices: [
            {
                text: "Cho phép nhận kiều hối nhưng phải qua ngân hàng quốc doanh.",
                effects: { economy: 10, publicSupport: 5, international: 8 },
            },
            {
                text: "Cấm hoàn toàn để kiểm soát dòng tiền và tránh ảnh hưởng xấu.",
                effects: { economy: -8, publicSupport: -10, international: -10 },
            },
            {
                text: "Cho phép tự do nhận ngoại tệ, miễn khai báo.",
                effects: { economy: 15, publicSupport: 10, international: -5 },
            },
        ],
    },
    {
        id: 4,
        title: "Tranh Luận về Tư Hữu",
        description: "Một số trí thức đề nghị hợp pháp hóa sở hữu tư nhân về đất và nhà. Dân chúng thì lo bị lấy mất ruộng.",
        choices: [
            {
                text: "Thí điểm sở hữu tư nhân trong khu vực thành thị.",
                effects: { economy: 7, publicSupport: -3, international: 5 },
            },
            {
                text: "Giữ nguyên đất đai thuộc sở hữu toàn dân, không thay đổi.",
                effects: { economy: -5, publicSupport: 2, international: -5 },
            },
            {
                text: "Hợp pháp hóa sở hữu tư nhân trên toàn quốc.",
                effects: { economy: 15, publicSupport: -10, international: 10 },
            },
        ],
    },
    {
        id: 5,
        title: "Vấn Đề Đầu Tư Nước Ngoài",
        description: "Đồng chí, một công ty Nhật Bản muốn xây nhà máy ở miền Trung. Họ đề nghị miễn thuế trong 10 năm.",
        choices: [
            {
                text: "Chấp thuận đề xuất để thu hút đầu tư và tạo việc làm.",
                effects: { economy: 12, publicSupport: 6, international: 15 },
            },
            {
                text: "Từ chối vì lo ngại mất chủ quyền kinh tế.",
                effects: { economy: -10, publicSupport: 4, international: -8 },
            },
            {
                text: "Chỉ miễn thuế 5 năm và yêu cầu tuyển dụng lao động trong nước.",
                effects: { economy: 8, publicSupport: 3, international: 10 },
            },
        ],
    },
    {
        id: 6,
        title: "Thiếu Giáo Viên Ở Vùng Sâu",
        description: "Thưa đồng chí, trường ở huyện chúng tôi không đủ giáo viên. Người giỏi đều bỏ về thành phố vì lương thấp quá.",
        choices: [
            {
                text: "Tăng lương và trợ cấp cho giáo viên vùng sâu vùng xa.",
                effects: { economy: -5, publicSupport: 12, international: 2 },
            },
            {
                text: "Cử sinh viên tốt nghiệp nghĩa vụ đến dạy 2 năm.",
                effects: { economy: 3, publicSupport: 5, international: 0 },
            },
            {
                text: "Hợp nhất lớp học, giảm bớt sĩ số để đủ giáo viên.",
                effects: { economy: 5, publicSupport: -8, international: 1 },
            },
        ],
    },
    {
        id: 7,
        title: "Cải Cách Chương Trình",
        description: "Đồng chí, nhiều phụ huynh phàn nàn rằng chương trình học quá nặng, học sinh học không hiểu chỉ học thuộc lòng.",
        choices: [
            {
                text: "Cải cách giáo trình, giảm tải lý thuyết, tăng thực hành.",
                effects: { economy: -3, publicSupport: 10, international: 4 },
            },
            {
                text: "Giữ nguyên chương trình, chỉ yêu cầu giáo viên đổi cách giảng.",
                effects: { economy: 2, publicSupport: -5, international: 0 },
            },
            {
                text: "Áp dụng mô hình giáo dục của nước ngoài tại các trường thử nghiệm.",
                effects: { economy: -5, publicSupport: 3, international: 10 },
            },
        ],
    },
    {
        id: 8,
        title: "Tư Nhân Hóa Giáo Dục",
        description: "Thưa đồng chí, nhiều người có điều kiện muốn mở trường tư để con cái họ học tốt hơn. Có nên cho phép không ạ?",
        choices: [
            {
                text: "Cho phép mở trường tư, nhưng phải tuân thủ khung chương trình quốc gia.",
                effects: { economy: 10, publicSupport: 5, international: 7 },
            },
            {
                text: "Cấm trường tư, chỉ duy trì hệ thống công lập để bảo đảm công bằng.",
                effects: { economy: -8, publicSupport: 2, international: -3 },
            },
            {
                text: "Cho mở tự do, trường tư được quyền quyết định nội dung dạy học.",
                effects: { economy: 15, publicSupport: -7, international: 10 },
            },
        ],
    },
    {
        id: 9,
        title: "Giảng Dạy Ngoại Ngữ",
        description: "Đồng chí, nhiều học sinh muốn học tiếng Anh để tìm cơ hội tốt hơn. Tuy nhiên, chương trình hiện tại không chú trọng.",
        choices: [
            {
                text: "Đưa tiếng Anh vào chương trình chính thức từ cấp tiểu học.",
                effects: { economy: 3, publicSupport: 8, international: 10 },
            },
            {
                text: "Chỉ dạy ngoại ngữ ở thành phố lớn do thiếu giáo viên.",
                effects: { economy: 2, publicSupport: -4, international: 5 },
            },
            {
                text: "Tập trung dạy tiếng Nga để giữ mối quan hệ truyền thống.",
                effects: { economy: -3, publicSupport: -5, international: -10 },
            },
        ],
    },
    {
        id: 10,
        title: "Du Học và Chảy Máu Chất Xám",
        description: "Đồng chí, có người con tôi đi du học ở Pháp rồi không chịu về. Nhiều người cũng đang xin học bổng nước ngoài.",
        choices: [
            {
                text: "Tạo điều kiện cho du học nhưng ràng buộc thời gian làm việc trong nước.",
                effects: { economy: 8, publicSupport: 5, international: 6 },
            },
            {
                text: "Cấm du học tự túc, chỉ cho đi theo đoàn nhà nước.",
                effects: { economy: -5, publicSupport: -10, international: -7 },
            },
            {
                text: "Cho phép tự do du học, nhưng thu hút người giỏi bằng chính sách đãi ngộ khi trở về.",
                effects: { economy: 10, publicSupport: 8, international: 10 },
            },
        ],
    },
    {
        id: 11,
        title: "Nhà Báo Phản Biện",
        description: "Đồng chí ơi, có một nhà báo trẻ viết bài chỉ trích chính sách cải cách. Dân thì khen là dũng cảm, nhưng cán bộ cấp dưới đang bức xúc.",
        choices: [
            {
                text: "Kỷ luật nhà báo để giữ kỷ cương trong hệ thống.",
                effects: { economy: 0, publicSupport: -10, international: -12 },
            },
            {
                text: "Cho phép báo chí phản biện trong khuôn khổ pháp luật.",
                effects: { economy: 3, publicSupport: 8, international: 10 },
            },
            {
                text: "Im lặng và theo dõi phản ứng dư luận, không hành động ngay.",
                effects: { economy: 0, publicSupport: 3, international: 0 },
            },
        ],
    },
    {
        id: 12,
        title: "Báo Tư Nhân Đầu Tiên?",
        description: "Thưa đồng chí, có nhóm trí thức xin mở một tờ báo tư nhân chuyên về kinh tế thị trường. Họ nói sẽ không bàn chuyện chính trị.",
        choices: [
            {
                text: "Từ chối, chỉ cho phép báo chí thuộc cơ quan nhà nước.",
                effects: { economy: -5, publicSupport: -8, international: -6 },
            },
            {
                text: "Chấp thuận với điều kiện bị kiểm duyệt nội dung chặt chẽ.",
                effects: { economy: 4, publicSupport: 5, international: 6 },
            },
            {
                text: "Cho phép hoạt động tự do, miễn không vi phạm pháp luật.",
                effects: { economy: 8, publicSupport: 10, international: 12 },
            },
        ],
    },
    {
        id: 13,
        title: "Phóng Viên Nước Ngoài",
        description: "Một tờ báo Pháp xin cử phóng viên đến viết về Đổi Mới. Một số lo ngại họ sẽ 'bóp méo' hình ảnh đất nước.",
        choices: [
            {
                text: "Từ chối để tránh rủi ro về thông tin sai lệch.",
                effects: { economy: -3, publicSupport: 0, international: -10 },
            },
            {
                text: "Chấp thuận nhưng phải đi cùng cán bộ giám sát.",
                effects: { economy: 2, publicSupport: 1, international: 6 },
            },
            {
                text: "Hoan nghênh họ để thể hiện sự cởi mở của đất nước.",
                effects: { economy: 5, publicSupport: 3, international: 12 },
            },
        ],
    },
    {
        id: 14,
        title: "Báo Viết Về Tham Nhũng",
        description: "Một bài báo vừa đăng thông tin về tham nhũng ở một công ty quốc doanh. Dân hoan nghênh nhưng một số lãnh đạo địa phương nổi giận.",
        choices: [
            {
                text: "Ra lệnh gỡ bài để giữ ổn định nội bộ.",
                effects: { economy: -2, publicSupport: -10, international: -8 },
            },
            {
                text: "Ủng hộ điều tra, coi báo chí là công cụ chống tham nhũng.",
                effects: { economy: 6, publicSupport: 12, international: 8 },
            },
            {
                text: "Trung lập, yêu cầu điều tra nội bộ rồi mới công bố.",
                effects: { economy: 2, publicSupport: 4, international: 2 },
            },
        ],
    },
    {
        id: 15,
        title: "Kiểm Duyệt Gắt Gao",
        description: "Báo chí phàn nàn rằng việc kiểm duyệt quá chặt khiến họ không thể phản ánh đúng thực tế xã hội, nhất là trong thời kỳ cải cách.",
        choices: [
            {
                text: "Giảm kiểm duyệt, cho báo chí được đưa tin tự do hơn.",
                effects: { economy: 5, publicSupport: 10, international: 10 },
            },
            {
                text: "Giữ nguyên cơ chế kiểm duyệt để đảm bảo định hướng chính trị.",
                effects: { economy: -5, publicSupport: -8, international: -6 },
            },
            {
                text: "Thành lập hội đồng kiểm duyệt độc lập, có sự tham gia của trí thức.",
                effects: { economy: 4, publicSupport: 7, international: 6 },
            },
        ],
    },
    {
        id: 16,
        title: "Phê Bình Trong Đảng",
        description: "Thưa đồng chí, có một số cán bộ trẻ trong Đảng kiến nghị cải tổ cơ chế lãnh đạo tập thể, tăng quyền cho cá nhân quyết định.",
        choices: [
            {
                text: "Bác bỏ kiến nghị, giữ nguyên cơ chế lãnh đạo tập thể.",
                effects: { economy: -3, publicSupport: -5, international: -4 },
            },
            {
                text: "Tổ chức hội nghị nội bộ để lắng nghe ý kiến cải cách.",
                effects: { economy: 4, publicSupport: 6, international: 5 },
            },
            {
                text: "Chấp thuận thí điểm ở một vài địa phương.",
                effects: { economy: 6, publicSupport: 3, international: 4 },
            },
        ],
    },
    {
        id: 17,
        title: "Cán Bộ Tham Nhũng",
        description: "Báo cáo đồng chí, có cán bộ tỉnh lợi dụng chức vụ để chia đất cho người thân. Nếu xử lý nghiêm sẽ gây chấn động, nhưng dân đang rất bất mãn.",
        choices: [
            {
                text: "Xử lý công khai để làm gương.",
                effects: { economy: 5, publicSupport: 12, international: 7 },
            },
            {
                text: "Giải quyết nội bộ, tránh ảnh hưởng hình ảnh Đảng.",
                effects: { economy: 0, publicSupport: -8, international: -5 },
            },
            {
                text: "Tạm đình chỉ công tác và hứa sẽ điều tra.",
                effects: { economy: 1, publicSupport: 3, international: 0 },
            },
        ],
    },
    {
        id: 18,
        title: "Thay Đổi Nhân Sự Cấp Cao",
        description: "Đồng chí, có ý kiến đề nghị thay Bí thư tỉnh ủy vì năng lực yếu kém. Tuy nhiên, ông ấy có hậu thuẫn chính trị vững chắc.",
        choices: [
            {
                text: "Giữ nguyên để tránh rối loạn nội bộ.",
                effects: { economy: -4, publicSupport: -6, international: -2 },
            },
            {
                text: "Thuyên chuyển sang vị trí ít ảnh hưởng, thay bằng người mới.",
                effects: { economy: 5, publicSupport: 4, international: 3 },
            },
            {
                text: "Cách chức công khai và tổ chức kiểm điểm toàn diện.",
                effects: { economy: 3, publicSupport: 10, international: 6 },
            },
        ],
    },
    {
        id: 19,
        title: "Đảng Viên Tự Ứng Cử",
        description: "Thưa đồng chí, có đảng viên tự ứng cử đại biểu Quốc hội mà không thông qua giới thiệu từ tổ chức. Một số người xem đây là hành động vượt rào.",
        choices: [
            {
                text: "Không chấp nhận, yêu cầu rút hồ sơ để giữ quy trình thống nhất.",
                effects: { economy: 0, publicSupport: -7, international: -6 },
            },
            {
                text: "Cho phép với điều kiện được tổ chức phê duyệt sau đó.",
                effects: { economy: 2, publicSupport: 3, international: 4 },
            },
            {
                text: "Chấp nhận quyền tự ứng cử để thể hiện đổi mới chính trị.",
                effects: { economy: 4, publicSupport: 10, international: 7 },
            },
        ],
    },
    {
        id: 20,
        title: "Quan Hệ Giữa Đảng Và Chính Quyền",
        description: "Một số trí thức đặt câu hỏi liệu có nên phân định rõ vai trò giữa Đảng và chính quyền để tránh chồng chéo.",
        choices: [
            {
                text: "Giữ nguyên vai trò lãnh đạo toàn diện của Đảng.",
                effects: { economy: -2, publicSupport: -5, international: -3 },
            },
            {
                text: "Cho phép thảo luận công khai trong nội bộ về cơ chế phân quyền.",
                effects: { economy: 4, publicSupport: 6, international: 5 },
            },
            {
                text: "Bắt đầu thí điểm ở cấp quận huyện mô hình quản trị hành chính độc lập.",
                effects: { economy: 6, publicSupport: 8, international: 6 },
            },
        ],
    },
    {
        id: 21,
        title: "Căng Thẳng Biên Giới Phía Bắc",
        description: "Báo cáo đồng chí, lực lượng nước láng giềng đang gia tăng hoạt động gần biên giới phía Bắc. Dân vùng biên bắt đầu sơ tán.",
        choices: [
            {
                text: "Tăng cường quân đội và lập trạm gác mới tại khu vực nhạy cảm.",
                effects: { economy: -5, publicSupport: 8, international: -10 },
            },
            {
                text: "Giữ nguyên lực lượng, ưu tiên đàm phán qua kênh ngoại giao.",
                effects: { economy: 0, publicSupport: -3, international: 5 },
            },
            {
                text: "Đề xuất họp song phương với đối phương về thiết lập vùng phi quân sự.",
                effects: { economy: 2, publicSupport: 4, international: 8 },
            },
        ],
    },
    {
        id: 22,
        title: "Vụ Việc Bắn Nhầm",
        description: "Thưa đồng chí, một đơn vị biên phòng của ta vừa bắn nhầm vào nhóm dân thường qua biên giới. Vụ việc đang bị báo chí nước ngoài đưa tin.",
        choices: [
            {
                text: "Xin lỗi công khai và cam kết điều tra, xử lý nghiêm.",
                effects: { economy: 1, publicSupport: 3, international: 10 },
            },
            {
                text: "Giữ kín thông tin, xử lý nội bộ để tránh làm lớn chuyện.",
                effects: { economy: 0, publicSupport: -5, international: -10 },
            },
            {
                text: "Phản bác và yêu cầu chứng cứ rõ ràng từ phía nước bạn.",
                effects: { economy: -1, publicSupport: 2, international: -5 },
            },
        ],
    },
    {
        id: 23,
        title: "Quân Tình Nguyện Tại Campuchia",
        description: "Đồng chí, lực lượng của ta vẫn đang hiện diện tại Campuchia để giúp ổn định tình hình, nhưng cộng đồng quốc tế yêu cầu rút quân.",
        choices: [
            {
                text: "Tuyên bố lịch trình rút quân cụ thể để tạo thiện chí.",
                effects: { economy: 5, publicSupport: 6, international: 12 },
            },
            {
                text: "Tiếp tục hiện diện đến khi bạn hoàn toàn tự chủ.",
                effects: { economy: -3, publicSupport: 4, international: -8 },
            },
            {
                text: "Thỏa thuận rút quân dần, đổi lại viện trợ tái thiết.",
                effects: { economy: 8, publicSupport: 3, international: 10 },
            },
        ],
    },
    {
        id: 24,
        title: "Ngư Dân Bị Bắt",
        description: "Thưa đồng chí, ngư dân ta đánh cá gần vùng tranh chấp và bị lực lượng nước ngoài bắt giữ. Gia đình họ đang biểu tình yêu cầu chính phủ hành động.",
        choices: [
            {
                text: "Gửi công hàm phản đối mạnh mẽ, yêu cầu trả người vô điều kiện.",
                effects: { economy: 0, publicSupport: 6, international: -8 },
            },
            {
                text: "Thương lượng trao đổi trong yên lặng để giảm căng thẳng.",
                effects: { economy: 2, publicSupport: 3, international: 6 },
            },
            {
                text: "Phát động chiến dịch truyền thông trong nước, kêu gọi đoàn kết bảo vệ chủ quyền.",
                effects: { economy: -2, publicSupport: 10, international: -5 },
            },
        ],
    },
    {
        id: 25,
        title: "Hội Nghị Khu Vực Về Biên Giới",
        description: "Đồng chí nhận được lời mời tham dự hội nghị khu vực về giải quyết tranh chấp biên giới. Tuy nhiên, sự kiện có sự tham gia của một số quốc gia đang có xung đột với ta.",
        choices: [
            {
                text: "Tham dự với điều kiện được phát biểu quan điểm đầy đủ.",
                effects: { economy: 4, publicSupport: 3, international: 10 },
            },
            {
                text: "Từ chối tham dự để phản đối sự hiện diện của đối phương.",
                effects: { economy: -3, publicSupport: 2, international: -10 },
            },
            {
                text: "Cử đại diện cấp thấp tham dự nhằm giữ kênh đối thoại mở.",
                effects: { economy: 1, publicSupport: 0, international: 5 },
            },
        ],
    },
    {
        id: 26,
        title: "Bún Bò Phát Triển Ngoại Giao",
        description: "Thưa đồng chí, một đầu bếp ở Huế nói món bún bò của ông nên được chọn làm món quốc thực để mang ra thế giới. Ông còn xin ngân sách... mở lớp đào tạo quốc tế!",
        choices: [
            {
                text: "Từ chối, quốc thực phải qua quá trình nghiên cứu và hội thảo cấp cao.",
                effects: { economy: -1, publicSupport: -5, international: 0 },
            },
            {
                text: "Tài trợ nhỏ để thí điểm, biết đâu có thể quảng bá văn hóa.",
                effects: { economy: -2, publicSupport: 4, international: 6 },
            },
            {
                text: "Tổ chức 'Tuần lễ Bún Bò Việt Nam' tại đại sứ quán một số nước.",
                effects: { economy: -3, publicSupport: 8, international: 10 },
            },
        ],
    },
    {
        id: 27,
        title: "Đài Truyền Hình Chiếu Phim... Kỳ Quặc",
        description: "Đài truyền hình quốc gia vừa chiếu một bộ phim Xô Viết về… cá sấu đi làm cách mạng. Dân chúng phản ứng trái chiều, có người thấy 'hay bất ngờ'.",
        choices: [
            {
                text: "Cấm chiếu phim tương tự, chỉ chọn phim lịch sử chính thống.",
                effects: { economy: 0, publicSupport: -6, international: -2 },
            },
            {
                text: "Giữ lại khung giờ khuya cho các phim nghệ thuật 'khó hiểu'.",
                effects: { economy: 0, publicSupport: 4, international: 2 },
            },
            {
                text: "Tổ chức bình chọn: để nhân dân quyết định phim nào được chiếu.",
                effects: { economy: 1, publicSupport: 8, international: 3 },
            },
        ],
    },
    {
        id: 28,
        title: "Đồng Phục Quốc Dân",
        description: "Một nhà thiết kế đề xuất cả nước dùng chung một loại đồng phục mới: 'màu xanh cải cách' – giúp thể hiện tinh thần đoàn kết. Tuy nhiên… trông hơi giống đồ tập thể dục.",
        choices: [
            {
                text: "Từ chối, để người dân tự chọn trang phục trong khuôn khổ văn hóa.",
                effects: { economy: 0, publicSupport: 5, international: 0 },
            },
            {
                text: "Cho áp dụng thử ở một số cơ quan nhà nước.",
                effects: { economy: -2, publicSupport: 3, international: 1 },
            },
            {
                text: "Hưởng ứng và đưa vào phong trào 'Toàn dân cải cách từ trang phục'.",
                effects: { economy: -3, publicSupport: 10, international: -2 },
            },
        ],
    },
    {
        id: 29,
        title: "Công Nghệ Băng Cassette Nói Dối",
        description: "Thưa đồng chí, có người bán băng cassette 'phát hiện nói dối'—thực chất là băng… nhạc cải lương tua ngược. Nhưng dân đồn là nó 'linh nghiệm'.",
        choices: [
            {
                text: "Tịch thu và xử lý vì lan truyền mê tín sai sự thật.",
                effects: { economy: -1, publicSupport: -6, international: 0 },
            },
            {
                text: "Cho phép bán với nhãn 'dùng để giải trí', không tuyên truyền công năng.",
                effects: { economy: 1, publicSupport: 4, international: 0 },
            },
            {
                text: "Giao cho viện khoa học kiểm tra, nếu có ích thì phát triển thành hàng xuất khẩu.",
                effects: { economy: 3, publicSupport: 2, international: 4 },
            },
        ],
    },
    {
        id: 30,
        title: "Chó Mặc Áo Cờ Đỏ Sao Vàng",
        description: "Một nghệ nhân may đồ cho chó, mèo mặc áo cờ đỏ sao vàng và gọi đó là 'tuyên truyền di động'. Có người ủng hộ, người khác thì phẫn nộ vì thiếu trang nghiêm.",
        choices: [
            {
                text: "Cấm ngay vì xúc phạm biểu tượng thiêng liêng.",
                effects: { economy: 0, publicSupport: -10, international: -4 },
            },
            {
                text: "Cho phép nếu biểu tượng được thể hiện đúng chuẩn và tôn trọng.",
                effects: { economy: 1, publicSupport: 4, international: 2 },
            },
            {
                text: "Hướng dẫn nghệ nhân dùng hình ảnh khác mang tính dân tộc như trống đồng, hoa sen.",
                effects: { economy: 2, publicSupport: 6, international: 5 },
            },
        ],
    },
    {
        id: 31,
        title: "Khủng Hoảng Lạm Phát",
        description: "Thưa đồng chí, giá cả tăng chóng mặt, đồng tiền mất giá, dân bắt đầu tích trữ gạo và vàng. Nhiều người đòi quay lại tem phiếu.",
        choices: [
            {
                text: "Siết chặt tiền tệ và giảm chi tiêu công.",
                effects: { economy: 10, publicSupport: -15, international: 5 },
            },
            {
                text: "Trợ giá và phát thêm tiền để hỗ trợ dân nghèo.",
                effects: { economy: -12, publicSupport: 10, international: -6 },
            },
            {
                text: "Tự do hóa giá cả để ổn định thị trường theo cung cầu.",
                effects: { economy: 8, publicSupport: -10, international: 6 },
            },
        ],
    },
    {
        id: 32,
        title: "Biểu Tình Lương Thực",
        description: "Đồng chí, hàng trăm người dân kéo về tỉnh lỵ yêu cầu phát gạo cứu đói. Một số có dấu hiệu kích động.",
        choices: [
            {
                text: "Điều động công an giải tán đám đông.",
                effects: { economy: 0, publicSupport: -15, international: -8 },
            },
            {
                text: "Phát lương thực khẩn cấp từ kho dự trữ quốc gia.",
                effects: { economy: -10, publicSupport: 12, international: 3 },
            },
            {
                text: "Cho phép dân tự thành lập hội cứu trợ tại địa phương.",
                effects: { economy: -3, publicSupport: 6, international: 6 },
            },
        ],
    },
    {
        id: 33,
        title: "Tranh Cãi Mở Cửa Đầu Tư",
        description: "Thưa đồng chí, một tập đoàn nước ngoài đề xuất xây khu công nghiệp lớn, nhưng đòi miễn thuế 15 năm và toàn quyền điều hành.",
        choices: [
            {
                text: "Chấp nhận toàn bộ yêu cầu để thu hút đầu tư.",
                effects: { economy: 15, publicSupport: -10, international: 10 },
            },
            {
                text: "Từ chối vì yêu sách quá đáng.",
                effects: { economy: -6, publicSupport: 4, international: -8 },
            },
            {
                text: "Đàm phán lại để giảm ưu đãi và có sự kiểm soát chung.",
                effects: { economy: 8, publicSupport: 0, international: 4 },
            },
        ],
    },
    {
        id: 34,
        title: "Vụ Án Chính Trị Nhạy Cảm",
        description: "Đồng chí, một cán bộ cấp cao bị tố tham nhũng và lạm quyền. Dân chúng kêu gọi xử lý, nhưng ông ta có hậu thuẫn từ trung ương.",
        choices: [
            {
                text: "Truy tố công khai theo pháp luật.",
                effects: { economy: 5, publicSupport: 15, international: 8 },
            },
            {
                text: "Dàn xếp nội bộ và yêu cầu ông ấy từ chức im lặng.",
                effects: { economy: 2, publicSupport: -5, international: 0 },
            },
            {
                text: "Phủ nhận vụ việc và lên án kẻ tung tin.",
                effects: { economy: -6, publicSupport: -12, international: -10 },
            },
        ],
    },
    {
        id: 35,
        title: "Lệnh Cấm Vận Mới",
        description: "Một nhóm nước phương Tây ban hành lệnh cấm vận do lo ngại nhân quyền. Xuất khẩu bị đình trệ, ngân hàng thiếu dự trữ đô la.",
        choices: [
            {
                text: "Tìm cách thương lượng và cải thiện hình ảnh quốc tế.",
                effects: { economy: 4, publicSupport: 2, international: 15 },
            },
            {
                text: "Xoay trục sang quan hệ với các nước không thuộc phương Tây.",
                effects: { economy: -5, publicSupport: 3, international: -10 },
            },
            {
                text: "Đáp trả bằng cách cắt đàm phán song phương với họ.",
                effects: { economy: -10, publicSupport: 6, international: -15 },
            },
        ],
    },
    {
        id: 36,
        title: "Khủng Hoảng Nông Nghiệp",
        description: "Thưa đồng chí, do hạn hán kéo dài, hàng ngàn hecta lúa bị mất trắng. Nông dân bỏ ruộng, kéo nhau lên thành phố kiếm việc.",
        choices: [
            {
                text: "Trợ cấp thiệt hại và phát động lại các hợp tác xã.",
                effects: { economy: -12, publicSupport: 8, international: 2 },
            },
            {
                text: "Cấp quyền sở hữu đất dài hạn cho hộ nông dân để họ tự quyết.",
                effects: { economy: 10, publicSupport: 12, international: 6 },
            },
            {
                text: "Không hỗ trợ và yêu cầu địa phương tự xoay xở.",
                effects: { economy: 2, publicSupport: -15, international: -3 },
            },
        ],
    },
    {
        id: 37,
        title: "Tranh Chấp Nội Bộ",
        description: "Đồng chí, nội bộ lãnh đạo xuất hiện chia rẽ sâu sắc về đường lối cải cách. Một phe dọa rút khỏi ban chỉ đạo.",
        choices: [
            {
                text: "Tiến hành cải cách toàn diện, bất chấp phản đối.",
                effects: { economy: 12, publicSupport: 6, international: 6 },
            },
            {
                text: "Tạm hoãn cải cách, tập trung ổn định nội bộ trước.",
                effects: { economy: -10, publicSupport: -5, international: -6 },
            },
            {
                text: "Mời các phe nhóm họp kín để tìm đồng thuận.",
                effects: { economy: 2, publicSupport: 2, international: 4 },
            },
        ],
    },
    {
        id: 38,
        title: "Sự Kiện Tập Trung Trái Phép",
        description: "Hàng nghìn người tập trung ở quảng trường phản đối một chính sách đất đai mới. Nếu không xử lý nhanh có thể lan rộng.",
        choices: [
            {
                text: "Ra lệnh trấn áp mạnh tay để giữ ổn định.",
                effects: { economy: 0, publicSupport: -15, international: -12 },
            },
            {
                text: "Gặp đại diện người biểu tình và thỏa hiệp một phần.",
                effects: { economy: -5, publicSupport: 8, international: 5 },
            },
            {
                text: "Hủy bỏ chính sách gây tranh cãi, xin lỗi trước công chúng.",
                effects: { economy: -10, publicSupport: 15, international: 8 },
            },
        ],
    },
    {
        id: 39,
        title: "Khủng Hoảng Niềm Tin",
        description: "Một khảo sát bí mật cho thấy chỉ 30% dân tin tưởng vào các quyết sách mới. Tâm lý hoài nghi đang lan rộng trong xã hội.",
        choices: [
            {
                text: "Mở chiến dịch truyền thông toàn quốc, tăng cường giáo dục chính trị.",
                effects: { economy: -2, publicSupport: 10, international: 0 },
            },
            {
                text: "Tổ chức đối thoại công khai, mời trí thức phản biện tham gia cải cách.",
                effects: { economy: 4, publicSupport: 15, international: 10 },
            },
            {
                text: "Bỏ qua kết quả khảo sát, tiếp tục theo đường lối đã định.",
                effects: { economy: 3, publicSupport: -12, international: -4 },
            },
        ],
    },
    {
        id: 40,
        title: "Tái Cấu Trúc Quốc Doanh",
        description: "Thưa đồng chí, nhiều doanh nghiệp nhà nước làm ăn thua lỗ nặng. Một số đề nghị cho phép cổ phần hóa hoặc giải thể.",
        choices: [
            {
                text: "Cổ phần hóa mạnh mẽ, cho tư nhân tham gia quản lý.",
                effects: { economy: 15, publicSupport: -8, international: 10 },
            },
            {
                text: "Giữ lại quốc doanh và rót thêm vốn để vực dậy.",
                effects: { economy: -12, publicSupport: 6, international: -5 },
            },
            {
                text: "Giải thể doanh nghiệp yếu kém, hỗ trợ công nhân chuyển nghề.",
                effects: { economy: 10, publicSupport: -5, international: 8 },
            },
        ],
    },
    {
        id: 41,
        title: "Giữ hay Bỏ Tem Phiếu",
        description: "Thưa đồng chí, việc phát tem phiếu ngày càng chậm trễ, nhiều hộ không đủ ăn. Một số địa phương đề xuất bỏ hoàn toàn hệ thống tem.",
        choices: [
          {
            text: "Bãi bỏ hoàn toàn tem phiếu, để dân tự mua bán theo giá thị trường.",
            effects: { economy: 10, publicSupport: -6, international: 6 },
          },
          {
            text: "Giữ lại tem phiếu lương thực cho vùng khó khăn, các nơi khác thử cơ chế thị trường.",
            effects: { economy: 6, publicSupport: 4, international: 4 },
          },
          {
            text: "Tiếp tục duy trì tem phiếu toàn quốc để ổn định xã hội.",
            effects: { economy: -8, publicSupport: 6, international: -4 },
          },
        ],
      },
      {
        id: 42,
        title: "Kho Phát Gạo Trung Ương",
        description: "Báo cáo đồng chí, kho gạo quốc doanh ở miền Trung bị dân địa phương đột nhập do thiếu ăn. Chính quyền lúng túng không xử lý kịp.",
        choices: [
          {
            text: "Cải tổ kho phát gạo: chuyển sang cơ chế mua bán công khai theo giá.",
            effects: { economy: 10, publicSupport: -4, international: 5 },
          },
          {
            text: "Tăng an ninh kho gạo, chỉ phát đúng theo định mức và phiếu.",
            effects: { economy: -4, publicSupport: -6, international: -2 },
          },
          {
            text: "Tổ chức phát gạo khẩn cấp và xin viện trợ quốc tế tạm thời.",
            effects: { economy: -6, publicSupport: 8, international: 6 },
          },
        ],
      },
      {
        id: 43,
        title: "Hợp Tác Xã Kiểu Cũ",
        description: "Đồng chí, nhiều nông dân ở đồng bằng sông Hồng xin ra khỏi hợp tác xã vì cho rằng bị ép sản lượng và chia lương thực không công bằng.",
        choices: [
          {
            text: "Cho phép người dân rút khỏi hợp tác xã và làm theo hộ gia đình.",
            effects: { economy: 10, publicSupport: 10, international: 4 },
          },
          {
            text: "Cải tổ hợp tác xã: giữ hình thức chung nhưng giao quyền cho hộ cá nhân.",
            effects: { economy: 6, publicSupport: 6, international: 3 },
          },
          {
            text: "Không thay đổi mô hình hợp tác xã để tránh xáo trộn lớn.",
            effects: { economy: -10, publicSupport: -6, international: -2 },
          },
        ],
      },
      {
        id: 44,
        title: "Bán Buôn Nhà Nước Ế Ẩm",
        description: "Thưa đồng chí, các cửa hàng quốc doanh tồn đọng hàng, dân quay sang chợ đen. Mua bán qua bao cấp gần như tê liệt.",
        choices: [
          {
            text: "Cho phép tư nhân mở cửa hàng cạnh tranh với quốc doanh.",
            effects: { economy: 12, publicSupport: 8, international: 6 },
          },
          {
            text: "Cải tổ cửa hàng quốc doanh: thay giám đốc, thay đổi cách vận hành.",
            effects: { economy: 4, publicSupport: 2, international: 1 },
          },
          {
            text: "Siết chặt quản lý chợ đen, cưỡng chế ai không mua tại quốc doanh.",
            effects: { economy: -6, publicSupport: -12, international: -4 },
          },
        ],
      },
      {
        id: 45,
        title: "Nhà Ở Bao Cấp Xuống Cấp",
        description: "Báo cáo đồng chí, nhiều khu tập thể đã quá tải, dột nát. Người dân không dám sửa vì không phải nhà của họ.",
        choices: [
          {
            text: "Chuyển quyền sở hữu nhà ở cho cư dân để họ có trách nhiệm bảo trì.",
            effects: { economy: 8, publicSupport: 10, international: 4 },
          },
          {
            text: "Tái đầu tư ngân sách để sửa chữa toàn bộ khu tập thể.",
            effects: { economy: -10, publicSupport: 8, international: 2 },
          },
          {
            text: "Yêu cầu dân tự đóng góp sửa chữa, giữ cơ chế phân nhà như cũ.",
            effects: { economy: -2, publicSupport: -6, international: 0 },
          },
        ],
      },
      {
        id: 46,
        title: "Quyền Làm Chủ Tư Liệu Sản Xuất",
        description: "Đồng chí, cán bộ địa phương phản ánh rằng người dân không muốn đầu tư vì không có quyền sở hữu đất hoặc máy móc.",
        choices: [
          {
            text: "Cấp quyền sử dụng đất và tài sản sản xuất lâu dài cho cá nhân, hộ gia đình.",
            effects: { economy: 15, publicSupport: 10, international: 8 },
          },
          {
            text: "Cho thuê lại đất và thiết bị quốc doanh với chi phí ưu đãi.",
            effects: { economy: 5, publicSupport: 6, international: 4 },
          },
          {
            text: "Tiếp tục giữ nguyên mọi tư liệu sản xuất trong tay nhà nước.",
            effects: { economy: -10, publicSupport: -8, international: -6 },
          },
        ],
      },
      {
        id: 47,
        title: "Giá Mua Lúa Theo Bao Cấp",
        description: "Thưa đồng chí, nông dân cho biết giá nhà nước thu mua lúa thấp hơn giá chợ khiến họ bán ra ngoài. Lúa quốc doanh không đủ dự trữ.",
        choices: [
          {
            text: "Bỏ giá trần, cho phép thu mua theo giá thị trường.",
            effects: { economy: 10, publicSupport: 8, international: 5 },
          },
          {
            text: "Tăng giá thu mua nhà nước lên ngang chợ.",
            effects: { economy: -8, publicSupport: 10, international: 3 },
          },
          {
            text: "Trừng phạt nông dân bán lúa ra ngoài hệ thống bao cấp.",
            effects: { economy: -4, publicSupport: -10, international: -6 },
          },
        ],
      },
      {
        id: 48,
        title: "Xí Nghiệp Làm Ăn Thua Lỗ",
        description: "Báo cáo đồng chí, một số xí nghiệp quốc doanh không còn khách hàng, nhưng vẫn xin ngân sách duy trì hoạt động.",
        choices: [
          {
            text: "Cho phép xí nghiệp tự chủ tài chính, lỗ thì giải thể.",
            effects: { economy: 12, publicSupport: -6, international: 6 },
          },
          {
            text: "Cải tổ ban quản lý, tìm cách hỗ trợ một phần qua ngân sách.",
            effects: { economy: -4, publicSupport: 2, international: 2 },
          },
          {
            text: "Tiếp tục bao cấp toàn phần để giữ việc làm và ổn định.",
            effects: { economy: -10, publicSupport: 6, international: -4 },
          },
        ],
      },
      {
        id: 49,
        title: "Chuyển Đổi Chế Độ Phân Phối",
        description: "Đồng chí, nhiều địa phương đề xuất bỏ hệ thống phân phối trung ương, để doanh nghiệp tự tìm nguồn và bán hàng.",
        choices: [
          {
            text: "Chấp thuận cho phân phối tự do hóa theo cơ chế thị trường.",
            effects: { economy: 14, publicSupport: 4, international: 6 },
          },
          {
            text: "Thử nghiệm ở một số tỉnh, sau đó đánh giá và mở rộng.",
            effects: { economy: 6, publicSupport: 2, international: 4 },
          },
          {
            text: "Bác bỏ đề xuất, giữ hệ thống phân phối thống nhất toàn quốc.",
            effects: { economy: -8, publicSupport: -4, international: -5 },
          },
        ],
      },
      {
        id: 50,
        title: "Khuyến Khích Kinh Tế Tư Nhân",
        description: "Báo cáo đồng chí, nhiều người dân muốn mở tiệm nhỏ, quán ăn, xưởng cơ khí riêng nhưng bị ngăn cấm vì vi phạm 'bao cấp'.",
        choices: [
          {
            text: "Cho phép kinh tế tư nhân nhỏ lẻ hoạt động hợp pháp.",
            effects: { economy: 12, publicSupport: 10, international: 8 },
          },
          {
            text: "Chỉ cho phép thí điểm ở vài địa phương, dưới sự giám sát nhà nước.",
            effects: { economy: 5, publicSupport: 4, international: 4 },
          },
          {
            text: "Cấm hoàn toàn, tránh nguy cơ tư bản manh nha trở lại.",
            effects: { economy: -12, publicSupport: -10, international: -6 },
          },
        ],
      },
];