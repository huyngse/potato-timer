import { useEffect, useMemo, useRef, useState } from "react";
import Clock from "@/components/Clock";
import { TimerMode } from "@/types/clock";
import {
  formatTime,
  getBackground,
  getTimeOfDay,
  playSoundEffect,
  showNotification,
} from "@/utils/clock";
import FrutigerCard from "@/components/FrutigerCard";
import PaperButton from "@/components/PaperButton";

// Time Constants
const DURATIONS: Record<TimerMode, number> = {
  normal: 25 * 60,
  short: 5 * 60,
  long: 10 * 60,
};

const TimerPage = () => {
  const [seconds, setSeconds] = useState(DURATIONS.normal);
  const [isPaused, setIsPaused] = useState(true);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [mode, setMode] = useState<TimerMode>("normal");
  const [hideContainer, setHideContainer] = useState(false);

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

  useEffect(() => {
    if (isTimeOut) {
      playSoundEffect();
      showNotification();
    }
  }, [isTimeOut])

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
      endTimeRef.current = Date.now() + 60 * 1000; // Start from 1 minute
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

  const handleTogglePomodoro = () => {
    setHideContainer((prev) => !prev);
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex justify-center items-center flex-col h-screen bg-[rgba(255,255,255,0.1)] ">
        <FrutigerCard
          className={`flex flex-col items-center gap-2 p-0 ${
            hideContainer && "invisible w-full"
          }`}
          hover={false}
          variant="primary"
          style={{
            padding: 0,
          }}
        >
          {/* Mode Buttons */}
          <div className="flex gap-1 px-5 py-2 bg-white/80 rounded-lg">
            <PaperButton onClick={subtractMinute} variant="danger">
              -
            </PaperButton>
            <PaperButton onClick={() => switchMode("short")}>5</PaperButton>
            <PaperButton onClick={() => switchMode("long")}>10</PaperButton>
            <PaperButton onClick={() => switchMode("normal")}>25</PaperButton>
            <PaperButton onClick={addMinute} variant="success">
              +
            </PaperButton>
          </div>

          {/* Clock */}
          <div
            className="my-5 flex justify-center"
            style={{ visibility: "visible" }}
          >
            <div
              className="rounded-full cursor-pointer"
              onClick={handleTogglePomodoro}
            >
              <Clock />
            </div>
          </div>

          {/* Timer & Controls */}
          <div className="flex justify-center w-full">
            <div className="px-16 py-3 bg-white/80 rounded-lg w-full">
              <h1 className="text-6xl text-center border-b border-b-black">
                {formatTime(seconds)}
              </h1>
              <div className="flex gap-2 justify-between">
                <button
                  onClick={startTimer}
                  className="hover:text-blue-900 duration-300"
                >
                  Start
                </button>
                <button
                  onClick={stopTimer}
                  className="hover:text-blue-900 duration-300"
                >
                  Stop
                </button>
                <button
                  onClick={handleReset}
                  className="hover:text-blue-900 duration-300"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </FrutigerCard>
      </div>
    </div>
  );
};

export default TimerPage;
