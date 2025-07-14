type PuzzleBoardProps = {
  puzzle: string;
  revealedLetters: string[];
};

const PuzzleBoard = ({ puzzle, revealedLetters }: PuzzleBoardProps) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 justify-center">
      {puzzle.split("").map((char, index) => {
        const upperChar = char.toUpperCase();
        const isRevealed = revealedLetters.includes(upperChar);
        const isSpace = char === " ";

        return (
          <div
            key={index}
            className={`w-10 h-14 flex items-center justify-center text-xl font-bold rounded-2xl border select-none pointer-events-none 
            ${
              isSpace
                ? "bg-transparent border-none"
                : "bg-white border-gray-400 shadow-sm"
            }
            ${isRevealed ? "text-black" : "text-transparent"}
          `}
          >
            {isSpace ? "" : upperChar}
          </div>
        );
      })}
    </div>
  );
};

export default PuzzleBoard;
