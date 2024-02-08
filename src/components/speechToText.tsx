import React, { useState } from "react";

const SpeechToText: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  let recognition: SpeechRecognition | null = null;

  const startListening = () => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition = new SpeechRecognition();

      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setTranscript(result);
      };

      //   recognition.onspeechend = () => {
      //     if (isListening) {
      //       // If still listening, restart recognition
      //       recognition?.start();
      //     }
      //   };

      setIsListening(true);
      recognition.start();
    } else {
      console.error("Speech recognition not supported in this browser");
    }
  };

  const stopListening = () => {
    console.log("stop");
    setIsListening(false);
    recognition?.stop();
  };

  console.log(transcript);

  return (
    <div>
      <h1>Speech-to-Text POC</h1>
      <button onClick={startListening} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopListening} disabled={!isListening}>
        Stop Listening
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechToText;
