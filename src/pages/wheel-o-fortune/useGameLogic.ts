// useGameLogic.ts
import { useEffect, useState } from "react";
import { VOWEL_COST, VOWELS, puzzles, FINAL_ROUND, DIALOGUES } from "./constants";
import { speakVietnamese } from "./ttsHelper";

export type Player = {
    id: number;
    name: string;
    score: number;
    roundScore: number;
};

const getRandomLine = (lines: any[]) =>
    lines[Math.floor(Math.random() * lines.length)];

export const useGameLogic = () => {
    const [revealedLetters, setRevealedLetters] = useState(["L", "O"]);
    const [usedLetters, setUsedLetters] = useState([...revealedLetters]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [currentSpinValue, setCurrentSpinValue] = useState<string | null>(null);
    const [buyVowelMode, setBuyVowelMode] = useState(false);
    const [round, setRound] = useState(1);
    const [puzzle, setPuzzle] = useState(atob(puzzles[0]));
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        window.speechSynthesis.getVoices();
    }, []);


    const currentPlayer = players[currentPlayerIndex];

    const nextPlayer = () => {
        setBuyVowelMode(false);
        setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    };

    const revealLetter = (letter: string) => {
        setRevealedLetters((prev) => [...prev, letter]);
    };

    const handleSpinResult = (value: string) => {
        if (value === "BANKRUPT") {
            speakVietnamese(getRandomLine(DIALOGUES.bankrupt));
            updatePlayer(currentPlayerIndex, { roundScore: 0 });
            nextPlayer();
        } else if (value === "LOSE TURN") {
            speakVietnamese(getRandomLine(DIALOGUES.loseTurn));
            nextPlayer();
        } else {
            speakVietnamese(getRandomLine(DIALOGUES.spinSuccess)(value));
            setCurrentSpinValue(value);
        }
    };

    const updatePlayer = (index: number, updates: Partial<Player>) => {
        setPlayers((prev) => {
            const copy = [...prev];
            copy[index] = { ...copy[index], ...updates };
            return copy;
        });
    };

    const handleGuess = (letter: string) => {
        const isCorrect = puzzle.includes(letter);
        setUsedLetters((prev) => [...prev, letter]);
        if (isCorrect) {
            speakVietnamese(getRandomLine(DIALOGUES.correctLetter)(letter));
        } else {
            speakVietnamese(getRandomLine(DIALOGUES.wrongLetter)(letter));
        }

        if (buyVowelMode && VOWELS.includes(letter)) {
            updatePlayer(currentPlayerIndex, {
                roundScore: currentPlayer.roundScore - VOWEL_COST,
            });

            if (isCorrect) revealLetter(letter);
            setBuyVowelMode(false);
            nextPlayer();
            return;
        }

        if (!currentSpinValue) return;

        if (currentSpinValue === "BANKRUPT") {
            updatePlayer(currentPlayerIndex, { roundScore: 0 });
        } else if (isCorrect) {
            const money = parseInt(currentSpinValue.replace("$", ""));
            updatePlayer(currentPlayerIndex, {
                roundScore: currentPlayer.roundScore + money,
            });
            revealLetter(letter);

            const allLettersRevealed = puzzle
                .split("")
                .every((char) => char === " " || revealedLetters.includes(char) || char === letter);

            if (allLettersRevealed) {
                updatePlayer(currentPlayerIndex, {
                    score: currentPlayer.score + currentPlayer.roundScore,
                });

                setTimeout(() => {
                    alert(`🎉 ${currentPlayer.name} solved the puzzle!`);
                    startNewRound();
                }, 1000);
                return;
            }
        }

        setCurrentSpinValue(null);
        nextPlayer();
    };

    const handleGuessPhrase = () => {
        const guess = window.prompt("Đoán đi bạn ơi?");
        if (!guess) return;

        const normalizedGuess = guess.trim().toUpperCase();

        if (normalizedGuess === puzzle) {
            speakVietnamese(getRandomLine(DIALOGUES.phraseCorrect)(currentPlayer.name));
        } else {
            speakVietnamese(getRandomLine(DIALOGUES.phraseWrong));
        }

        if (normalizedGuess === puzzle) {
            updatePlayer(currentPlayerIndex, {
                score: currentPlayer.score + currentPlayer.roundScore,
            });
            setRevealedLetters(puzzle.split(""));

            setTimeout(() => {
                alert(`🎉 ${currentPlayer.name} đoán đúng rồi!`);
                startNewRound();
            }, 1000);
        } else {
            alert(`😢 U là trời, đoán sai rồi.`);
            nextPlayer();
        }
    };

    const startNewRound = () => {
        const nextRound = round + 1;

        // ✨ move roundScore to score before resetting
        setPlayers((prev) =>
            prev.map((player) => ({
                ...player,
                score: player.score + player.roundScore,
                roundScore: 0,
            }))
        );

        if (nextRound > FINAL_ROUND) {
            speakVietnamese(getRandomLine(DIALOGUES.gameOver));
            setIsGameOver(true);
            return;
        }
        speakVietnamese(getRandomLine(DIALOGUES.roundStart)(nextRound));

        const nextPuzzle = atob(puzzles[(nextRound - 1) % puzzles.length]);

        setRound(nextRound);
        setPuzzle(nextPuzzle);
        setRevealedLetters([]);
        setUsedLetters([]);
        setCurrentSpinValue(null);
        setBuyVowelMode(false);
    };

    return {
        isGameOver,
        players,
        setPlayers,
        revealedLetters,
        usedLetters,
        puzzle,
        currentPlayer,
        currentPlayerIndex,
        currentSpinValue,
        buyVowelMode,
        canBuyVowel:
            currentPlayer?.roundScore >= VOWEL_COST && currentSpinValue === null,
        remainingVowels: VOWELS.filter((v) => !usedLetters.includes(v)),
        handleGuess,
        handleGuessPhrase,
        handleSpinResult,
        setBuyVowelMode,
    };
};
