import "./style.css";
export class GameWindow {
  public window: HTMLDivElement;
  constructor() {
    this.createGameWindow();
    this.window = this.getGameWindow();
  }
  private createGameWindow(): void {
    if (!document.getElementById("game-window")) {
      const gameWindow = document.createElement("div");
      gameWindow.id = "game-window";

      const body = document.getElementsByTagName("body")[0];
      body.appendChild(gameWindow);
    }
  }

  private getGameWindow(): HTMLDivElement {
    let gameWindow = document.getElementById("game-window");
    if (!gameWindow) {
      this.createGameWindow();
      gameWindow = document.getElementById("game-window");
    }
    return gameWindow as HTMLDivElement;
  }
}
