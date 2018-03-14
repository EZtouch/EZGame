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
    loadingScreen.style.width = "50vmin";
    loadingScreen.style.height = "50vmin";
    loadingScreen.style.background = "grey";
    loadingScreen.style.color = "white";
    loadingScreen.innerHTML = "I am a splash screen :)";
    loadingScreen.id = "splash-screen";
    const alignmentWindow: HTMLDivElement = document.createElement("div");
    alignmentWindow.style.display = "flex";
    alignmentWindow.style.alignItems = "center";
    alignmentWindow.style.justifyContent = "center";
    alignmentWindow.style.textAlign = "center";
    alignmentWindow.style.verticalAlign = "center";
    alignmentWindow.style.height = "100%";
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
