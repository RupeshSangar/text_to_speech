// web-speech-api.d.ts

interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition; // For compatibility with some browsers (e.g., Safari)
  }
  
  interface SpeechRecognition {
    onresult: (event: SpeechRecognitionEvent) => void;
    start: () => void;
    stop: () => void;
  }
  
  interface SpeechRecognitionEvent {
    results: {
      transcript: string;
    }[][];
  }
  
  declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new (): SpeechRecognition;
  };
  