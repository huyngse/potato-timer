import { useEffect, useState } from "react";
import { Choice, GameState, Scenario } from "../types";
import ScoreBoard from "./ScoreBoard";
import ScenarioCard from "./ScenarioCard";
import EndScreen from "./EndScreen";
import { scenarios } from "../scenarios";
import { EffectWeights, superWeights } from "../weights";
import FrutigerButton from "@/components/FrutigerButton";
import MouseFollower from "./MouseFollower";
import { ModalManager } from "./AnnoyingDialog";

function applyEffectWeights(choice: Choice, weights: EffectWeights): Choice {
  const modifiedEffects = {
    economy: applyWeight(choice.effects.economy, weights),
    publicSupport: applyWeight(choice.effects.publicSupport, weights),
    international: applyWeight(choice.effects.international, weights),
  };

  return {
    ...choice,
    effects: modifiedEffects,
  };
}

function applyWeight(value: number, weights: EffectWeights): number {
  if (value < 0) {
    // Make negative effects more punishing
    return Math.round(value * weights.negativeMultiplier);
  } else if (value > 0) {
    // Make positive effects less rewarding
    return Math.round(value * weights.positiveMultiplier);
  } else {
    // No change for zero values
    return value;
  }
}

function applyScenarioWeights(
  scenario: Scenario,
  weights: EffectWeights
): Scenario {
  const modifiedChoices = scenario.choices.map((choice) =>
    applyEffectWeights(choice, weights)
  );

  return {
    ...scenario,
    choices: modifiedChoices,
  };
}

const VietnamReformGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    economy: 10,
    publicSupport: 50,
    international: 20,
    currentScenario: 0,
    scenariosCompleted: 0,
    isGameComplete: false,
    currentScenarioData: null,
    showingEffects: false,
    selectedChoice: null,
    isStarted: false,
  });

  const [usedScenarios, setUsedScenarios] = useState<number[]>([]);

  const getRandomScenario = (): Scenario => {
    const availableScenarios = scenarios.filter(
      (s) => !usedScenarios.includes(s.id)
    );
    const randomIndex = Math.floor(Math.random() * availableScenarios.length);
    return applyScenarioWeights(availableScenarios[randomIndex], superWeights);
  };

  const loadNextScenario = () => {
    if (gameState.scenariosCompleted >= 15) {
      setGameState((prev) => ({ ...prev, isGameComplete: true }));
      return;
    }

    const nextScenario = getRandomScenario();

    setUsedScenarios((prev) => [...prev, nextScenario.id]);

    setGameState((prev) => ({
      ...prev,
      currentScenarioData: nextScenario,
    }));
  };

  const handleChoice = (choice: Choice) => {
    // First, show the selected choice and its effects
    setGameState((prev) => ({
      ...prev,
      showingEffects: true,
      selectedChoice: choice,
    }));

    // After 2 seconds, apply the effects and move to next scenario
    setTimeout(() => {
      setGameState((prev) => ({
        ...prev,
        economy: prev.economy + choice.effects.economy,
        publicSupport: prev.publicSupport + choice.effects.publicSupport,
        international: prev.international + choice.effects.international,
        scenariosCompleted: prev.scenariosCompleted + 1,
        showingEffects: false,
        selectedChoice: null,
      }));

      // Load next scenario after a brief delay
      setTimeout(() => {
        loadNextScenario();
      }, 500);
    }, 2500);
  };

  const restartGame = () => {
    setGameState({
      economy: 10,
      publicSupport: 50,
      international: 20,
      currentScenario: 0,
      scenariosCompleted: 0,
      isGameComplete: false,
      currentScenarioData: null,
      showingEffects: false,
      selectedChoice: null,
      isStarted: false,
    });
    setUsedScenarios([]);
  };

  // Initialize first scenario
  useEffect(() => {
    if (!gameState.currentScenarioData && !gameState.isGameComplete) {
      loadNextScenario();
    }
  }, [gameState.currentScenarioData, gameState.isGameComplete]);

  const onStart = () => {
    setGameState((prev) => ({ ...prev, isStarted: true }));
  };

  if (!gameState.isStarted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{
          background: `url("https://redsvn.net/wp-content/uploads/2017/01/Bao-cap.jpg")`,
          backgroundSize: "cover",
          fontFamily: "Serif",
        }}
      >
        <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-red-600">
            Con Đường Cải Cách Việt Nam
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Bạn là một cán bộ cấp cao vào cuối thập niên 1980 tại Việt Nam.
            Người dân đến văn phòng bạn để phản ánh các vấn đề xã hội và kinh
            tế.
            <br />
            <br />
            Bạn sẽ đưa ra các quyết định cải cách và mỗi lựa chọn sẽ ảnh hưởng
            đến:
          </p>

          <ul className="list-disc list-inside text-gray-800">
            <li>Chỉ số Kinh Tế</li>
            <li>Niểm tin Của Nhân Dân</li>
            <li>Quan Hệ Quốc Tế</li>
          </ul>

          <p className="text-gray-700">
            Các tình huống sẽ lần lượt được đưa ra. Hãy chọn một trong số 2–3
            phương án. Sau khi hoàn thành toàn bộ tình huống, bạn sẽ nhận được
            kết quả và huy hiệu phù hợp.
          </p>

          <div className="flex justify-center">
            <FrutigerButton onClick={onStart} variant="danger">
              Bắt Đầu Trò Chơi
            </FrutigerButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-5"
      style={{
        background: `url("https://redsvn.net/wp-content/uploads/2017/01/Bao-cap.jpg")`,
        backgroundSize: "cover",
        fontFamily: "Serif",
        cursor: "none",
      }}
    >
      <ModalManager />
      <MouseFollower offsetX={-230} offsetY={180} />
      <div className="max-w-4xl mx-auto">
        {gameState.isGameComplete ? (
          <EndScreen gameState={gameState} onRestart={restartGame} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ScoreBoard gameState={gameState} />
            </div>
            <div className="lg:col-span-2 max-h-[90vh] overflow-x-visible overflow-y-auto no-scrollbar">
              {gameState.currentScenarioData && (
                <ScenarioCard
                  scenario={gameState.currentScenarioData}
                  onChoice={handleChoice}
                  showEffects={gameState.showingEffects}
                  selectedChoice={gameState.selectedChoice}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VietnamReformGame;
