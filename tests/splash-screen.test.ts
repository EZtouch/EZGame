import { SplashScreen } from "../src/splash-screen";

/**
 * SplashScreen test
 */
describe("SplashScreen test", () => {
  let splashScreen: SplashScreen;

  beforeAll(() => {
    splashScreen = new SplashScreen();
  });

  test("works if true is truthy", () => {
    expect(splashScreen).toBeTruthy();
  });

  test("SplashScreen is instantiable", () => {
    expect(splashScreen).toBeInstanceOf(SplashScreen);
  });

  test("SplashScreen is dissmisable", () => {
    (global.console as any) = { log: jest.fn() };
    splashScreen.dismiss();
    expect(global.console.log).toHaveBeenCalledWith("Dismissing splash screen.");
  });
});
