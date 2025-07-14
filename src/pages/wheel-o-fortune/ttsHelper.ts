export const speakDesiUncle = (text: string) => {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  // pick an indian-english voice if available (may vary by browser/system)
  const desiVoice =
    voices.find((v) =>
      /en-IN|Indian English/.test(v.lang + v.name)
    ) || voices.find((v) => v.lang.startsWith("en"));

  const utterance = new SpeechSynthesisUtterance(text);
  if (desiVoice) {
    utterance.voice = desiVoice;
  }

  utterance.pitch = 2;
  utterance.rate = 0.95;
  utterance.volume = 1;

  synth.cancel(); // stop any ongoing speech
  synth.speak(utterance);
};

export const speakVietnamese = (text: string) => {
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  const vietnameseVoice =
    voices.find((v) =>
      /vi-VN|Vietnamese/.test(v.lang + v.name)
    ) || voices.find((v) => v.lang.startsWith("vi"));

  const utterance = new SpeechSynthesisUtterance(text);
  if (vietnameseVoice) {
    utterance.voice = vietnameseVoice;
  }

  utterance.pitch = 1.2; // a soft gentle tone
  utterance.rate = 0.7; // steady like a calm river
  utterance.volume = 1; // full-hearted voice 🌼

  synth.cancel(); // hush any previous whispers
  synth.speak(utterance);
};
