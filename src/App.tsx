import { useEffect, useRef, useState } from "react";
import BellSound from "./assets/elevator-bell.mp3";
import Clock from "./components/Clock";
import MorningBackground from "./assets/background-morning.jpg";
import AfternoonBackground from "./assets/background-afternoon.jpg";
import EveningBackground from "./assets/background-evening.jpg";
import NightBackground from "./assets/background-night.jpg";
function App() {
  type currentTime = "morning" | "afternoon" | "evening" | "night";
  type TimerMode = "normal" | "short" | "long";
  const [seconds, setSeconds] = useState(25 * 60);
  const [isPaused, setIsPaused] = useState(true);
  const [isTimeOut, setisTimeOut] = useState(false);
  const [mode, setMode] = useState<TimerMode>("normal");
  const backgroundRef = useRef<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (seconds > 0 && !isPaused) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    if (seconds === 0 && !isTimeOut) {
      showNotification();
      setisTimeOut(true);
      setIsPaused(true);
      playSoundEffect();
    }

    return () => {
      clearInterval(interval);
      stopSoundEffect();
    };
  }, [isPaused, isTimeOut, seconds]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("PotatoTimer", {
        body: "Your time is up!",
      });
    }
  };

  function getTimeOfDay(): currentTime {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "afternoon";
    } else if (currentHour >= 17 && currentHour < 20) {
      return "evening";
    } else {
      return "night";
    }
  }
  switch (getTimeOfDay()) {
    case "morning": {
      backgroundRef.current = MorningBackground;
      break;
    }
    case "afternoon": {
      backgroundRef.current = AfternoonBackground;
      break;
    }
    case "evening": {
      backgroundRef.current = EveningBackground;
      break;
    }
    case "night": {
      backgroundRef.current = NightBackground;
      break;
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (isTimeOut) {
    document.title = "Buzzzzz!";
  } else if (!isPaused) {
    document.title = "(" + formatTime(seconds) + ") PotatoTimer";
  } else {
    document.title = "PotatoTimer";
  }

  const playSoundEffect = () => {
    const audio = new Audio(BellSound);
    audio.play();
  };

  const stopSoundEffect = () => {
    const audio = new Audio(BellSound);
    audio.pause();
    audio.currentTime = 0;
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleBreak = () => {
    setMode("short");
    setSeconds(5 * 60);
    handleStart();
  };

  const handleLongBreak = () => {
    setMode("long");
    setSeconds(10 * 60);
    handleStart();
  };

  const handlePomodoro = () => {
    setMode("normal");
    setSeconds(25 * 60);
    handleStart();
  };

  const handleStart = () => {
    setIsPaused(false);
    setisTimeOut(false);
  };

  const handleReset = () => {
    switch (mode) {
      case "normal": {
        setSeconds(25 * 60);
        break;
      }
      case "short": {
        setSeconds(5 * 60);
        break;
      }
      case "long": {
        setSeconds(10 * 60);
        break;
      }
    }
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundRef.current})` }}
    >
      <div className="flex justify-center items-center flex-col h-screen bg-[rgba(255,255,255,0.1)] gap-2">
        <div className="flex gap-2">
          {[5, 10, 25].map((number) => {
            let f: () => void = handlePomodoro
            if (number == 5) {
              f = handleBreak;
            } else if (number == 10) {
              f = handleLongBreak;
            }
            return (
              <button
                className="bg-[rgba(255,255,255,0.7)] text-center rounded-lg font-bold w-8 h-8 hover:bg-[rgba(255,255,255,0.9)]"
                key={`timer-mode-${number}`}
                onClick={f}
              >
                {number}
              </button>
            );
          })}
        </div>
        <div className="relative w-[300px] h-[300px]">
          <Clock />
        </div>
        <div className="flex justify-center">
          <div className="bg-[rgba(255,255,255,0.7)] shadow px-3 py-1 rounded-lg">
            <h1 className="text-6xl text-center border-b border-b-black">
              {formatTime(seconds)}
            </h1>
            <div className="flex gap-2 justify-between">
              <button onClick={handleStart}>Start</button>
              <button onClick={handlePause}>Stop</button>
              <button onClick={handleReset}>Reset</button>
              {/* <button onClick={() => {setSeconds(1)}}>Test</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
