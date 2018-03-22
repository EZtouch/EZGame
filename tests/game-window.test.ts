import { GameWindow } from "../src/game-window";

/**
 * GameWindow test
 */
describe("GameWindow test", () => {
  let gameWindow: GameWindow;

  beforeAll(() => {
    gameWindow = new GameWindow();
  });

  test("works if true is truthy", () => {
    expect(gameWindow).toBeTruthy();
  });

  test("GameWindow is instantiable", () => {
    expect(gameWindow).toBeInstanceOf(GameWindow);
  });

  test("window property is an instance of HTMLDivElement", () => {
    expect(gameWindow.window instanceof HTMLDivElement).toBeTruthy();
  });

  test("We can always get the game window, even if it doesn't exist, we create it", () => {
    // What if we remove the game window by force, then try to get it?
    (gameWindow.window as any).parentElement.removeChild(gameWindow.window);
    expect((gameWindow as any).getGameWindow() instanceof HTMLDivElement).toBeTruthy();
  });

  test("One and only one game window exists", () => {
    new GameWindow();
    new GameWindow();
    expect(document.querySelectorAll("#game-window").length).toBe(1);
  });
});
