import { EZGameEngine } from "../src/ez-game-engine";

/**
 * EZGameEngine test
 */
describe("EZGameEngine test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy();
  });

  it("EZGameEngine is instantiable", () => {
    expect(new EZGameEngine()).toBeInstanceOf(EZGameEngine);
  });
});
