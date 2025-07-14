import { useState } from "react";

type WheelProps = {
  onSpinResult: (value: string) => void;
  disabled?: boolean;
};

const segments = [
  "$100",
  "$200",
  "$300",
  "$400",
  "$500",
  "BANKRUPT",
  "LOSE TURN",
  "$600",
  "$700",
  "$800",
];

const colors = ["#7432a2", "#01adfb", "#ee1000", "#09a755", "#040404"];

const Wheel = ({ onSpinResult, disabled }: WheelProps) => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (spinning || disabled) return;

    const segmentCount = segments.length;
    const anglePerSegment = 360 / segmentCount;

    const minSpins = 5;
    const maxSpins = 7;
    const spins =
      minSpins + Math.floor(Math.random() * (maxSpins - minSpins + 1));

    const extraDegrees = Math.floor(Math.random() * 360); // makes the result feel random
    const totalRotation = spins * 360 + extraDegrees;

    setRotation((prev) => prev + totalRotation); // cumulative rotation!
    setSpinning(true);

    setTimeout(() => {
      setSpinning(false);

      // figure out final angle after all rotation
      const finalAngle = (rotation + totalRotation) % 360;
      const pointerAngle = 270;
      const adjustedAngle = (pointerAngle - finalAngle + 360) % 360;

      const landedIndex = Math.floor(adjustedAngle / anglePerSegment);
      const result = segments[landedIndex];

      onSpinResult(result);
    }, 10000);
  };

  const segmentCount = segments.length;
  const sliceAngle = 360 / segmentCount;
  const conicStops = segments
    .map((_, i) => {
      const color = colors[i % colors.length];
      const start = i * sliceAngle;
      const end = start + sliceAngle;
      return `${color} ${start}deg ${end}deg`;
    })
    .join(", ");

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl">
        {/* spinning wheel */}
        <div
          className="absolute inset-0 transition-transform duration-[10s] ease-out rounded-full"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {/* background slices */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(${conicStops})`,
            }}
          />

          {/* labels */}
          {segments.map((val, i) => {
            const angle = i * sliceAngle + sliceAngle / 2;
            return (
              <div
                key={i}
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  style={{
                    transform: `translateY(-100px) rotate(0deg)`,
                    transformOrigin: "center",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    color: "white",
                    whiteSpace: "nowrap",
                  }}
                >
                  {val}
                </div>
              </div>
            );
          })}
        </div>

        {/* center cap */}
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 z-10" />

        {/* pointer on the left side (at 270°) 🌻 */}
        <div className="absolute left-[0px] top-1/2 transform -translate-y-1/2 z-20 rotate-180">
          <div className="w-0 h-0 border-t-8 border-b-8 border-r-[20px] border-t-transparent border-b-transparent border-r-[#fdf806]" />
        </div>
      </div>

      {/* spin button */}
      <button
        onClick={handleSpin}
        disabled={spinning || disabled}
        className={`px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-transform active:scale-95 duration-300 ${
          spinning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {spinning ? "Đang xoay..." : "💥 Xoay Nón 💥"}
      </button>
    </div>
  );
};

export default Wheel;
