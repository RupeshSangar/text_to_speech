import { useEffect, useState } from "react";

const TextToSpeech = () => {
  const [text, setText] = useState<string>(
    "Hello, this is a Text-to-Speech POC."
  );
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [volume, setVolume] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSpeakClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoiceObj = voices.find(
      (voice) => voice.name === selectedVoice
    );

    if (selectedVoiceObj) {
      utterance.voice = selectedVoiceObj;
    }

    utterance.volume = volume;
    utterance.pitch = pitch;

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const getVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);
    };

    // Fetch available voices when the component mounts
    getVoices();

    // Update the list of voices when voices change (e.g., user changes system settings)
    window.speechSynthesis.addEventListener("voiceschanged", getVoices);

    // Clean up event listener on component unmount
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", getVoices);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log(voices);
  return (
    <div>
      <h1>Text-to-Speech POC</h1>
      <textarea rows={4} cols={50} value={text} onChange={handleInputChange} />
      <br />
      <label>
        Select Voice:
        <select
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Volume:
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        {volume}
      </label>
      <br />
      <label>
        Pitch:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(parseFloat(e.target.value))}
        />
        {pitch}
      </label>
      <br />
      <button onClick={handleSpeakClick}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
