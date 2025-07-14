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
  