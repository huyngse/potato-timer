import React, { useState, useEffect, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

// List of random texts to display
const RANDOM_TEXTS = [
  "Ở thời bao cấp, đi chợ không mang tiền, chỉ mang… tem phiếu. Tiếc là có tiền cũng không mua được gì!",
  "Thời đó, muốn ăn thịt phải xếp hàng từ sáng sớm. Đến lượt thì cô bán hàng bảo: 'Hết thịt rồi, mai quay lại nhé!'",
  "Nhà có tivi trắng đen thì được cả xóm qua xem. Mỗi lần có bóng đá là nhà thành rạp chiếu phim quốc dân.",
  "Có cái xe đạp Phượng Hoàng là oách nhất xóm. Mất xe thì coi như mất cả sự nghiệp!",
  "Mỗi lần mất điện, cả khu phố ra ngoài hóng gió. Có hôm tưởng nhà nào tổ chức họp tổ dân phố.",
  "Đi học phải mang theo bảng đen, phấn trắng. Ai có bút bi là dân chơi hệ giàu có.",
  "Cái loa phường là mạng xã hội đầu tiên: sáng báo thức, trưa đọc tin, tối phát nhạc cách mạng.",
  "Mỗi lần sửa quạt máy phải 'xin ý kiến tổ trưởng dân phố' vì quạt thuộc dạng hàng quý hiếm.",
  "Tem phiếu thời ấy quý hơn vàng. Đổi tem lấy mì ăn liền là coi như đãi tiệc sinh nhật rồi!",
  "Ngày xưa tán gái không có Facebook, chỉ có thư tay thơm mùi giấy pelure và lời hứa 'chờ anh qua kỳ phân phối xe'.",
  "Đi học muộn không phải vì ngủ nướng, mà vì chờ mẹ gánh nước về rửa mặt.",
  "Mì tôm là đặc sản. Ăn sống nhai rôm rốp, chấm với muối là hạnh phúc giản dị.",
  "Quần áo chỉ có một bộ mặc đi học, một bộ để dành Tết. Giặt xong phải canh trời nắng như… canh thời vụ!",
  "Nhà ai có radio là trung tâm cập nhật thời sự. Cứ 6 giờ chiều là cả nhà ngồi im nghe tin.",
  "Kẹo cao su hiếm như vàng. Có một viên là nhai đi nhai lại đến mất vị mới thôi.",
  "Cúp điện bất thình lình, nấu cơm bằng bếp củi, cơm khê là chuyện thường ngày ở huyện.",
  "Tết đến, ai được phát lịch bloc là thấy năm mới đầy hy vọng rồi!",
  "Đi khám bệnh phải mang theo sổ hộ khẩu, tem phiếu, giấy giới thiệu gần đủ để viết thành đơn xin việc.",
  "Sách giáo khoa thì truyền từ anh đến em, giấy vàng ố mà chữ thì vẫn thuộc lòng.",
  "Băng cassette tua bằng bút bi - phát minh đỉnh cao của học sinh thời ấy!",
  "Buồn như mất sổ gạo; Mặt nghệt như mất sổ gạo; Mua được gạo không mốc sướng lâng lâng cả ngày",
  "Một trăm lời nói không bằng ống khói Honda",
  "Hết sẩy con nhà bà Bẩy, hết ý con nhà bà Tí",
  "Đẹp trai đi bộ không bằng mặt rỗ đi lơ",
  "Mặt rỗ đi lơ không bằng thằng gù đi cúp.",
  "Ăn no lo cắt tem",
  "Tem phiếu là vua, sổ gạo là thánh",
  "Ba ngày đánh răng một lần, mỗi lần ba người đánh chung một bàn chải",
  "Hôm nay ăn cơm với thịt, mai ăn thịt không cơm, mốt nghỉ ăn để tiết kiệm",
  "Nồi cơm độn, dép cao su, quần áo chắp vá",
  "Con gà cục tác lá chanh, thời bao cấp đến là nhanh hết gà",
  "Xếp hàng từ tờ mờ sáng, về tay không lúc trời tối",
  "Có tem mà không có hàng, có hàng lại không đến lượt",
  "Cơm độn khoai, cháo không người lái",
  "Tem phiếu là lẽ sống, xếp hàng là định mệnh.",
  "Gạo mậu dịch quý hơn vàng.",
  "Chạy gạo còn hơn chạy chức.",
  "Mua hàng như đi đánh trận.",
  "Cúp điện là chuyện cơm bữa.",
  "Ơ kìa, cán bộ ơi, giấy tờ em nộp từ tháng trước rồi mà chưa thấy phản hồi gì cả?",
  "Cái này bên phường nói không cần, mà sao lên đây lại bảo thiếu?",
  "Làm việc kiểu này thì dân biết trông cậy vào ai hả cán bộ?",
  "Cán bộ thử giải thích hộ em đi, luật gì mà mỗi nơi hiểu mỗi kiểu?",
  "Ra đường sợ nhất công nông - Về nhà sợ nhất vợ không tem phiếu.",
  "Ba thằng rủ nhau đi ăn phở, một thằng giữ xe, hai thằng giữ thịt bò.",
  "Tivi thì cả xóm cùng xem - Bánh mì thì xé tem chia phần.",
  "Ba không thời bao cấp: không tiền, không gạo, không dầu.",
  "Cúp điện là thời gian cả xóm thân nhau nhất.",
  "Cày xong một vụ, bán trâu mới đủ mua đôi dép râu.",
  "Đi làm hợp tác xã - lúa về nhà xã giữ.",
  "Cán bộ nói: 'Làm theo năng lực, hưởng theo sổ gạo'",
  "Yêu nhau mấy núi cũng trèo - Gặp trời mưa đạp xích lô cũng thôi.",
  "Xe đạp Phượng Hoàng - đi từ đời cha để lại, đến đời con chưa thay săm.",
  "Cái khó ló xếp hàng.",
  "Món khoái khẩu: cơm độn khoai, món cao cấp: cơm độn ký ức.",
  "Thịt heo quý hơn vàng - mà ăn chay lại hóa sang.",
];

// Modal definition
type Modal = {
  id: number;
  text: string;
  x: number;
  y: number;
};

/**
 * Hook: useSpawnModals
 * Spawns a draggable modal with random text & position every min-max ms.
 * Returns the list of active modals and a remover function.
 */
export function useSpawnModals(
  minInterval = 10000,
  maxInterval = 20000,
  maxModals = 50
) {
  const [modals, setModals] = useState<Modal[]>([]);
  const nextId = useRef(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Schedule next spawn
  useEffect(() => {
    const schedule = () => {
      const delay = Math.random() * (maxInterval - minInterval) + minInterval;
      timerRef.current = setTimeout(() => {
        setModals((currentModals) => {
          if (currentModals.length < maxModals) {
            const id = nextId.current++;
            const text =
              RANDOM_TEXTS[Math.floor(Math.random() * RANDOM_TEXTS.length)];
            const width = 200;
            const height = 120;
            const x = Math.random() * (window.innerWidth - width);
            const y = Math.random() * (window.innerHeight - height);
            return [...currentModals, { id, text, x, y }];
          }
          return currentModals;
        });
        schedule();
      }, delay);
    };
    schedule();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [minInterval, maxInterval, maxModals]);

  // Remove modal by id
  const removeModal = (id: number) => {
    setModals((prev) => prev.filter((m) => m.id !== id));
  };

  return { modals, removeModal };
}

/**
 * Component: ModalManager
 * Renders all active modals. Each must be dragged off-screen to dismiss.
 */
export const ModalManager: React.FC = () => {
  const { modals, removeModal } = useSpawnModals();

  const handleStop = (_: DraggableEvent, data: DraggableData, id: number) => {
    // If dragged outside viewport, dismiss
    const { x, y } = data;
    const buffer = 50;
    if (
      x < -buffer ||
      y < -buffer ||
      x > window.innerWidth - (buffer + 50) ||
      y > window.innerHeight - buffer
    ) {
      removeModal(id);
    }
  };

  return (
    <>
      {modals.map(({ id, text, x, y }) => (
        <Draggable
          key={id}
          defaultPosition={{ x, y }}
          onStop={(e, data) => handleStop(e, data, id)}
        >
          <div
            className="fixed w-48 p-4 bg-white shadow-lg cursor-move"
            style={{ zIndex: 1000 }}
          >
            <p>{text}</p>
          </div>
        </Draggable>
      ))}
    </>
  );
};

/**
 * Usage:
 * In your root component (e.g., App.tsx), include <ModalManager /> anywhere.
 * Ensure react-draggable and TailwindCSS are installed and configured.
 */
