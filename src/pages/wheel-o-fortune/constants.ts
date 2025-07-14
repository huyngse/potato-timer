export const VOWEL_COST = 250;
export const VOWELS = ["A", "E", "I", "O", "U"];

export const puzzles = [
  "TU8gQ1VBIEhPSSBOSEFQ",
  "RE9JIE1PSSBUVSBEVVk=",
  "S0lOSCBURSBUSEkgVFJVT05H",
];

export const FINAL_ROUND = 3;

// export const DIALOGUES = {
//   bankrupt: [
//     "Arre beta your luck went bankrupt! Better luck next time, ok?",
//     "Oh no! Bankrupt! Kya kismet hai yaar...",
//     "Beta, paisa gaya... lekin hausla mat khona!",
//     "Oof! Bankrupt! Ab toh chai bhi udhaar pe ayegi."
//   ],
//   loseTurn: [
//     "Oho! You lost your turn. Kya karen, zindagi hai.",
//     "Turn chala gaya... but hope is still alive!",
//     "Beta patience is key. Wait for your chance!",
//     "No turn for you! Go make some chai and come back."
//   ],
//   spinSuccess: [
//     (value: string) => `Wah wah! You got ${value}! Ab mummy ko proud feel karao.`,
//     (value: string) => `Nice spin! ${value} in your pocket!`,
//     (value: string) => `Bhai wah, ${value}! Kismet chamak gayi.`,
//     (value: string) => `Aree haan, ${value}! Kya baat hai!`
//   ],
//   correctLetter: [
//     (letter: string) => `Aree wah! Letter ${letter} is there. Full marks, beta!`,
//     (letter: string) => `Sahi pakde hain! ${letter} is in the puzzle!`,
//     (letter: string) => `${letter} is correct! Smart work.`,
//     (letter: string) => `Letter ${letter} mila! Mazaa aa gaya.`
//   ],
//   wrongLetter: [
//     (letter: string) => `Oh ho ho! ${letter} is not in the puzzle...`,
//     (letter: string) => `Nahi beta, ${letter} is wrong. Try again!`,
//     (letter: string) => `Nope! ${letter} is missing. Keep guessing.`,
//     (letter: string) => `Galat jawab. ${letter} is not there.`
//   ],
//   phraseCorrect: [
//     (name: string) => `Shabash ${name}! Got it! Genius level yaar.`,
//     (name: string) => `${name}, you nailed it! Full on filmy hero/heroin.`,
//     (name: string) => `Wah ${name}! Brain chal gaya rocket ki tarah.`,
//     (name: string) => `${name}, you cracked it! Kya dimag lagaya hai.`
//   ],
//   phraseWrong: [
//     "Nahi beta... that is not the phrase. Try again next time.",
//     "Oops! Wrong guess. Kya karein, zindagi hai.",
//     "Not the correct phrase! Tohda aur socho.",
//     "Aree galat bol diya! Puzzle abhi bhi zinda hai."
//   ],
//   roundStart: [
//     (round: number) => `Ok chalo! Round number ${round} is starting. Get ready!`,
//     (round: number) => `Round ${round} aaya hai! Tayar ho jao sab log.`,
//     (round: number) => `Naya round, naye chance! Round ${round} begins!`,
//     (round: number) => `Doston, round ${round} start ho gaya! Full focus now.`
//   ],
//   gameOver: [
//     "Game over doston! Time to count your blessings and your score!",
//     "Ho gaya kaam khatam! Dekhte hain kaun jeeta.",
//     "Game finished! Sabko mithai khila dena.",
//     "End ho gaya! Score check karlo abhi."
//   ]
// };

export const DIALOGUES = {
  bankrupt: [
    "ôi trời ơi, hết sạch tiền rồi! lần sau may mắn hơn nha~",
    "ui da! phá sản rồi... số hơi xui ha~",
    "hết tiền rồi bạn ơi... nhưng đừng buồn, vẫn còn hi vọng mà~",
    "ơ kìa! phá sản luôn! chắc mai phải uống trà chịu rồi~"
  ],
  loseTurn: [
    "ôi không! mất lượt rồi... cuộc sống mà~",
    "lượt trôi mất tiêu... nhưng hy vọng vẫn còn nha~",
    "kiên nhẫn là chìa khoá đó bạn! chờ cơ hội tới nhen~",
    "không được chơi lượt này đâu! đi pha trà uống cho đỡ buồn đi~"
  ],
  spinSuccess: [
    (value: string) => `woa~ quay được ${value} đó! giờ làm tớ tự hào nha~`,
    (value: string) => `quay ngon lành luôn! ${value} vào túi rồi đó~`,
    (value: string) => `trời ơi, ${value} luôn kìa! hên quá trời~`,
    (value: string) => `úi chà, ${value} nha! hay quá luôn~`
  ],
  correctLetter: [
    (letter: string) => `ui giỏi quá! có chữ ${letter} trong đó đó~`,
    (letter: string) => `đúng rồi nha! chữ ${letter} có trong câu đó~`,
    (letter: string) => `${letter} là chính xác luôn! thông minh ghê~`,
    (letter: string) => `có chữ ${letter} rồi nè! vui ghê á~`
  ],
  wrongLetter: [
    (letter: string) => `ui khônggg... không có chữ ${letter} đâu~`,
    (letter: string) => `chữ ${letter} không đúng rồi bạn ơi, thử lại nha~`,
    (letter: string) => `không trúng rồi! chữ ${letter} bị thiếu mất rồi~`,
    (letter: string) => `trật lất rồi. không có chữ ${letter} đâu nha~`
  ],
  phraseCorrect: [
    (name: string) => `giỏi quá trời luôn ${name}! đoán trúng rồi nha~`,
    (name: string) => `${name} ơi, đoán đúng rồi! như anh hùng phim luôn~`,
    (name: string) => `trời ơi ${name}! não chạy vèo vèo như tên lửa vậy á~`,
    (name: string) => `${name} đoán ra rồi nè! xịn quá trời luôn á~`
  ],
  phraseWrong: [
    "ui không~ câu đó không đúng đâu. lần sau thử tiếp nha~",
    "sai mất rồi... nhưng không sao, đời còn dài~",
    "chưa đúng đâu! suy nghĩ thêm chút nữa nhen~",
    "ơ trật rồi! câu đố vẫn chưa chịu thua đâu~"
  ],
  roundStart: [
    (round: number) => `nào nào! bắt đầu vòng số ${round} nha~ sẵn sàng chưa?`,
    (round: number) => `vòng ${round} tới rồi! mọi người chuẩn bị nào~`,
    (round: number) => `vòng mới nè, cơ hội mới! bắt đầu vòng ${round} nha~`,
    (round: number) => `cả nhà ơi~ vòng ${round} khởi động rồi đó! tập trung nha~`
  ],
  gameOver: [
    "hết game rồi mọi người ơi~ giờ là lúc xem ai thắng nè~",
    "xong hết rồi! để xem ai là người chiến thắng nha~",
    "trò chơi kết thúc! chuẩn bị ăn mừng thôi nào~",
    "hết giờ rồi! kiểm tra điểm số liền đi nào~"
  ]
};