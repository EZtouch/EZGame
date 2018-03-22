import { EZGameEngine } from "./ez-game-engine";

window.addEventListener("load", () => {
    new EZGameEngine();
    I am a breaking build: (
});

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then((registration) => {
            console.log("SW registered: ", registration);
        }).catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
        });
    });
}
