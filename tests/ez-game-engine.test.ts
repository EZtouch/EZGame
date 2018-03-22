import { Engine } from "../src/engine";
import { EZGameEngine } from "../src/ez-game-engine";
import { SplashScreen } from "../src/splash-screen";

/**
 * EZGameEngine test
 */
describe("EZGameEngine test", () => {
  let ezGameEngine: EZGameEngine;

  beforeAll(() => {
    ezGameEngine = new EZGameEngine();
  });

  test("works if true is truthy", () => {
    expect(ezGameEngine).toBeTruthy();
  });

  test("EZGameEngine is instantiable", () => {
    expect(ezGameEngine).toBeInstanceOf(EZGameEngine);
  });

  test("engine property is an instance of Engine", () => {
    expect(ezGameEngine.engine).toBeInstanceOf(Engine);
  });

  test("splashScreen property is an instance of SplashScreen", () => {
    expect(ezGameEngine.splashScreen).toBeInstanceOf(SplashScreen);
  });

  test("gameWindow property is an instance of HTMLDivElement", () => {
    expect(ezGameEngine.gameWindow instanceof HTMLDivElement).toBeTruthy();
  });
});
