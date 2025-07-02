import { useMemo, useEffect, useState, useRef } from "react";
import { Choice, Scenario } from "../types";
import "./ScenarioCard.css";

const ScenarioCard: React.FC<{
  scenario: Scenario;
  onChoice: (choice: Choice) => void;
  showEffects: boolean;
  selectedChoice: Choice | null;
}> = ({ scenario, onChoice, showEffects, selectedChoice }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Randomize choice order
  const randomizedChoices = useMemo(() => {
    const shuffled = [...scenario.choices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [scenario.id]);

  // Animation on mount
  useEffect(() => {
    setIsVisible(false);
    setIsExiting(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    setTimeout(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
    return () => clearTimeout(timer);
  }, [scenario.id]);

  // Animation on showEffects change (when choice is made)
  useEffect(() => {
    if (showEffects) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 2000); // Start exit animation before component unmounts
      return () => clearTimeout(exitTimer);
    }
  }, [showEffects]);

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-8 mb-6 border-2 border-gray-200 relative transition-all duration-700 ease-out transform ${
        isVisible && !isExiting
          ? "opacity-100 translate-y-0 scale-100 rotate-0"
          : isExiting
          ? "opacity-0 translate-x-full scale-95 rotate-3"
          : "opacity-0 -translate-y-8 scale-95 -rotate-1"
      }`}
      style={{
        transformOrigin: "center center",
        animation:
          isVisible && !isExiting ? "letterFloat 0.7s ease-out" : undefined,
      }}
      ref={topRef}
    >
      {/* Letter Header */}
      <div
        className={`border-b-2 border-gray-300 pb-4 mb-6 transition-all duration-500 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-1">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </div>
          <div className="text-xs text-gray-500 mb-3">
            Độc lập - Tự do - Hạnh phúc
          </div>
          <div className="text-xs text-gray-500">★★★</div>
        </div>
      </div>

      {/* Letter Date and Location */}
      <div
        className={`text-right mb-6 transition-all duration-500 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <div className="text-sm text-gray-600">
          Hà Nội, ngày __ tháng __ năm 198_
        </div>
      </div>

      {/* Letter Title */}
      <div
        className={`text-center mb-6 transition-all duration-500 delay-400 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
          {scenario.title}
        </h2>
      </div>

      {/* Letter Addressee */}
      <div
        className={`mb-4 transition-all duration-500 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="text-sm text-gray-700">
          <strong>Kính gửi:</strong> Đồng chí Cán bộ phụ trách
        </div>
      </div>

      {/* Letter Content */}
      <div
        className={`mb-6 transition-all duration-700 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-gray-700 leading-relaxed text-base indent-8 text-justify">
          {scenario.description}
        </p>
      </div>

      {/* Effects Display */}
      {showEffects && selectedChoice && (
        <div
          className={`mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg transition-all duration-500 ${
            showEffects
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-4 scale-95"
          }`}
          style={{
            animation: showEffects ? "fadeInSlide 0.5s ease-out" : undefined,
          }}
        >
          <h3 className="font-semibold text-gray-800 mb-2 text-sm">
            📋 Báo cáo tác động của quyết định:
          </h3>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Kinh tế:</span>
              <span
                className={`font-medium ${
                  selectedChoice.effects.economy >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {selectedChoice.effects.economy >= 0 ? "+" : ""}
                {selectedChoice.effects.economy}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Lòng tin của nhân dân:</span>
              <span
                className={`font-medium ${
                  selectedChoice.effects.publicSupport >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {selectedChoice.effects.publicSupport >= 0 ? "+" : ""}
                {selectedChoice.effects.publicSupport}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quan hệ quốc tế:</span>
              <span
                className={`font-medium ${
                  selectedChoice.effects.international >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {selectedChoice.effects.international >= 0 ? "+" : ""}
                {selectedChoice.effects.international}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Letter Choices as Proposed Solutions */}
      <div
        className={`mb-6 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-sm font-semibold text-gray-800 mb-3">
          Đề xuất các phương án giải quyết:
        </div>
        <div className="space-y-3">
          {randomizedChoices.map((choice, index) => (
            <button
              key={index}
              onClick={() => {
                onChoice(choice);
              }}
              disabled={showEffects}
              className={`w-full p-4 text-left border-2 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                showEffects
                  ? "bg-gray-100 border-gray-200 cursor-not-allowed"
                  : "bg-gray-50 hover:bg-blue-50 border-gray-300 hover:zinc-blue-400 hover:shadow-md hover:-translate-y-0.5"
              } ${
                selectedChoice === choice
                  ? "bg-blue-100 border-zinc-500 shadow-md scale-[1.02]"
                  : ""
              }`}
              style={{
                transitionDelay: isVisible ? "0ms" : `${800 + index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? selectedChoice === choice
                    ? "scale(1.02)"
                    : "scale(1)"
                  : "translateY(20px) scale(0.95)",
                animation:
                  selectedChoice === choice
                    ? "choiceSelected 0.3s ease-out"
                    : undefined,
                cursor: "none",
              }}
            >
              <div className="flex items-start">
                <span className="text-gray-500 font-bold mr-3 mt-0.5">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="text-gray-800 font-medium flex-1">
                  {choice.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Letter Footer */}
      <div
        className={`border-t-2 border-gray-300 pt-4 mt-6 transition-all duration-500 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-sm text-gray-600 text-center">
          <div className="mb-2">Trân trọng kính chào,</div>
          <div className="text-xs text-gray-500">
            {showEffects ? "Đã xử lý" : "Chờ xử lý"}
          </div>
        </div>
      </div>

      {/* Letter Stamp Effect */}
      {showEffects && (
        <div
          className={`absolute top-4 right-8 transition-all duration-500 ${
            showEffects
              ? "opacity-100 scale-100 rotate-12"
              : "opacity-0 scale-0 rotate-0"
          }`}
          style={{
            animation: showEffects
              ? "stampAppear 0.6s ease-out 0.3s both"
              : undefined,
          }}
        >
          <div className="w-16 h-16 border-4 border-red-500 rounded-full flex items-center justify-center">
            <span className="text-red-500 font-bold text-xs text-center">
              ĐÃ XỬ LÝ
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScenarioCard;
