// import Home from "./components/Home";
import SpeechToText from "./components/speechToText";
import TextToSpeech from "./components/textToSpeech";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* <Home /> */}
      <TextToSpeech />
      <SpeechToText />
    </div>
  );
};

export default App;
