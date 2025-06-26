import { useEffect, useState } from "react";

const HAND_DEG_OFFSET = -90;
const Clock = () => {
  const [now, setNow] = useState(Date.now());
  const [prevSecond, setPrevSecond] = useState(0);
  const [secondRotation, setSecondRotation] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const update = () => {
      const newTime = new Date();
      const seconds = newTime.getSeconds();
      const secondDelta = (seconds - prevSecond + 60) % 60;

      // Increment rotation by delta * 6 (6 degrees per second)
      setSecondRotation((prev) => prev + secondDelta * 6);
      setPrevSecond(seconds);
      setNow(newTime.getTime());

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrameId);
  }, [prevSecond]);

  const time = new Date(now);
  const hourDeg =
    time.getHours() * 30 + time.getMinutes() * 0.5 + HAND_DEG_OFFSET;
  const minuteDeg = time.getMinutes() * 6 + HAND_DEG_OFFSET;
  // const secondDeg = time.getSeconds() * 6 + HAND_DEG_OFFSET;

  // Hour markers data
  const hourMarkers = [
    { hour: 12, angle: 0 },
    { hour: 1, angle: 30 },
    { hour: 2, angle: 60 },
    { hour: 3, angle: 90 },
    { hour: 4, angle: 120 },
    { hour: 5, angle: 150 },
    { hour: 6, angle: 180 },
    { hour: 7, angle: 210 },
    { hour: 8, angle: 240 },
    { hour: 9, angle: 270 },
    { hour: 10, angle: 300 },
    { hour: 11, angle: 330 },
  ];

  return (
    <div className="relative">
      {/* Watch Container */}
      <div className="relative w-64 h-64 mx-auto">
        {/* Outer Shadow */}
        <div className="absolute inset-0 rounded-full bg-linear-to-br from-gray-600 to-black shadow-2xl transform rotate-45"></div>

        {/* Main Watch Face */}
        <div
          className="relative w-full h-full rounded-full border-4 md:border-8 border-black shadow-inner overflow-hidden"
          style={{
            background: `url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3358&q=80') center center`,
            backgroundSize: "cover",
            boxShadow: `
              inset 8px 8px 20px rgba(0,0,0,0.3),
              inset 4px 4px 12px rgba(0,0,0,0.6),
              8px 8px 16px rgba(0,0,0,0.4),
              16px 16px 32px rgba(0,0,0,0.3)
            `,
          }}
        >
          {/* Inner Ring */}
          <div className="absolute inset-0 z-10 rounded-full border-4 border-white"></div>

          {/* Highlight Ring */}
          <div
            className="absolute -inset-1 md:-inset-2 rounded-full"
            style={{
              boxShadow: "-2px -2px 8px rgba(255,255,255,0.6)",
            }}
          ></div>

          {/* SEIKO Label */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-black font-bold text-sm tracking-wider">
            SEIKO
          </div>

          {/* Hour Markers */}
          {hourMarkers.map(({ hour, angle }) => (
            <div
              key={hour}
              className="absolute w-0.5 h-5 bg-black origin-bottom"
              style={{
                top: "2px",
                left: "50%",
                transform: `translateX(-50%) rotate(${angle}deg)`,
                transformOrigin: "50% 119px",
              }}
            >
              {/* Hour number */}
              <div
                className="absolute top-5 left-1/2 transform -translate-x-1/2 text-black font-semibold text-xs"
                style={{
                  transform: `translateX(-50%) rotate(-${angle}deg)`,
                }}
              >
                {hour}
              </div>
            </div>
          ))}

          {/* Minute Markers */}
          {Array.from({ length: 60 }, (_, i) => (
            <div
              key={i}
              className={`absolute origin-bottom ${
                i % 5 === 0 ? "hidden" : "w-0.5 h-3 bg-black/60"
              }`}
              style={{
                top: "2px",
                left: "50%",
                transform: `translateX(-50%) rotate(${i * 6}deg)`,
                transformOrigin: "50% 119px",
              }}
            />
          ))}

          {/* Hour Hand */}
          <div
            className="absolute w-16 h-1.5 bg-black rounded-r-full origin-left shadow-lg"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(0px, -50%) rotate(${hourDeg}deg)`,
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
            }}
          />

          {/* Minute Hand */}
          <div
            className="absolute w-24  h-1 bg-black rounded-r-full origin-left shadow-lg"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(0px, -50%) rotate(${minuteDeg}deg)`,
              filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
            }}
          />

          {/* Second Hand */}
          <div
            className="absolute w-28 h-0.5 bg-red-600 origin-left shadow-lg transition-transform duration-75 ease-out rounded-r-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(0px, -50%) rotate(${secondRotation + HAND_DEG_OFFSET}deg)`,
              filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.5))",
            }}
          />

          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg border-2 border-white/20"></div>

          {/* Digital Time Display */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded-sm text-xs font-mono">
            {time.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
