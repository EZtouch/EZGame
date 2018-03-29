import "./style.css";
export class SplashScreen {
  public loadingPercentage: number = 0;
  public minimumLoadingTime: number = 0;
  public currentlyLoadingMsg: string = "Starting up the game.";
  constructor() {
    this.draw();
  }
  public draw(): void {
    console.log("Drawing splash screen.");
    const loadingScreen: HTMLDivElement = document.createElement("div");
    loadingScreen.innerHTML = "I am a splash screen :)";
    loadingScreen.id = "splash-screen";
    const alignmentWindow: HTMLDivElement = document.createElement("div");
    alignmentWindow.id = "alignment-window";
    alignmentWindow.appendChild(loadingScreen);
    const gameWindow = document.getElementById("game-window");
    if (gameWindow) {
      gameWindow.appendChild(alignmentWindow);
    }
  }
  public dismiss(): void {
    console.log("Dismissing splash screen.");
  }
}
