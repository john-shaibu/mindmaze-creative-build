import { useState } from "react";
import { StartScreen, PlayScreen } from "./Screens";
import './App.css'
import { useGlobalState } from "./state/useGlobalState";

function App() {
  const { globalState, setGameState, endGame } = useGlobalState()
  const { gameState } = globalState;
  switch (gameState) {
    case "start":
      return <StartScreen start={() => setGameState("play")} w="max-content" />;
    case "play":
      return <PlayScreen end={() => endGame()} />;
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
