import { StartScreen, PlayScreen } from "./Screens";
import './App.css'
import { useGlobalState } from "./state/useGlobalState";
// import { loadSounds } from "./utils";
// import { useAsync } from "./hooks/useAsync";

function App() {
  const { globalState, setGameState, endGame } = useGlobalState()
  const { gameState } = globalState;

  switch (gameState) {
    case "start":
      return <StartScreen start={() => setGameState("play")} w="max-content" />;
    case "play":
      return <PlayScreen end={(gameParams) => endGame(gameParams)} />;
      return
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
