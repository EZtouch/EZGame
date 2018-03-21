// Import here Polyfills if needed. Recommended core-js (yarn add --dev core-js)
// import "core-js/fn/array.find"
// ...
import { Engine } from "./engine";
import { GameWindow } from "./game-window";
import { SplashScreen } from "./splash-screen";

export class EZGameEngine {
  public gameWindow: HTMLDivElement;
  public splashScreen: SplashScreen;
  public engine: Engine;

  constructor() {
    this.engine = new Engine();
    console.log("Engine started!");

    this.gameWindow = new GameWindow().window;
    console.log("Game Window started!");

    this.splashScreen = new SplashScreen();
    console.log("Splash Screen started!");
  }
}
