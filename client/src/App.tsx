import { Game } from "./components/game/game";
import { Header } from "./components/header";

export default function App(){
  return(
        <div className="h-screen w-screen overflow-hidden">
          <Header/>
          <Game/>
        </div>
  );
}