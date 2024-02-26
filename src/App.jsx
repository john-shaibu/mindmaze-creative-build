import { useState } from "react";
import { StartScreen, PlayScreen } from "./Screens";
import './App.css'

function App() {
  const [gameState, setGameState] = useState("start");

  switch (gameState) {
    case "start":
      return <StartScreen start={() => setGameState("play")} w="max-content" />;
    case "play":
      return <PlayScreen end={() => setGameState("start")} />;
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
