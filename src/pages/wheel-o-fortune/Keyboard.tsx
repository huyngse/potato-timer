type KeyboardProps = {
  onGuess: (letter: string) => void;
  usedLetters: string[];
  disabled?: boolean;
  buyVowelMode?: boolean; // 🌿 new prop to control vowel access
};

const Keyboard = ({
  onGuess,
  usedLetters,
  disabled,
  buyVowelMode = false,
}: KeyboardProps) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  const vowels = ["A", "E", "I", "O", "U"];

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-2">
          {row.map((letter) => {
            const isUsed = usedLetters.includes(letter);
            const isVowel = vowels.includes(letter);
            const isConsonantBlocked = buyVowelMode && !isVowel;
            const isDisabled =
              disabled ||
              isUsed ||
              (buyVowelMode ? !isVowel : isVowel && !buyVowelMode);

            return (
              <button
                key={letter}
                disabled={isDisabled}
                onClick={() => onGuess(letter)}
                className={`w-8 h-10 rounded-lg text-sm font-semibold transition
                ${
                  isUsed
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : isVowel && !buyVowelMode
                    ? "bg-yellow-100 text-yellow-500 cursor-not-allowed border border-yellow-400"
                    : isConsonantBlocked
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-300"
                    : "bg-blue-200 hover:bg-blue-300 text-blue-800"
                }
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
              `}
                title={
                  isVowel && !buyVowelMode ? "you need to buy a vowel 🌼" : ""
                }
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
