type KeyboardProps = {
  onGuess: (letter: string) => void;
  usedLetters: string[];
  disabled?: boolean;
};

const Keyboard = ({ onGuess, usedLetters, disabled }: KeyboardProps) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2">
          {row.map((letter) => {
            const isUsed = usedLetters.includes(letter);

            return (
              <button
                key={letter}
                disabled={isUsed || disabled}
                onClick={() => onGuess(letter)}
                className={`w-8 h-10 rounded-lg text-sm font-semibold transition
                    ${
                      isUsed
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-200 hover:bg-blue-300 text-blue-800"
                    }
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                  `}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
