import gameState from "./gameState";

const TICK_RATE = 3000;

// DELETED, when gameState.js was implemented
//function tick() {
//  console.log("tick", Date.now());
//}

async function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
