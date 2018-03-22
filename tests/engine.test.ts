import { Engine } from "../src/engine";

/**
 * Engine test
 */
describe("Engine tests", () => {
  let engine: Engine;

  beforeAll(() => {
    engine = new Engine();
  });

  test("Engine is truthy", () => {
    expect(engine).toBeTruthy();
  });

  test("Engine is instantiable", () => {
    expect(engine).toBeInstanceOf(Engine);
  });

  test("Start time has a value", () => {
    expect(engine.startTime).toBeDefined();
  });

  test("Start time has a valid time", () => {
    const time: number = Date.now();
    expect(engine.startTime).toBeLessThanOrEqual(time);
  });
});
