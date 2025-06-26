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
      endTimeRef.current ??= Date.now() + seconds * 1000;

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
      }, 500);

      return () => clearInterval(intervalRef.current!);
    }

    clearInterval(intervalRef.current!);
    endTimeRef.current = null;
  }, [isPaused, isTimeOut, seconds]);

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
    clearInterval(intervalRef.current!); // Stop current timer

    const duration = DURATIONS[newMode];
    setMode(newMode);
    setSeconds(duration);
    setIsPaused(false); // Let user restart manually or control this explicitly
    setIsTimeOut(false);
    endTimeRef.current = null;
  };

  const startTimer = () => {
    if (!isPaused || seconds <= 0) return;
    endTimeRef.current = Date.now() + seconds * 1000;
    setIsPaused(false);
  };

  const stopTimer = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current!);
    const duration = DURATIONS[mode];
    setSeconds(duration);
    setIsPaused(true);
    setIsTimeOut(false);
    endTimeRef.current = null;
  };

  const addMinute = () => {
    setSeconds((prev) => prev + 60);
  
    if (isTimeOut) {
      // Clear timeout and resume countdown
      setIsTimeOut(false);
      setIsPaused(false);
      endTimeRef.current = Date.now() + (60 * 1000); // Start from 1 minute
    } else if (!isPaused && endTimeRef.current) {
      endTimeRef.current += 60000; // Add 1 minute to the countdown
    }
  };

  const subtractMinute = () => {
    setSeconds((prev) => {
      const newTime = Math.max(0, prev - 60);
      if (!isPaused && endTimeRef.current) {
        endTimeRef.current = Math.max(Date.now(), endTimeRef.current - 60000);
      }
      return newTime;
    });
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
            onClick={subtractMinute}
            className="bg-white opacity-70 text-center rounded-lg font-bold w-8 h-8 hover:opacity-90"
          >
            -
          </button>
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
          <button
            onClick={addMinute}
            className="bg-white opacity-70 text-center rounded-lg font-bold w-8 h-8 hover:opacity-90"
          >
            +
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
              <button onClick={startTimer}>Start</button>
              <button onClick={stopTimer}>Stop</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
