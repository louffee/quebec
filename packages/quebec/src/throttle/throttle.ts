import type ThrottleFunction from "./ThrottleFunction";

let throttlePaused = false;

function throttle(callback: ThrottleFunction, time: number) {
  if (throttlePaused) {
    return;
  }

  throttlePaused = true;

  setTimeout(() => {
    callback();
    throttlePaused = false;
  }, time);
}

export default throttle;
