type PuzzleBoardProps = {
  puzzle: string;
  revealedLetters: string[];
};

const PuzzleBoard = ({ puzzle, revealedLetters }: PuzzleBoardProps) => {
  const words = puzzle.split(" ");

  return (
    <div className="flex flex-wrap gap-x-14 gap-y-3 justify-center p-4 bg-green-600">
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="flex gap-2">
          {word.split("").map((char, letterIndex) => {
            const upperChar = char.toUpperCase();
            const isRevealed = revealedLetters.includes(upperChar);

            return (
              <div
                key={letterIndex}
                className={`w-10 h-14 flex items-center justify-center text-xl font-bold border select-none pointer-events-none
                  bg-white border-gray-400 shadow-sm
                  ${isRevealed ? "text-black" : "text-transparent"}
                `}
              >
                {upperChar}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PuzzleBoard;
