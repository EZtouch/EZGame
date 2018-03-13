import { EZGameEngine } from "ez-game-engine/dist/ez-game-engine.umd";

const test = new EZGameEngine();
console.log(test);

if (`serviceWorker` in navigator) {
    window.addEventListener(`load`, () => {
        navigator.serviceWorker.register(`/sw.js`).then((registration) => {
            console.log(`SW registered: `, registration);
        }).catch((registrationError) => {
            console.log(`SW registration failed: `, registrationError);
        });
    });
}
