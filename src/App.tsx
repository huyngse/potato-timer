import { useEffect, useMemo, useRef, useState } from "react";
import Clock from "./components/Clock";
import { TimerMode } from "./types/clock";
import {
  formatTime,
  getBackground,
  getTimeOfDay,
  playSoundEffect,
  showNotification,
} from "./utils/clock";

// Time Constants
const DURATIONS: Record<TimerMode, number> = {
  normal: 25 * 60,
  short: 5 * 60,
  long: 10 * 60,
};

function App() {
  const [seconds, setSeconds] = useState(DURATIONS.normal);
  const [isPaused, setIsPaused] = useState(true);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [mode, setMode] = useState<TimerMode>("normal");

  const timeOfDay = useMemo(getTimeOfDay, []);
  const background = useMemo(() => getBackground(timeOfDay), [timeOfDay]);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const endTimeRef = useRef<number | null>(null);

  // Request notification permission
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  // Countdown Logic
  useEffect(() => {
    if (!isPaused && !isTimeOut) {
      if (!endTimeRef.current) {
        endTimeRef.current = Date.now() + seconds * 1000;
      }

      intervalRef.current = setInterval(() => {
        const remaining = Math.max(
          0,
          Math.floor((endTimeRef.current! - Date.now()) / 1000)
        );
        setSeconds(remaining);

        if (remaining <= 0) {
          clearInterval(intervalRef.current!);
          endTimeRef.current = null;
          setIsTimeOut(true);
          setIsPaused(true);
          playSoundEffect();
          showNotification();
        }
      }, 200); // slight buffer for responsiveness

      return () => clearInterval(intervalRef.current!);
    }

    // If paused manually
    clearInterval(intervalRef.current!);
    endTimeRef.current = null;
  }, [isPaused]);

  // Dynamic document title
  useEffect(() => {
    if (isTimeOut) {
      document.title = "Buzzzzz!";
    } else if (!isPaused) {
      document.title = `(${formatTime(seconds)}) PotatoTimer`;
    } else {
      document.title = "PotatoTimer";
    }
  }, [seconds, isPaused, isTimeOut]);

  // Timer mode handlers
  const switchMode = (newMode: TimerMode) => {
    setMode(newMode);
    setSeconds(DURATIONS[newMode]);
    setIsPaused(false);
    setIsTimeOut(false);
  };

  const handleReset = () => {
    setSeconds(DURATIONS[mode]);
    setIsPaused(true);
    setIsTimeOut(false);
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex justify-center items-center flex-col h-screen bg-[rgba(255,255,255,0.1)] gap-2">
        {/* Mode Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => switchMode("short")}
            className="bg-white opacity-70 text-center rounded-lg font-bold w-8 h-8 hover:opacity-90"
          >
            5
          </button>
          <button
            onClick={() => switchMode("long")}
            className="bg-white opacity-70 text-center rounded-lg font-bold w-8 h-8 hover:opacity-90"
          >
            10
          </button>
          <button
            onClick={() => switchMode("normal")}
            className="bg-white opacity-70 text-center rounded-lg font-bold w-8 h-8 hover:opacity-90"
          >
            25
          </button>
        </div>

        {/* Clock */}
        <div className="relative w-[300px] h-[300px]">
          <Clock />
        </div>

        {/* Timer & Controls */}
        <div className="flex justify-center">
          <div className="bg-[rgba(255,255,255,0.7)] shadow px-3 py-1 rounded-lg">
            <h1 className="text-6xl text-center border-b border-b-black">
              {formatTime(seconds)}
            </h1>
            <div className="flex gap-2 justify-between">
              <button onClick={() => setIsPaused(false)}>Start</button>
              <button onClick={() => setIsPaused(true)}>Stop</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
